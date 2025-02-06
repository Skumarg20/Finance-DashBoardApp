import React from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,useTheme } from '@mui/material';
import PixIcon from '@mui/icons-material/Pix'; // Adjust the import path as necessary
import FlexBetween from '../../components/flexbetween';

type Props = {}

export default function Navbar({}: Props) {
    const {palette} = useTheme();
    const [selected, setSelected] = React.useState("");
  return (
    <FlexBetween
     p="0.5rem 0rem"  m="0rem 1.5rem 0.25rem 1.5rem" color={palette.grey[300]}>
        {/* Left side */}
        <FlexBetween gap="0.75rem" >
            <PixIcon sx={{fontSize:"50px"}}/>
            <Typography variant="h2" fontSize="25px">Fianseer</Typography>

        </FlexBetween>
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover":{color:palette.grey[400]}}}>
             <Link to="/" onClick={()=>setSelected("dashboard")} style={{color:selected==="dashboard"?"inherit":palette.grey[700],textDecoration:"inherit"}} >dashboard</Link>
            </Box>
            <Box>
            <Link to="/prediction" onClick={()=>setSelected("prediction")} style={{color:selected==="prediction"?"inherit":palette.grey[700],textDecoration:"inherit"}} >predictions</Link>
            </Box>
            </FlexBetween>

    </FlexBetween>
  )
}