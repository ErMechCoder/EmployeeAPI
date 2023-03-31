import React, {  useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import FlexBetween from "components/FlexBetween";


const  Breakdown = () => {

  const [data, setData]=useState([])

  useEffect(()=>{

    const fetchData= async()=>{
      try {

        const url="http://localhost:5000/api/project/credential"

        const response= await axios.get(url)
        const data= await response.data;
        
        setData(data)

        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
fetchData()
  },[])

  console.log(data)

  return (
    <Box m="1.5rem 2.5rem">
       <Header title="PROJECT CREDENTIAL LIST" subtitle="  credential list of the project" />
       <Box sx={{ flexGrow: 1 ,mt:2}}>
      <Grid container spacing={2} columns={12}>
        {data? data.map((item)=>{
          
          return  <Grid item  md={6} sm={12} >
          <Card sx={{ maxHeight:400,background:'#f5f5f2'}} key={item._id}>
          <CardContent>
          <FlexBetween>
          <Typography component={"div"} color="#000">
          Project :  {item.project}

            </Typography>
            <Typography component={"div"} color="#000" >
            Assignee : {item.addEngineer}
            </Typography>
          </FlexBetween>
        
          <Typography component={"div"} color="#000" mt={1}>
           { item.projectDescription.substring(3, item.projectDescription.length-4)}

            </Typography>
            
          </CardContent>
          
        </Card>
        </Grid>

        })  : (
          <>Loading...</>
        )}
        </Grid>
      </Box>
    </Box>
  );
};



export default Breakdown;
