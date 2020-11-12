import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useStylesToWatch } from '../UseStyles/UseStyles';
import StarIcon from '@material-ui/icons/Star';
import TodayIcon from '@material-ui/icons/Today';
import { useEffect } from 'react';
import CardTvToWatch from '../CardTvToWatch/CardTvToWatch';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useStateValue } from '../stateProvider/StateProvider';
import { useTvToWatch } from '../useGetMovie/useTvToWatch';
function TvToWatch() {
  const [value, setValue] = React.useState(0)
  const [{tvToWatch}] = useStateValue()
  const classes = useStylesToWatch()
  const loading = tvToWatch.loading
  const {getTvTopRated,getTvAiringToday} = useTvToWatch()
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
        loading && <LinearProgress color="secondary"/> 
      }
      <CardTvToWatch/>
    </>
  )
}

export default TvToWatch
