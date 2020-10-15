import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Popular from '../Popular/Popular'
import MovieToWatch from '../MovieToWatch/MovieToWatch'
import TvToWatch from '../TvToWatch/TvToWatch'
import AllMovies from '../AllMovies/AllMovies'
import '../FadeCss/Fade.scss'
function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Popular/>
      <MovieToWatch/>
      <TvToWatch/>
      <AllMovies/>
    </>
  )
}

export default Home
