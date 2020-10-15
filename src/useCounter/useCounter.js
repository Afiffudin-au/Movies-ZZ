import { useStateValue } from "../stateProvider/StateProvider"
export const useCounterAddMovieTheme = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAdd = (movieTheme,url)=>{
  dispatch({
      type : 'SET_BY_MOVIE_THEME',
      movieThemes : {
        url : url,
        allTotalMovieThemes : movieTheme
      }
    })
  }
  const addMovieTheme = (movieTheme,url)=>{
    handleAdd(movieTheme,url)
  }
  return[
    addMovieTheme
  ]
}
export const useCounterAddMovieToWatch = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAdd = (movieToWatch,url)=>{
  dispatch({
      type : 'SET_BY_MOVIE_TO_WATCH',
      movieToWatch : {
        url : url,
        allTotalMovieToWatch : movieToWatch
      }
    })
  }
  const addmovieToWatch = (movieToWatch,url)=>{
    handleAdd(movieToWatch,url)
  }
  return[
    addmovieToWatch
  ]
}
export const useCounterAddTvToWatch = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAdd = (tvToWatch,url)=>{
    dispatch({
      type : 'SET_TV_TO_WATCH',
      tvToWatch : {
        url : url,
        allTotalTvToWatch : tvToWatch
      }
    })
  }
  const addTvToWatch = (tvToWatch,url)=>{
    handleAdd(tvToWatch,url)
  }
  return [addTvToWatch]
}
export const useCounterAddAllMovies = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAdd = (allMovies,total_Pages,url)=>{
    dispatch({
      type : 'SET_ALL_MOVIES',
      allMovies : {
        url : url,
        allTotalMovies : allMovies,
        total_Pages : total_Pages
      }
    })
  }
  const addAllMovies = (allMovies,total_Pages,url)=>{
    handleAdd(allMovies,total_Pages,url)
  }
  return [addAllMovies]
}
export const useCounterAddMovieDetail = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAdd = (movieDetail)=>{
    dispatch({
      type : 'SET_MOVIE_DETAIL',
      movieDetail : movieDetail
    })
  }
  const addMovieDetail = (movieDetail)=>{
    handleAdd(movieDetail)  
  }
  return [addMovieDetail]
}
export const useCounterAddMultiResultSearch = ()=>{
  const [{},dispatch] = useStateValue()
  const handleAdd = (result,url) =>{
    dispatch({
      type : 'SET_MULTI_RESULT_SEARCH',
      resultSearch : {
        url : url,
        allToTalMultiSearch : result
      }
    })
  }
  const AddMultiResultSearch = (result,url)=>{
    handleAdd(result,url)
  }
  return[AddMultiResultSearch]
}