import { useCallback } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Formik,useField } from "formik";
import ReactQuill from "react-quill";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
// import axios from "axios";


const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["clean"],
  ],
};

const Geography = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // const handleFormSubmit = useCallback(async (values) => {
    
  //   console.log("submit", values);


  //   const response = await axios("http://localhost:5000/api/project/create", {
  //     method: "POST",
  //     body:values,
  //   });

  //   console.log("resd",response);
  // }, []);

  const handleFormSubmit =(values) => {
   
    console.log(values)

     // Send a POST r`enter code here`equest
     axios.post('http://localhost:5000/api/project/create', values).then(function (response) {

     console.log("respomse",response);
  }).catch(function (error) {
          console.log(error.response);
      });

  };

  return (
    <Box m="20px">
      <Header title="CREATE PROJECT" subtitle="Create Project by Admin" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        encType="multipart/form-data"
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
                label="Project Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.projectName}
                name="projectName"
                error={!!touched.projectName && !!errors.projectName}
                helperText={touched.projectName && errors.projectName}
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
                label="Start Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startDate}
                name="startDate"
                error={!!touched.startDate && !!errors.startDate}
                helperText={touched.startDate && errors.startDate}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="End Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endDate}
                name="endDate"
                error={!!touched.endDate && !!errors.endDate}
                helperText={touched.endDate && errors.endDate}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Priority"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.priority}
                name="priority"
                error={!!touched.priority && !!errors.priority}
                helperText={touched.priority && errors.priority}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Add Engineer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.addEngineer}
                name="addEngineer"
                error={!!touched.addEngineer && !!errors.addEngineer}
                helperText={touched.addEngineer && errors.addEngineer}
                sx={{ gridColumn: "span 2" }}
              />

              <Field name="projectDescription">
                {({ field }) => <ReactQuill 
                 modules={modules} 
                value={field.value} 
                onChange={field.onChange(field.name)}
                placeholder="Content goes here..." 
                error={!!touched.projectDescription && !!errors.projectDescription}
                />}
              </Field>

            </Box>
            <Box>
          <div>
            <FileField name="file" multiple />
          </div>
          <code>
            <div>{JSON.stringify(values)}</div>
          </code>
            </Box>
            <Box display="flex" justifyContent="end" mt="5px" mb="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  projectName: yup.string().required("required"),
  clientId: yup.string().required("required"),
  startDate: yup.string().required("required"),
  endDate: yup.string().required("required"),
  priority: yup.string().required("required"),
  addEngineer: yup.string().required("required"),
  projectDescription: yup.string().required("required"),
  
});
const initialValues = {
  projectName: "",
  clientId: "",
  startDate: "",
  endDate: "",
  priority: "",
  addEngineer: "",
  projectDescription: "",
  file: null
  
};



export default Geography;




function FileField({ name, ...props }) {
  const [, , helpers] = useField(name);

  const handleChange = useCallback(
    (event) => {
      const files = event.target.files;

      if (files.length === 1) {
        helpers.setValue(files[0]);
        return;
      }
      const value = [];
      for (let file of files) {
        value.push(file);
      }
      helpers.setValue(value);
    },
    [helpers]
  );

  return <input type="file" {...props} onChange={handleChange} />;
}
