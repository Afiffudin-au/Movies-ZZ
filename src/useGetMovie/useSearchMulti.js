import { useCounterAddMultiResultSearch } from "../useCounter/useCounter"
import Axios from "axios"

//for Banner component 
export function useSearchMulti(){
  const [AddMultiResultSearch] = useCounterAddMultiResultSearch()
  const getSearchMulti = (query)=>{
  AddMultiResultSearch([],'',true)
  if(!query) return
   Axios({
     method : 'GET',
     url : 'https://api.themoviedb.org/3/search/multi?api_key=f59a67c847f06eb38cff7065821c1fd9',
     params: {query : query}
   }).then(res=>{
    AddMultiResultSearch(res.data.results,res.config.url,false)
   }).catch(err=>{
    AddMultiResultSearch([],'',false)
     alert(err)
   })
  }
  return {getSearchMulti}
}