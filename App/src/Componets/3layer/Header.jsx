// import React from 'react'
import {AppBar ,Toolbar,IconButton,Typography, Tab ,Tabs} from "@material-ui/core"
import MenuIcon from "@material-ui/icons";
import  {useNavigate}  from 'react-router-dom';
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Header = () => {
    const page=["Home","crypto"]
    const Navigate=useNavigate()
  return (
    <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        {/* <MenuIcon /> */}
      </IconButton>
      {/* <Typography variant="h6" color="inherit" align='center'> */}
         <Tabs>
            {
                page.map((page,index)=>
                    <Tab key={index}  label={page} onClick={()=>Navigate  (`/${page}`)}/>
                )
            }
         </Tabs>
         <h6 style={{marginLeft:"auto",marginTop:"10px"}}> <ConnectButton/> </h6>
      {/* </Typography> */}
    </Toolbar>
  </AppBar>
  )
}

export default Header