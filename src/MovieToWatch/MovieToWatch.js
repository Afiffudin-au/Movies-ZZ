import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useStylesToWatch } from '../UseStyles/UseStyles';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CardMovieToWatch from '../CardMovieToWatch/CardMovieToWatch';
import { useGetMovieTopRated, useGetMovieUpcoming } from '../useGetMovie/useGets';
import { useEffect } from 'react';
import LoadingBar from '../LoadingBar/LoadingBar';
function MovieToWatch() {
  const [value, setValue] = React.useState(0);
  const classes = useStylesToWatch()
  const [getMovieTopRated,loading] = useGetMovieTopRated()
  const [getMovieUpcoming] = useGetMovieUpcoming()
  useEffect(()=>{
    getMovieTopRated()
  },[])
  return (
    <>
      <div className="flex items-center ml-5 flex-col sm:flex-row mt-5">
        <h5 className="p-2 mr-3 font-semibold text-2xl text-gray-900">Movie To Watch</h5>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction onClick={getMovieTopRated} label="Top Rated" icon={<StarIcon/>} />
        <BottomNavigationAction onClick={getMovieUpcoming} label="Upcoming" icon={<AccessTimeIcon/>} />
      </BottomNavigation>
      </div>
      {
        loading && <LoadingBar/>
      }
      <CardMovieToWatch/>
    </>
  )
}

export default MovieToWatch
