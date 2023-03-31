import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "views/layout";
import Dashboard from "views/dashboard";
import Customers from "views/clientprofile";
import Transactions from "views/clientlist";
import Geography from "views/create";
import Overview from "views/list";
import Daily from "views/task";
import Monthly from "views/taskboard";
import Breakdown from "views/credentiallist";
import Admin from "views/employee";
import Performance from "views/performance";
import Form from "views/profile";
import Calendar from "views/attendence";
import Screenshot from "views/emloyeescreen";
import Credential from "views/credential";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clientprofile" element={<Customers />} />
              <Route path="/clientlist" element={<Transactions />} />
              <Route path="/create" element={<Geography />} />
              <Route path="/list" element={<Overview />} />
              <Route path="/task" element={<Daily />} />
              <Route path="/taskboard" element={<Monthly />} />
              <Route path="/credentiallist" element={<Breakdown />} />
              <Route path="/credentials" element={<Credential />} />
             
              <Route path="/employee" element={<Admin />} />
              <Route path="/profile" element={<Form/>} />
              <Route path="/screenshot" element={<Screenshot/>} />     
              <Route path="/attendence" element={<Calendar/>} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
