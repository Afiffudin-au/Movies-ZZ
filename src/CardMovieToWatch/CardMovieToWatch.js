import React from 'react'
import './CardMovieToWatch.scss'
import { useState } from 'react'
import { useStateValue } from '../stateProvider/StateProvider'
import CardItemMovieToWatch from './CardItemMovieToWatch/CardItemMovieToWatch'
function CardMovieToWatch() {
  const [isDown,setIsDown] = useState(false)
  const [startX,setStartX] = useState(0)
  const [scrollLeft,setScrollLeft] = useState(0)
  const [{movieToWatch}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  const handleMouseDown = (e)=>{
    const slider = document.querySelector('.card-container-items-movie-to-watch')
    setIsDown(true)
    slider.classList.add('active');
    setStartX(e.pageX - slider.offsetLeft)
    setScrollLeft(slider.scrollLeft)
  }
  const handleMouseLeave = (e)=>{
    const slider = document.querySelector('.card-container-items-movie-to-watch')
    setIsDown(false)
    slider.classList.remove('active');
  }
  const handleMouseUp = (e)=>{
    const slider = document.querySelector('.card-container-items-movie-to-watch')
    setIsDown(false)
    slider.classList.remove('active');
  }
  const handleMouseMove = (e)=>{
    const slider = document.querySelector('.card-container-items-movie-to-watch')
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  }
  return (
    <div className="card-container-movie-to-watch flex items-center justify-center"> 
      <div className="card-container-items-movie-to-watch"onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        <MemoizedChildComponent URL={movieToWatch.url} movieToWatch={movieToWatch} posterUrl={posterUrl}/>
      </div>
    </div>
  )
}
//Security for Tons Rendered,Because parents need a continuous change of state when is card drag and swipe right and left
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