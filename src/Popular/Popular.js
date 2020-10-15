import React,{useEffect} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MovieIcon from '@material-ui/icons/Movie';
import TheatersIcon from '@material-ui/icons/Theaters';
import './Popular.scss'
import { useStylesPopular } from '../UseStyles/UseStyles';
import  Card  from '../Card/Card'
import { useGetMovies, useGetTvShows, useGetNowPlaying } from '../useGetMovie/useGets';
import LoadingBar from '../LoadingBar/LoadingBar';
function Popular() {
  const classes = useStylesPopular()
  const [value, setValue] = React.useState(0);
  const [getMovies,loading] = useGetMovies()
  const [getTvShows] = useGetTvShows()
  const [getNowPlaying] = useGetNowPlaying()
  useEffect(()=>{
    getMovies()
  },[])
  return (
    <>
      <div className="flex items-center ml-5 flex-col sm:flex-row mt-5">
        <h5 className="p-2 mr-3 font-semibold text-2xl text-gray-900">What's Popular</h5>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction onClick={getMovies} label="Streaming" icon={<MovieIcon/>} />
        <BottomNavigationAction onClick={getTvShows} label="On Tv" icon={<LiveTvIcon/>} />
        <BottomNavigationAction onClick={getNowPlaying} label="In Theaters" icon={<TheatersIcon />} />
      </BottomNavigation>
      </div>
      {
       loading && <LoadingBar/> 
      }
      <Card/>
    </> 
  )
}
export default Popular
