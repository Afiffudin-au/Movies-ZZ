export const initialState = {
  movieThemes : {
    url : null,
    allTotalMovieThemes : [],
    loading : null
  },
  movieToWatch : {
    url : null,
    allTotalMovieToWatch : [],
    loading : null
  },
  tvToWatch : {
    url : null,
    allTotalTvToWatch : [],
    loading : null
  },
  preti : {
    url : null
  },
  allMovies : {
    url : null,
    total_Pages : null,
    allTotalMovies : [],
    loading : null
  },
  movieDetails : [],

  resultSearch : {
    url : null,
    allToTalMultiSearch : [],
    loading : null,
  }
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'SET_BY_MOVIE_THEME' :
    
    return{
      ...state,
      movieThemes : {
        url : action.movieThemes.url,
        allTotalMovieThemes : action.movieThemes.allTotalMovieThemes,
        loading : action.movieThemes.loading
      }
    }

    case 'SET_BY_MOVIE_TO_WATCH' :
    return{
      ...state,
      movieToWatch : {
        url : action.movieToWatch.url,
        allTotalMovieToWatch : action.movieToWatch.allTotalMovieToWatch,
        loading : action.movieToWatch.loading
      }
    }
    case 'SET_TV_TO_WATCH':
    return{
      ...state,
      tvToWatch : {
        url : action.tvToWatch.url,
        allTotalTvToWatch : action.tvToWatch.allTotalTvToWatch,
        loading : action.tvToWatch.loading
      }
    }
    case 'SET_ALL_MOVIES':
    return{
      ...state,
      allMovies : {
        url : action.allMovies.url,
        allTotalMovies : action.allMovies.allTotalMovies,
        total_Pages : action.allMovies.total_Pages,
        loading : action.allMovies.loading
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
        allToTalMultiSearch : action.resultSearch.allToTalMultiSearch,
        loading : action.resultSearch.loading
      }
    }
    default : 
    return state
  }
}
export default reducer