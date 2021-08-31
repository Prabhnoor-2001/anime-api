import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
// const apiURL = 'https://api.jikan.moe/v3/anime'
const apiSearchURL = 'https://api.jikan.moe/v3/search'
// *** EXAMPLE ***
export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}
// ***   ***   ***
export function showAnimeList (name) {
  // name = 'Naruto'
  if (name === '') {
    return request
      .get(`${apiSearchURL}/anime?q=${'Naruto'}`)
      .then(response => {
        response.body.results = []
        return response.body
      })
  } else {
    return request
      .get(`${apiSearchURL}/anime?q=${name}`)
      .then(response => response.body)
  }
}
