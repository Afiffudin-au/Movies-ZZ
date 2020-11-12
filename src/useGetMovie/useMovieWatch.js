import Axios from "axios"
import { useCounterAddMovieToWatch } from "../useCounter/useCounter"
// for MovieToWatch component
export function useMovieWatch(){
  const [addmovieToWatch] = useCounterAddMovieToWatch()
  const getMovieTopRated = ()=>{
    addmovieToWatch([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addmovieToWatch(res.data.results,res.config.url,false)
    }).catch(err=>{
      addmovieToWatch([],'',false)
      alert(err)
    })
  }
  const getMovieUpcoming = ()=>{
    addmovieToWatch([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/upcoming?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addmovieToWatch(res.data.results,res.config.url,false)
    }).catch(err=>{
      addmovieToWatch([],'',false)
      alert(err)
    })
  }
  return {getMovieTopRated,getMovieUpcoming}
}