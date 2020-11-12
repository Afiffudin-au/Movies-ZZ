import React, { useEffect ,useState} from 'react'
import CardAllMovie from '../CardAllMovie/CardAllMovie'
import { useStateValue } from '../stateProvider/StateProvider'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import './AllMovies.scss'
import LinearProgress from '@material-ui/core/LinearProgress';
import { useAllMovies } from '../useGetMovie/useAllMovies';
function AllMovies() {
  const [showMore,setShowMore] = useState(1)
  const {getAllMovies} = useAllMovies()
  const [{allMovies}] = useStateValue()
  const loading = allMovies.loading
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
      loading && <LinearProgress color="secondary"/> 
    }
    <h1 className="text-lg p-2 font-semibold">All Movies to watch</h1>
    <div className="grid p-2 grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-10 xl3:grid-cols-12 gap-3">
      <MemoizedChildComponent URL={allMovies.url} allMovies={allMovies} posterUrl={posterUrl}/>
    </div>
    <div className="flex items-center">
      {
        showMore > 1 ? (
          <>
            <IconButton aria-label="Button" onClick={handleClickDec} style={{outline : '0',display : 'flex', alignItems : 'center'}}>
              <ArrowBackIcon/>
            </IconButton>
            <IconButton aria-label="Button" onClick={handleClickIn} style={{outline : '0',display : 'flex', alignItems : 'center'}}>
              <ArrowForwardIcon/>
            </IconButton>
          </>
        ):(
        <IconButton aria-label="Button" onClick={handleClickIn} style={{outline : '0',display : 'flex', alignItems : 'center'}}>
          <ArrowForwardIcon/>
        </IconButton>
        )
      }
      <span className="bg-blue-500 px-2 py-2 rounded shadow-xl text-gray-200"> Page {showMore} / {allMovies.total_Pages}</span>
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