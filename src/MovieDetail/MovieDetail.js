import React from 'react'
import './MovieDetail.scss'
import { useStateValue } from '../stateProvider/StateProvider'
import LazyLoad from 'react-lazyload'
function MovieDetail() {
  const [{movieDetails}] = useStateValue()
  const backdropUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="movieDetail" style={{backgroundImage : `url(${backdropUrl}${movieDetails.backdrop_path})`}} >
      <div className="movieDetail__customBg">
        <div className="movieDetail__content flex p-12 items-center gap-5">
          <div className="movieDetail__img max-w-screen-xs">
          <LazyLoad
          width={300}
          height={400}
          debounce={false}
          >
            <img className="max-w-screen-xs rounded-lg" src={`${backdropUrl}${movieDetails.poster_path}`} alt=""/>
          </LazyLoad>
          </div>
          <div className="movieDetail__contentText">
            <h1>{movieDetails.title}</h1>
            <div className="flex">
            {
              movieDetails?.genres?.map((genre,index)=>(
                  <p key={genre.id} className="mr-2">{genre.name}</p>
                  ))
                }
            </div>
            <strong>Overview</strong>
            <p>{movieDetails.overview}</p>
            <strong>Budget</strong>
            <p>$ {movieDetails.budget}</p>
            <strong>Vote Average</strong>
            <p>{movieDetails.vote_average} of {movieDetails.vote_count} people</p>
            <strong>Release Date</strong>
            <p>{movieDetails.release_date}</p>
            {
              movieDetails?.homepage && <a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer"className="bg-blue-500 px-2 py-2 rounded shadow-2xl outline-none font-semibold hover:bg-blue-600">Watch Now</a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
