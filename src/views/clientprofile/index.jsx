import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";

const Customers = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit =(values) => {
    
    // const {firstName,lastName,birthDate,gender,address,states,country,pinCode,email,contact,department,designation=`${firstName} ${lastName } ${birthDate}${gender}${address} ${states} ${country}${pinCode},${email}${contact} ${department} ${designation}` }=values
    // console.log(firstName,lastName,birthDate,gender,address,states,country,pinCode,email,contact,department,designation);
 
     // Send a POST r`enter code here`equest
     axios.post('http://localhost:5000/api/client/profile', values).then(function (response) {
     alert("Create a New Client Profile Successfully")
    //  console.log(response);
  }).catch(function (error) {
          console.log(error.response);
      });

  };


 

  return (
    <Box m="20px">
      <Header title="CREATE CLIENT " subtitle="Create a New Client Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.componyName}
                name="componyName"
                error={!!touched.componyName && !!errors.componyName}
                helperText={touched.componyName && errors.componyName}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gender"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.gender}
                name="gender"
                error={!!touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="State"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.states}
                name="states"
                error={!!touched.states && !!errors.states}
                helperText={touched.states && errors.states}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pin Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pinCode}
                name="pinCode"
                error={!!touched.pinCode && !!errors.pinCode}
                helperText={touched.pinCode && errors.pinCode}
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Client ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.clientId}
                name="clientId"
                error={!!touched.clientId && !!errors.clientId}
                helperText={touched.clientId && errors.clientId}
                sx={{ gridColumn: "span 2" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Designation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.designation}
                name="designation"
                error={!!touched.designation && !!errors.designation}
                helperText={touched.designation && errors.designation}
                sx={{ gridColumn: "span 2" }}
              />
              
            </Box>
            <Box display="flex" justifyContent="end" mt="5px" mb="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Client
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  componyName:yup.string().required("required"),
  gender:yup.string().required("required"),
  address:yup.string().required("required"),
  states: yup.string().required("required"),
  country: yup.string().required("required"),
  pinCode:yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    clientId:yup.string().required("required"),
    designation:yup.string().required("required")
});
const initialValues = {
  firstName:"",
  lastName:"",
  componyName:"",
  gender:"",
  address:"",
  states:"",
  country:"",
  pinCode:"",
  email:"",
  contact:"",
  clientId:"",
  designation:""
};

export default Customers;
