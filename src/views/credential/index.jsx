
import { Box, Button, TextField } from "@mui/material";
import { Field, Formik} from "formik";
import ReactQuill from "react-quill";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";



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

const Credential = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit =(values) => {
 
     // Send a POST r`enter code here`equest
     axios.post('http://localhost:5000/api/project/credential', values).then(function (response) {
     alert("Credential Created Successfully")
     console.log(response);
  }).catch(function (error) {
          console.log(error.response);
      });

  };




  return (
    <Box m="20px" mb={2}>
      <Header title="PROJECT CREDENTIAL" subtitle=" create new credential for project" />
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
                label="Project"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.project}
                name="project"
                error={!!touched.project && !!errors.project}
                helperText={touched.project && errors.project}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="addEngineer"
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


const checkoutSchema = yup.object().shape({
  project: yup.string().required("required"),
  addEngineer: yup.string().required("required"),
  projectDescription: yup.string().required("required"),
  
});
const initialValues = {
  project: "",
  addEngineer: "",
  projectDescription: "",
};




export default Credential;
