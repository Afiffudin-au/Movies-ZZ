import Axios from "axios"
import { useCounterAddTvToWatch } from "../useCounter/useCounter"
//For TvToWatch Component--------------------------------------------------
export function useTvToWatch(){
  const [addTvToWatch] = useCounterAddTvToWatch()
  const getTvTopRated = ()=>{
    addTvToWatch([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      addTvToWatch(res.data.results,res.config.url,false)
    }).catch(err=>{
      addTvToWatch([],'',false)
      alert(err)
    })
  }
  const getTvAiringToday = ()=>{
    addTvToWatch([],'',true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/airing_today?api_key=f59a67c847f06eb38cff7065821c1fd9',
      // params: {page : 15}
    }).then(res=>{
      addTvToWatch(res.data.results,res.config.url,false)
    }).catch(err=>{
      addTvToWatch([],'',false)
      alert(err)
    })
  }
  return{
    getTvTopRated,getTvAiringToday
  }
}