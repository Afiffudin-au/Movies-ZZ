import React, { useEffect ,useState} from 'react'
import CardAllMovie from '../CardAllMovie/CardAllMovie'
import { useGetAllMovies } from '../useGetMovie/useGets'
import { useStateValue } from '../stateProvider/StateProvider'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import './AllMovies.scss'
import LoadingBar from '../LoadingBar/LoadingBar';
function AllMovies() {
  const [showMore,setShowMore] = useState(1)
  const [getAllMovies,loading] = useGetAllMovies()
  const [{allMovies}] = useStateValue()
  const posterUrl = 'https://image.tmdb.org/t/p/original'
  useEffect(()=>{
    getAllMovies(showMore)
  },[showMore])
  const handleClickIn = ()=>{
    const AllMovies = document.querySelector('.AllMovies')
    window.scrollTo(0,AllMovies.offsetTop - 50)
    setShowMore(current => current + 1)
  }
  const handleClickDec = ()=>{
    const AllMovies = document.querySelector('.AllMovies')
    window.scrollTo(0,AllMovies.offsetTop - 50)
    setShowMore(current => current - 1)
  }
  return (
    <div className="AllMovies">
    <hr/>
    {
      loading && <LoadingBar/>
    }
    <h6 className="text-lg p-2 font-semibold">All Movies to watch</h6>
    <div className="grid p-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-10 xl3:grid-cols-12 gap-3">
      <MemoizedChildComponent URL={allMovies.url} allMovies={allMovies} posterUrl={posterUrl}/>
    </div>
    <div className="flex items-center">
      {
        showMore > 1 ? (
          <>
            <IconButton onClick={handleClickDec} style={{outline : '0',display : 'flex', alignItems : 'center'}}>
              <ArrowBackIcon/>
            </IconButton>
            <IconButton onClick={handleClickIn} style={{outline : '0',display : 'flex', alignItems : 'center'}}>
              <ArrowForwardIcon/>
            </IconButton>
          </>
        ):(
        <IconButton onClick={handleClickIn} style={{outline : '0',display : 'flex', alignItems : 'center'}}>
          <ArrowForwardIcon/>
        </IconButton>
        )
      }
      <span className="bg-blue-500 px-2 py-2 rounded shadow-xl subpixel-antialiased text-gray-200"> Page {showMore} / {allMovies.total_Pages}</span>
    </div>
    </div>
  )
}
//kalau tidak menenerima props yang berkaitan ini tidak di render ulang 
function ChildComponent({URL,allMovies,posterUrl}){
  return(
    allMovies?.allTotalMovies?.map((allMovie,index)=>(
      <CardAllMovie URL={URL} id={allMovie.id} originalTitle={allMovie.original_title || allMovie.original_name} voteAverage={allMovie?.vote_average} posterPath={`${posterUrl}${allMovie.poster_path}`} key={allMovie.id}/>
    ))
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default AllMovies
