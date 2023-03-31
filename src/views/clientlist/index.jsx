import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";



const columns = [
  
  {
    field: "clientId",
    headerName: "Client ID",
    flex: 1,
    width:300
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    width:300
  },
  {
    field: "firstName",
    headerName: "First Name",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    sortable: false,

  },
  {
    field: "componyName",
    headerName: "Compony Name",
    flex: 1,
  },
  {
    field: "gender",
    headerName: "Gender",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
 
  {
    field: "contact",
    headerName: "Contact",
    flex: 1,
  },
  {
    field: "designation",
    headerName: "Designation",
    flex: 1,
  },

  
];


const Transactions = () => {
  const theme = useTheme();

  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchdata=()=>{
      fetch("http://localhost:5000/api/client/profile")
      .then((data) => data.json())
      .then((data) => setData(data))
    }

    fetchdata();
  },[])

  console.log(data)

  // values to be sent to the backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);





  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OUR CLIENT" subtitle="Our Client list" />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
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
        <DataGrid
          loading={data}
          getRowId={(row) => row._id}
          rows={(data && data) || []}
          columns={columns}
          rowCount={(data && data) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: DataGridCustomToolbar }}
         
        />
    
      </Box>
    </Box>
  );
};

export default Transactions;
