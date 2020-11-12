import Axios from 'axios'
import { useCounterAddMovieDetail, } from '../useCounter/useCounter'

//For Every first letter Card Component
export function useMovieDetail(){
  const [addMovieDetail] = useCounterAddMovieDetail()
  const getMovieDetail = (movie_id,URL,mediaType)=>{
    addMovieDetail([])
    const urlSplit = URL?.split('popular',1)
    .join('').split('now_playing',1)
    .join('').split('upcoming',1)
    .join('').split('top_rated',1)
    .join('').split('airing_today',1)
    .join('').split('search/multi',1)
    let url = ''
    if(mediaType){
      url = `https://api.themoviedb.org/3/${mediaType}/${movie_id}?api_key=f59a67c847f06eb38cff7065821c1fd9`
    }else{
      url = `${urlSplit}${movie_id}?api_key=f59a67c847f06eb38cff7065821c1fd9`
    }
    Axios({
      method : 'GET',
      url : url
      // remove this after dev 
      // url : 'https://api.themoviedb.org/3/movie/497582?api_key=f59a67c847f06eb38cff7065821c1fd9',
    }).then(res=>{
      addMovieDetail(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return {getMovieDetail}
}