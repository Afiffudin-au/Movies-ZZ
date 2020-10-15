import React from 'react'
import Menu from '@material-ui/core/Menu';
import './Header.scss'
import { NavlinkDataMovies, NavlinkDataTvShows, NavLinkDataPeople } from './NavlinkData';
import MenuItems from './MenuItems'
import { IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStylesModal } from '../UseStyles/UseStyles';
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleTvShowClick = (event)=>{
    setAnchorEl2(event.currentTarget);
  }
  const handleTvShowClose = ()=>{
    setAnchorEl2(null);
  }

  const handlePeopleClick = (event)=>{
    setAnchorEl3(event.currentTarget);
  }
  const handlePeopleClose = ()=>{
    setAnchorEl3(null)
  }
  const handleOpen = ()=>{
    setOpen(!open);
  }
  const classes = useStylesModal()
  const body = (
    <div className={classes.paper}>
      <div className="flex flex-col gap-5" >
        <span  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="hover:text-gray-400 mr-5 px-1 py-1 text-white font-semibold cursor-pointer">Movies</span>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handleTvShowClick} className="hover:text-gray-400 mr-5 px-1 py-1 text-white font-semibold cursor-pointer">Tv Shows</span>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handlePeopleClick} className="hover:text-gray-400 mr-5 px-1 py-1 text-white font-semibold cursor-pointer">People</span>
      </div>
    </div>
  );
  return (
    <>
    <nav className="w-full shadow-xl bg-blue-900 p-3 flex items-center sticky top-0 justify-between sm:justify-start z-10">
      <div className="header-title ml-10">
        <h5 className="font-semibold text-2xl text-gray-200 mr-5">MOVIES ZZ</h5>
      </div>
      <div className="nav-link hidden sm:flex items-center">
        <span  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="hover:text-gray-400 mr-5 px-1 py-1 text-white font-semibold cursor-pointer">Movies</span>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handleTvShowClick} className="hover:text-gray-400 mr-5 px-1 py-1 text-white font-semibold cursor-pointer">Tv Shows</span>
        <span aria-controls="simple-menu" aria-haspopup="true" onClick={handlePeopleClick} className="hover:text-gray-400 mr-5 px-1 py-1 text-white font-semibold cursor-pointer">People</span>
      </div>
      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
             NavlinkDataMovies.map((data,index)=>(
               <div key={index} >
                 <MenuItems name={data.name} link={data.link}/>
               </div>
             ))
          }
        
        </Menu>
      </div>
      <div>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleTvShowClose}
        >
          {
            NavlinkDataTvShows.map((data,index)=>(
              <div key={index}>
                  <MenuItems name={data.name} link={data.link}/>
              </div>
            ))
          }
        </Menu>
      </div>
      <div>
      <Menu
          id="simple-menu"
          anchorEl={anchorEl3}
          keepMounted
          open={Boolean(anchorEl3)}
          onClose={handlePeopleClose}
        >
          {
            NavLinkDataPeople.map((data,index)=>(
              <div key={index}>
                  <MenuItems name={data.name} link={data.link}/>
              </div>
            ))
          }
        </Menu>
      </div>
      <div  className="sm:hidden block">
        <IconButton onClick={handleOpen} style={{outline : 0}}>
          <MenuIcon style={{ fontSize: 35 }}/>
        </IconButton>
      </div>
    </nav>
    <div className="sm:hidden block fixed w-full z-10">
      {open && body}
    </div>
    </>
  )
}

export default Header
