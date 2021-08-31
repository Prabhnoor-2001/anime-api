import React from 'react'

function RenderImages (props) {
  return (
    <div className="imageContainer">
      {
        props.listOfAnime.map(anime => {
          return (
            <div key={anime.mal_id}>
              <figure>
                <a href={anime.url}>
                  <img src={anime.image_url}></img>
                </a>
                <figcaption>{anime.title}</figcaption>
              </figure>

            </div>
          // <li key={anime.mal_id}>{anime.image_url}</li>
          )
        })}
    </div>
  )
}
export default RenderImages
