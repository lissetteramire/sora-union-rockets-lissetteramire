import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const [title, setTitle] = useState("")
  const [rocketName, setRocketName] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [githubUserInformation, setGithubUserInformation] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newRocket: Rocket = {
      id: Math.floor(Math.random() * 1000),
      title,
      rocketName,
      description,
      imageUrl,
      githubUserInformation
    }
    console.log(newRocket)
    navigate("/")
  }

  return (
    <div>
      <header className="header_Form">
        <img src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767__340.png" alt="Logo" className="logo" />
        <h1 className="title">Create a new Rocket</h1>
      </header>
      <main className="structure_Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={event => setTitle(event.target.value)} />
          <label htmlFor="rocketName">Rocket Name</label>
          <input type="text" id="rocketName" name="rocketName" value={rocketName} onChange={event => setRocketName(event.target.value)} />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" value={description} onChange={event => setDescription(event.target.value)} />
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" value={imageUrl} onChange={event => setImageUrl(event.target.value)} />
          <label htmlFor="githubUserInformation">Github User Information</label>
          <input type="text" id="githubUserInformation" name="githubUserInformation" value={githubUserInformation} onChange={event => setGithubUserInformation(event.target.value)} />
          <button type="submit">Create Rocket</button>
        </form>
      </main>
    </div>
  )
}

export default Form
