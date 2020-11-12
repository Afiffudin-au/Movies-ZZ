import React from 'react'
import './Card.scss'
import CardItem from './CardItem/CardItem'
import { useStateValue } from '../stateProvider/StateProvider'
function Card() {
  const [{movieThemes}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  const URL = movieThemes?.url
  return (
    <div className="card-container flex items-center justify-center"> 
      <div className="card-container-items">
        <MemoizedChildComponent URL={URL} movieThemes={movieThemes} posterUrl={posterUrl}/>
      </div>
    </div>
  )
}
function ChildComponent({URL,movieThemes,posterUrl}){
  return (
    movieThemes?.allTotalMovieThemes?.map((movieTheme,index)=>(
      <CardItem URL={URL} id={movieTheme.id} releaseDate={movieTheme.release_date || movieTheme.first_air_date} originalTitle={movieTheme.original_title || movieTheme.original_name} posterPath={`${posterUrl}${movieTheme.poster_path}`} key={movieTheme.id} />
    ))
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default Card
