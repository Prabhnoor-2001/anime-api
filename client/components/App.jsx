import React, { useState, useEffect } from 'react'
import { showAnimeList } from '../api'
import SearchBar from './SearchBar'
import RenderImages from './RenderImages'
function App () {
  const [listOfAnime, setListOfAnime] = useState([])
  const [currentAnime, setAnime] = useState('')
  const [currentSearch, setSearch] = useState('')

  useEffect(() => { // call setAnimeList to set SetListOfAnime
    setAnimeList()
  }, [])

  function setAnimeList () {
    showAnimeList(currentAnime)
      .then(res => {
        setListOfAnime(res.results)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  function handleAnimeName (name) {
    setAnime(name)
  }
  function handleChange (event) {
    setSearch(event.target.value)
    handleAnimeName(currentSearch)
    // console.log(currentSearch)
  }
  return (
    <>
      <h1>Konnichwa weeb-kun</h1>
      <SearchBar
        placeholder='Anime... e.g. Naruto'
        handleChange={(event) => {
          handleChange(event)
        }}
        setAnimeList={setAnimeList}
      />
      <RenderImages listOfAnime={listOfAnime}/>
    </>
  )
}

export default App
