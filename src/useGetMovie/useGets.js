import Axios from 'axios'
import {useState} from 'react'
import { useCounterAddMovieTheme, useCounterAddMovieToWatch ,useCounterAddTvToWatch,useCounterAddAllMovies, useCounterAddMovieDetail, useCounterAddMultiResultSearch} from '../useCounter/useCounter'

//For Popular Component
export function useGetMovies(){
  const [addMovieTheme] = useCounterAddMovieTheme()
  const [loading,setLoading] = useState(true)
  const getMovies = ()=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params : {page : 1}
    }).then(res=>{
      setLoading(false)
      addMovieTheme(res.data.results,res.config.url)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return [getMovies,loading]
}

export function useGetTvShows(){
  const [addMovieTheme] = useCounterAddMovieTheme()
  const getTvShows = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addMovieTheme(res.data.results,res.config.url)
    }).catch(err=>{
      alert(err)
    })
  }
  return [getTvShows]
}
export function useGetNowPlaying(){
  const [addMovieTheme] = useCounterAddMovieTheme()
  const getNowPlaying = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/now_playing?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addMovieTheme(res.data.results,res.config.url)
    }).catch(err=>{
      alert(err)
    })
  }
  return [getNowPlaying]
}
//For MovieToWatch Component----------------------------------------------
export function useGetMovieTopRated(){
  const [addmovieToWatch] = useCounterAddMovieToWatch()
  const [loading,setLoading] = useState(true)
  const getMovieTopRated = ()=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      setLoading(false)
      addmovieToWatch(res.data.results,res.config.url)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return [getMovieTopRated,loading]
}
export function useGetMovieUpcoming(){
  const [addmovieToWatch] = useCounterAddMovieToWatch()
  const getMovieUpcoming = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/upcoming?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addmovieToWatch(res.data.results,res.config.url)
    }).catch(err=>{
      alert(err)
    })
  }
  return [getMovieUpcoming]
}
//For TvToWatch Component--------------------------------------------------
export function useGetTvTopRated(){
  const [addTvToWatch] = useCounterAddTvToWatch()
  const [loading,setLoading] = useState(true)
  const getTvTopRated = ()=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      setLoading(false)
      addTvToWatch(res.data.results,res.config.url)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return [getTvTopRated,loading]
}
export function useGetTvAiringToday(){
  const [addTvToWatch] = useCounterAddTvToWatch()
  const getTvAiringToday = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/airing_today?api_key=f59a67c847f06eb38cff7065821c1fd9',
      // params: {page : 15}
    }).then(res=>{
      addTvToWatch(res.data.results,res.config.url)
    }).catch(err=>{
      alert(err)
    })
  }
  return [getTvAiringToday]
}

//For AllMovies Component -----------------------------------------------------
export function useGetAllMovies(){
  const [addAllMovies] = useCounterAddAllMovies()
  const [loading,setLoading] = useState(true)
  const getAllMovies = (showMore) =>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : showMore}
    }).then(res=>{
      setLoading(false)
      addAllMovies(res.data.results,res.data.total_pages,res.config.url)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return [getAllMovies,loading]
}

//For Every first letter Card Component
export function useGetMovieDetail(){
  const [addMovieDetail] = useCounterAddMovieDetail()
  const getMovieDetail = (movie_id,URL,mediaType)=>{
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
  return [getMovieDetail]
}

//for Banner component 
export function useGetSearchMulti(){
  const [AddMultiResultSearch] = useCounterAddMultiResultSearch()
  const getSearchMulti = (query)=>{
  if(!query) return
   Axios({
     method : 'GET',
     url : 'https://api.themoviedb.org/3/search/multi?api_key=f59a67c847f06eb38cff7065821c1fd9',
     params: {query : query}
   }).then(res=>{
    AddMultiResultSearch(res.data.results,res.config.url)
   }).catch(err=>{
     alert(err)
   })
  }
  return[getSearchMulti]
}