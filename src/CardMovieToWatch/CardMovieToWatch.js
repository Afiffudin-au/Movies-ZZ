import React from 'react'
import './CardMovieToWatch.scss'
import { useStateValue } from '../stateProvider/StateProvider'
import CardItemMovieToWatch from './CardItemMovieToWatch/CardItemMovieToWatch'
function CardMovieToWatch() {
  const [{movieToWatch}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="card-container-movie-to-watch flex items-center justify-center"> 
      <div className="card-container-items-movie-to-watch">
        <MemoizedChildComponent URL={movieToWatch.url} movieToWatch={movieToWatch} posterUrl={posterUrl}/>
      </div>
    </div>
  )
}
function ChildComponent({URL,movieToWatch,posterUrl}){
  return (
    movieToWatch?.allTotalMovieToWatch?.map((movieToWatch,index)=>(
      <CardItemMovieToWatch URL={URL} id={movieToWatch.id} releaseDate={movieToWatch.release_date || movieToWatch.first_air_date} originalTitle={movieToWatch.original_title || movieToWatch.original_name} posterPath={`${posterUrl}${movieToWatch.poster_path}`} voteAverage={movieToWatch?.vote_average} key={movieToWatch.id}/>
    ))
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default CardMovieToWatch