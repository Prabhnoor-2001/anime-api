import React from 'react'

const SearchBar = (props) => {
  const BarStyling = { width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem' }
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        props.setAnimeList()
      }}>
        <input
          style={BarStyling}
          type='search'
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        <button onClick={props.setAnimeList} >search</button>
      </form>

    </>
  )
}
export default SearchBar
