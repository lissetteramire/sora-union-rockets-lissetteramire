/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"

const Card = ({ rocket }: { rocket: Rocket }) => {
  return (
    <div key={rocket.id} className="card-container">
      <div className="image-container">
        <img src={rocket.imageUrl} alt="Rocket Image" className="card-image" />
      </div>
      <div className="card-column">
        <div className="card-header">
          <h2 className="card-title">{rocket.title}</h2>
          <div className="card-icons">
            <div className="card-icon">
              <img src="https://cdn.pixabay.com/photo/2021/02/19/14/44/delete-button-6030454_1280.png" alt="Icon 1" />
            </div>
            <div className="card-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/359/359794.png?w=740&t=st=1677074526~exp=1677075126~hmac=80538e5cf2be62cdc32dd259050d5bcaa491fde1f446337e5e79df15484f39f3" alt="Icon 2" />
            </div>
          </div>
        </div>
        <p className="card-description">{rocket.description}</p>
        <p className="card-author">{rocket.githubUserInformation}</p>
      </div>
    </div>
  )
}

export default Card
