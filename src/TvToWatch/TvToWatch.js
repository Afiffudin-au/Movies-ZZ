import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useStylesToWatch } from '../UseStyles/UseStyles';
import StarIcon from '@material-ui/icons/Star';
import {useGetTvTopRated,useGetTvAiringToday} from '../useGetMovie/useGets';
import TodayIcon from '@material-ui/icons/Today';
import { useEffect } from 'react';
import CardTvToWatch from '../CardTvToWatch/CardTvToWatch';
import LoadingBar from '../LoadingBar/LoadingBar';
function TvToWatch() {
  const [value, setValue] = React.useState(0)
  const classes = useStylesToWatch()
  const [getTvTopRated,loading] = useGetTvTopRated()
  const [getTvAiringToday] = useGetTvAiringToday()
  useEffect(()=>{
    getTvTopRated()
  },[])
  return (
    <>
      <div className="flex items-center ml-5 flex-col sm:flex-row mt-5">
        <h1 className="p-2 mr-3 font-semibold text-2xl text-gray-900">Tv To Watch</h1>
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction onClick={getTvTopRated} label="Top Rated" icon={<StarIcon/>} />
        <BottomNavigationAction onClick={getTvAiringToday} label="Airing Today" icon={<TodayIcon/>} />
      </BottomNavigation>
      </div>
      {
        loading && <LoadingBar/>
      }
      <CardTvToWatch/>
    </>
  )
}

export default TvToWatch
