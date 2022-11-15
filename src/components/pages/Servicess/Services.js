import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import { Divider } from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import GamesIcon from '@mui/icons-material/Games';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Diet from "./Functions/Diet";
import Exercise from "./Functions/Exercise"
import Games from './Functions/Games'
import { BrowserRouter, Link, Router, Route, NavLink } from 'react-router-dom';
import Footer from '../../Footer'


export default function Services() {
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
   
    console.warn(newValue)
    setValue(newValue)
  };



 

  return (
    <div>
    <Box sx={{ width: '100%', bgcolor: 'white' }}>
      <BrowserRouter>
      
      <Tabs value={value} onChange={handleChange} centered>
      
      <Tab icon={<DinnerDiningIcon />} label="MEALS" />
      
      <Tab icon={<DirectionsRunIcon />} label="EXERCISES" />
      <Tab icon={<GamesIcon />} label="GAMES" />
      <Tab icon={<SelfImprovementIcon />} label="MEDITATION" />
      
      
        
      </Tabs>
     
  
      </BrowserRouter>
      
      <TabPanel value={value} index={0}><Diet/></TabPanel>
      <TabPanel value={value} index={1}><Exercise/></TabPanel>
      <TabPanel value={value} index={2}><Games/></TabPanel>
      <TabPanel value={value} index={3}>Item 4</TabPanel>
    </Box>
    <Footer/>
    </div>
    
  );
}
function TabPanel(props)
{
  const {children,value,index}= props;
  return(
    <div>
      {value===index && <h2>{children}</h2>}
    </div>
  );
}