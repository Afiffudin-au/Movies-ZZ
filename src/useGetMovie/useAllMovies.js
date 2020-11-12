import Axios from "axios"
//For AllMovies Component -----------------------------------------------------
import { useCounterAddAllMovies } from "../useCounter/useCounter"
export function useAllMovies(){
  const [addAllMovies] = useCounterAddAllMovies()
  const getAllMovies = (showMore) =>{
    addAllMovies([],null,'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : showMore}
    }).then(res=>{
      addAllMovies(res.data.results,res.data.total_pages,res.config.url,false)
    }).catch(err=>{
      addAllMovies([],null,'',false)
      alert(err)
    })
  }
  return {getAllMovies}
}