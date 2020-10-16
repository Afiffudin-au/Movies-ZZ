import React, {useState } from 'react'
import './Banner.scss'
import { useGetSearchMulti } from '../useGetMovie/useGets'
import { useHistory } from 'react-router-dom'

function Banner() {
  const [searchQuery,setSearchQuery]  = useState('')
  const [getSearchMulti] = useGetSearchMulti()
  const history = useHistory()
  const handleClick = ()=>{
    if(searchQuery !== ''){
      getSearchMulti(searchQuery)
      history.push('/result_search')
    }
  }
  return (
    <div className="banner flex items-center z-10">
     <div className="ml-5 w-11/12 sm:w-8/12">

      <div className="mb-5">
        <h1 className="text-white font-extrabold sm:text-4xl text-3xl ">Welcome.</h1>
        <h1 className="text-white font-semibold sm:text-2xl text-1xl">Millions of movies, TV shows and people to discover. Explore now.</h1>
      </div>

      <div className="bg-gray-200 rounded-full shadow-2xl w-full">
        <div className="flex bg-gray-200rounded-full w-full">
          <input aria-label="input search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="w-full p-3 rounded-full outline-none border-none bg-gray-200" type="text" placeholder="Search for movies,Tv Shows and person"/>
          <button onClick={handleClick} className="bg-red-700 rounded-full shadow-xl w-4/12 sm:w-3/12 outline-none border-none banner__button-search">Search</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Banner
