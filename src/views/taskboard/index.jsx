import React, {  useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Header from "components/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";


const Monthly = () => {

  const [data, setData]=useState([])

  useEffect(()=>{

    const fetchData= async()=>{
      try {

        const url="http://localhost:5000/api/project/task"

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


  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TASK BOARD" subtitle="All Task Lists" />
      <Box sx={{ flexGrow: 1 ,mt:2}}>
      <Grid container spacing={2} columns={12}>
        {data? data.map((item)=>{
          
          return  <Grid item  md={6} sm={12} >
          <Card sx={{ maxHeight:400,background:'#f5f5f2'}} key={item._id}>
          <CardContent>
          <Box>
          Task Name :  {item.taskName}
          </Box>
            <Box >
            Assignee : {item.assignee}
            </Box>
            <Box>
            Due Date: {item.dueDate}
            </Box>
            <Box>
            Priority: {item.priority}

            </Box>
            <Box>
            Project: {item.project}

            </Box>
            <Box>
            Update: { item.projectDescription.substring(3, item.projectDescription.length-4)}

            </Box>
            <Box>
            Status: {item.status}

            </Box>
            
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

export default Monthly;
