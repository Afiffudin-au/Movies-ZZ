import React from 'react'
import './CardItemTvToWatch.scss'
import StarRateIcon from '@material-ui/icons/StarRate';
import {amber} from '@material-ui/core/colors';
import LazyLoad from 'react-lazyload'
import { useGetMovieDetail } from '../../useGetMovie/useGets';
import { useHistory } from 'react-router-dom';
function CardItemTvToWatch({URL,id,releaseDate,originalTitle,posterPath,voteAverage}) {
  const [getMovieDetail] = useGetMovieDetail()
  const history =  useHistory()
  const handleClick = (e)=>{
   getMovieDetail(id,URL)
    history.push('/detail')
  }

  return (
    <div className="card-container-item-tv-to-watch rounded mr-2 bg-white">
      <div onClick={handleClick} className="card-container-item-tv-content-to-watch tooltip flex flex-col relative">
        <LazyLoad 
          width={150}
          height={200}
          debounce={false}
          // offsetVertical={500}
          >
        <img className="rounded-lg w-full object-fill" src={posterPath} alt=""/>
        </LazyLoad>
        <div className="p-2">
          <h1 className="font-bold text-lg text-black antialiased overflow-hidden">{originalTitle?.slice(-originalTitle.length,15)}</h1>
          <p className="font-normal text-sm text-gray-900 antialiased">{releaseDate}</p>
        </div>
        <div className="star-rate bg-blue-600 rounded-full p-1 flex items-center">
          <StarRateIcon style={{color : amber[600]}} />
          <span className="text-white">{voteAverage}</span>
        </div>
        <span className="tooltiptext">Detail Movie</span>
      </div>
    </div>
  )
}
export default CardItemTvToWatch
