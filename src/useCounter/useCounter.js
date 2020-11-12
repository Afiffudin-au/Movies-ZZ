import { useStateValue } from "../stateProvider/StateProvider"
export const useCounterAddMovieTheme = ()=>{
  const [{},dispatch] = useStateValue()
  const addMovieTheme = (movieTheme,url,loading)=>{
  dispatch({
      type : 'SET_BY_MOVIE_THEME',
      movieThemes : {
        allTotalMovieThemes : movieTheme,
        url : url,
        loading : loading
      }
    })
  }
  return[
    addMovieTheme
  ]
}
export const useCounterAddMovieToWatch = ()=>{
  const [{},dispatch] = useStateValue()
  const addmovieToWatch = (movieToWatch,url,loading)=>{
  dispatch({
      type : 'SET_BY_MOVIE_TO_WATCH',
      movieToWatch : {
        allTotalMovieToWatch : movieToWatch,
        url : url,
        loading : loading
      }
    })
  }
  return[
    addmovieToWatch
  ]
}
export const useCounterAddTvToWatch = ()=>{
  const [{},dispatch] = useStateValue()
  const addTvToWatch = (tvToWatch,url,loading)=>{
    dispatch({
      type : 'SET_TV_TO_WATCH',
      tvToWatch : {
        allTotalTvToWatch : tvToWatch,
        url : url,
        loading : loading
      }
    })
  }
  return [addTvToWatch]
}
export const useCounterAddAllMovies = ()=>{
  const [{},dispatch] = useStateValue()
  const addAllMovies = (allMovies,total_Pages,url,loading)=>{
    dispatch({
      type : 'SET_ALL_MOVIES',
      allMovies : {
        allTotalMovies : allMovies,
        total_Pages : total_Pages,
        url : url,
        loading : loading
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
  const AddMultiResultSearch = (result,url,loading) =>{
    dispatch({
      type : 'SET_MULTI_RESULT_SEARCH',
      resultSearch : {
        allToTalMultiSearch : result,
        url : url,
        loading: loading
      }
    })
  }
  return[AddMultiResultSearch]
}