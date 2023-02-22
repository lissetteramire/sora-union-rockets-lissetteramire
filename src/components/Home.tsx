import { useState, useEffect } from "react"
import Card from "./Card"
import { rocketsData } from "../fixtures/rocketsData"
import { Link } from "react-router-dom"

const Home = () => {
  const [rockets, setRockets] = useState<Rocket[]>([])

  useEffect(() => {
    setRockets(rocketsData)
    // axios.get('https://api.example.com/cards')
    //   .then(response => setRockets(response.data))
    //   .catch(error => console.log(error));
  }, [])

  return (
    <div>
      <header className="header">
        <img src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767__340.png" alt="Logo" className="logo" />
        <h1 className="title">List of Rockets</h1>
        <Link to="/second">
          <span className="addsign">+</span>
        </Link>
      </header>
      <main>
        {rockets.map(rocket => (
          <Card key={rocket.id} rocket={rocket} />
        ))}
      </main>
    </div>
  )
}
export default Home
