import React from 'react'
import './Card.scss'
import { useState } from 'react'
import CardItem from './CardItem/CardItem'
import { useStateValue } from '../stateProvider/StateProvider'
function Card() {
  const [isDown,setIsDown] = useState(false)
  const [startX,setStartX] = useState(0)
  const [scrollLeft,setScrollLeft] = useState(0)
  const [{movieThemes}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  const URL = movieThemes?.url
  const handleMouseDown = (e)=>{
    const slider = document.querySelector('.card-container-items')
    setIsDown(true)
    slider.classList.add('active');
    setStartX(e.pageX - slider.offsetLeft)
    setScrollLeft(slider.scrollLeft)
  }
  const handleMouseLeave = (e)=>{
    const slider = document.querySelector('.card-container-items')
    setIsDown(false)
    slider.classList.remove('active');
  }
  const handleMouseUp = (e)=>{
    const slider = document.querySelector('.card-container-items')
    setIsDown(false)
    slider.classList.remove('active');
  }
  const handleMouseMove = (e)=>{
    const slider = document.querySelector('.card-container-items')
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  }
  return (
    <div className="card-container flex items-center justify-center"> 
      <div className="card-container-items"onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        <MemoizedChildComponent URL={URL} movieThemes={movieThemes} posterUrl={posterUrl}/>
      </div>
    </div>
  )
}
//Security for Tons Rendered,Because parents need a continuous change of state when is card drag and swipe right and left
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
