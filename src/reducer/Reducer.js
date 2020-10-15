export const initialState = {
  movieThemes : {
    url : null,
    allTotalMovieThemes : []
  },
  movieToWatch : {
    url : null,
    allTotalMovieToWatch : []
  },
  tvToWatch : {
    url : null,
    allTotalTvToWatch : []
  },
  allMovies : {
    url : null,
    total_Pages : null,
    allTotalMovies : []
  },
  movieDetails : [],

  resultSearch : {
    url : null,
    allToTalMultiSearch : []
  }
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'SET_BY_MOVIE_THEME' :
    
    return{
      ...state,
      movieThemes : {
        url : action.movieThemes.url,
        allTotalMovieThemes : action.movieThemes.allTotalMovieThemes
      }
    }

    case 'SET_BY_MOVIE_TO_WATCH' :
    return{
      ...state,
      movieToWatch : {
        url : action.movieToWatch.url,
        allTotalMovieToWatch : action.movieToWatch.allTotalMovieToWatch
      }
    }
    case 'SET_TV_TO_WATCH':
    return{
      ...state,
      tvToWatch : {
        url : action.tvToWatch.url,
        allTotalTvToWatch : action.tvToWatch.allTotalTvToWatch
      }
    }
    case 'SET_ALL_MOVIES':
    return{
      ...state,
      allMovies : {
        url : action.allMovies.url,
        allTotalMovies : action.allMovies.allTotalMovies,
        total_Pages : action.allMovies.total_Pages
      }
    }
    case 'SET_MOVIE_DETAIL':
    return{
      ...state,
      movieDetails : action.movieDetail
    }
    case 'SET_MULTI_RESULT_SEARCH':
    return{
      ...state,
      resultSearch : {
        url : action.resultSearch.url,
        allToTalMultiSearch : action.resultSearch.allToTalMultiSearch
      }
    }
    default : 
    return state
  }
}
export default reducer