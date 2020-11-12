import React from 'react'
import './CardTvToWatch.scss'
import { useStateValue } from '../stateProvider/StateProvider'
import CardItemTvToWatch from './CardItemTvToWatch/CardItemTvToWatch'
function CardTvToWatch() {
  const [{tvToWatch}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="card-container-tv-to-watch flex items-center justify-center"> 
      <div className="card-container-items-tv-to-watch">
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