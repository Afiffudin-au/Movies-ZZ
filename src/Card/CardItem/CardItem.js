import React from 'react'
import './CardItem.scss'
import LazyLoad from 'react-lazyload';
import { useMovieDetail } from '../../useGetMovie/useMovieDetail';
import { useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
function CardItem({URL,id,releaseDate,originalTitle,posterPath}) {
  const {getMovieDetail} = useMovieDetail()
  const history = useHistory()
  const handleClick = (e)=>{
   getMovieDetail(id,URL)
   history.push('/detail')
  }
  return (
    <div className="card-container-item rounded mr-2 bg-white">
      <div onClick={handleClick} className="flex tooltip flex-col card-container-item-content" >
         <LazyLoad 
          width={150}
          height={200}
          placeholder={<LinearProgress color="secondary"/>}
          >
        <img className="rounded-lg w-full object-fill" src={posterPath} alt=""/>
        </LazyLoad>
        <div className="p-2">
          <h1 className="font-bold text-lg text-black antialiased overflow-hidden">{originalTitle?.slice(-originalTitle.length,15)}</h1>
          <p className="font-normal text-sm text-gray-900 antialiased">{releaseDate}</p>
        </div>
      <span className="tooltiptext">Detail Movie</span>
      </div>
    </div>
  )
}
export default CardItem
