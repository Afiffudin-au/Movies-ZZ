import React from 'react'
import './CardAllMovie.scss'
import StarRateIcon from '@material-ui/icons/StarRate';
import {amber} from '@material-ui/core/colors';
import LazyLoad from 'react-lazyload'
import { useMovieDetail } from '../useGetMovie/useMovieDetail';
import { useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
function CardAllMovie({URL,mediaType,id,originalTitle,voteAverage,posterPath}) {
  const {getMovieDetail} = useMovieDetail()
  const history = useHistory()
  const handleClick = (e)=>{
    getMovieDetail(id,URL,mediaType)
    history.push('/detail')
  }
  return (
    <div onClick={handleClick} className="cardAllMovies tooltip relative cursor-pointer shadow-2xl rounded mx-auto">
        <LazyLoad 
          width={130}
          height={200}
          placeholder={<LinearProgress color="secondary"/>}
        >
          <img className="lozad object-fill rounded-t-sm" src={posterPath} alt=""/>
        </LazyLoad>
      <div className="p-1">
        <small className="cardAllMovies__title overflow-hidden">{originalTitle}</small>
        <div className="cardAllMovies__starRate flex items-center shadow-2xl">
          <StarRateIcon style={{color : amber[800],fontSize : '25px'}} />
          <span className="text-white font-extrabold text-lg">{voteAverage}</span>
        </div>
      </div>
      <span className="tooltiptext">Detail Movie</span>
    </div>
  )
}

export default CardAllMovie
