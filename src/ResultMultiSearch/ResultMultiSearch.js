import React from 'react'
import { useStateValue } from '../stateProvider/StateProvider'
import CardAllMovie from '../CardAllMovie/CardAllMovie'
function ResultMultiSearch() {
  const [{resultSearch}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  const checkMovie = resultSearch.allToTalMultiSearch?.length === 0 && !resultSearch?.loading
  const cannotFindMovie = checkMovie
  return (
    <>
    {
      cannotFindMovie && <p className="text-black text-xl uppercase">Sorry We Cannot Find...</p>
    }
     <div className="grid p-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-10 xl3:grid-cols-12 gap-3">
        {
          resultSearch?.allToTalMultiSearch?.map((item,index)=>(
            <CardAllMovie URL={resultSearch.url} mediaType={item.media_type} id={item.id} originalTitle={item.original_title || item.original_name} voteAverage={item?.vote_average} posterPath={`${posterUrl}${item.poster_path}`} key={item.id}/>
          ))
        }
     </div>
    </>
  )
}

export default ResultMultiSearch
