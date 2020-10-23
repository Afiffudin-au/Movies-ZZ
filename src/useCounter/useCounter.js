import { useStateValue } from "../stateProvider/StateProvider"
export const useCounterAddMovieTheme = ()=>{
  const [{},dispatch] = useStateValue()
  const addMovieTheme = (movieTheme,url)=>{
  dispatch({
      type : 'SET_BY_MOVIE_THEME',
      movieThemes : {
        url : url,
        allTotalMovieThemes : movieTheme
      }
    })
  }
  return[
    addMovieTheme
  ]
}
export const useCounterAddMovieToWatch = ()=>{
  const [{},dispatch] = useStateValue()
  const addmovieToWatch = (movieToWatch,url)=>{
  dispatch({
      type : 'SET_BY_MOVIE_TO_WATCH',
      movieToWatch : {
        url : url,
        allTotalMovieToWatch : movieToWatch
      }
    })
  }
  return[
    addmovieToWatch
  ]
}
export const useCounterAddTvToWatch = ()=>{
  const [{},dispatch] = useStateValue()
  const addTvToWatch = (tvToWatch,url)=>{
    dispatch({
      type : 'SET_TV_TO_WATCH',
      tvToWatch : {
        url : url,
        allTotalTvToWatch : tvToWatch
      }
    })
  }
  return [addTvToWatch]
}
export const useCounterAddAllMovies = ()=>{
  const [{},dispatch] = useStateValue()
  const addAllMovies = (allMovies,total_Pages,url)=>{
    dispatch({
      type : 'SET_ALL_MOVIES',
      allMovies : {
        url : url,
        allTotalMovies : allMovies,
        total_Pages : total_Pages
      }
    })
  }
  return [addAllMovies]
}
export const useCounterAddMovieDetail = ()=>{
  const [{},dispatch] = useStateValue()
  const addMovieDetail = (movieDetail)=>{
    dispatch({
      type : 'SET_MOVIE_DETAIL',
      movieDetail : movieDetail
    })
  }
  return [addMovieDetail]
}
export const useCounterAddMultiResultSearch = ()=>{
  const [{},dispatch] = useStateValue()
  const AddMultiResultSearch = (result,url) =>{
    dispatch({
      type : 'SET_MULTI_RESULT_SEARCH',
      resultSearch : {
        url : url,
        allToTalMultiSearch : result
      }
    })
  }
  return[AddMultiResultSearch]
}