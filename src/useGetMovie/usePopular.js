import Axios from "axios"
import { useCounterAddMovieTheme } from "../useCounter/useCounter"

//For Popular Component
export function usePopular(){
  const [addMovieTheme] = useCounterAddMovieTheme()
  const getMovies = ()=>{
    addMovieTheme([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params : {page : 1}
    }).then(res=>{
      addMovieTheme(res.data.results,res.config.url,false)
    }).catch(err=>{
      addMovieTheme([],'',false)
      alert(err)
    })
  }
  const getTvShows = ()=>{
    addMovieTheme([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addMovieTheme(res.data.results,res.config.url,false)
    }).catch(err=>{
      addMovieTheme([],'',false)
      alert(err)
    })
  }
  const getNowPlaying = ()=>{
    addMovieTheme([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/now_playing?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addMovieTheme(res.data.results,res.config.url,false)
    }).catch(err=>{
      addMovieTheme([],'',false)
      alert(err)
    })
  }
  return{
    getMovies,getTvShows,getNowPlaying
  }
}
