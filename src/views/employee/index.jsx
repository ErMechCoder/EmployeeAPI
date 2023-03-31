import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";


const columns = [
  { field: '_id', headerName: 'ID' ,width:300},
  { field: 'email', headerName: 'Email', width:300 },
  { field: 'firstName', headerName: 'FirstName', width:200},
  { field: 'lastName', headerName: 'LastName' , width:200},
  { field: 'gender', headerName: 'Gender', width:100 },
  { field: 'address', headerName: 'Address', width:300},

  { field: 'department', headerName: 'Department',width:200 },
  { field: 'designation', headerName: 'Designation',width:200},
 
  
]
const Admin = () => {
  const theme = useTheme();
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/engineer/profile")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)
  

 

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Employee" subtitle="Managing Employee and list of Employee" />
      <Box
        mt="40px"
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[1000],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
       <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        
        columns={columns}
        rows={tableData}
        getRowId={(tableData) => tableData._id}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
      />
    </div>
      </Box>
    </Box>
  );
};

export default Admin;
