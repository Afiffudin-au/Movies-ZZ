import React from 'react'
import './CardTvToWatch.scss'
import { useState } from 'react'
import { useStateValue } from '../stateProvider/StateProvider'
import CardItemTvToWatch from './CardItemTvToWatch/CardItemTvToWatch'
function CardTvToWatch() {
  const [isDown,setIsDown] = useState(false)
  const [startX,setStartX] = useState(0)
  const [scrollLeft,setScrollLeft] = useState(0)
  const [{tvToWatch}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  const handleMouseDown = (e)=>{
    const slider = document.querySelector('.card-container-items-tv-to-watch')
    setIsDown(true)
    slider.classList.add('active');
    setStartX(e.pageX - slider.offsetLeft)
    setScrollLeft(slider.scrollLeft)
  }
  const handleMouseLeave = (e)=>{
    const slider = document.querySelector('.card-container-items-tv-to-watch')
    setIsDown(false)
    slider.classList.remove('active');
  }
  const handleMouseUp = (e)=>{
    const slider = document.querySelector('.card-container-items-tv-to-watch')
    setIsDown(false)
    slider.classList.remove('active');
  }
  const handleMouseMove = (e)=>{
    const slider = document.querySelector('.card-container-items-tv-to-watch')
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  }
  return (
    <div className="card-container-tv-to-watch flex items-center justify-center"> 
      <div className="card-container-items-tv-to-watch"onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        <MemoizedChildComponent URL={tvToWatch.url} tvToWatch={tvToWatch} posterUrl={posterUrl}/>
      </div>
    </div>
  )
}
//Security for Tons Rendered,Because parents need a continuous change of state when is card drag and swipe right and left
function ChildComponent({URL,tvToWatch,posterUrl}){
  return (
    tvToWatch?.allTotalTvToWatch?.map((tvToWatch,index)=>(
      <CardItemTvToWatch URL={URL} id={tvToWatch.id} releaseDate={tvToWatch.release_date || tvToWatch.first_air_date} originalTitle={tvToWatch.original_title || tvToWatch.original_name} posterPath={`${posterUrl}${tvToWatch.poster_path}`} voteAverage={tvToWatch?.vote_average} key={tvToWatch.id}/>
    ))
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}

const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default CardTvToWatch