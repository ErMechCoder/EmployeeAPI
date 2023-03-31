import { useCallback } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Field, Formik} from "formik";
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

const Daily = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit =(values) => {
 
    // Send a POST r`enter code here`equest
    axios.post('http://localhost:5000/api/project/task', values).then(function (response) {
    alert("Task Created Successfully")
    console.log(response);
 }).catch(function (error) {
         console.log(error.response);
     });

 };



  return (
    <Box m="20px" mb={2}>
      <Header title="NEW TASK" subtitle=" Get Create New Task " />
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
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Task name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.taskName}
                name="taskName"
                error={!!touched.taskName && !!errors.taskName}
                helperText={touched.taskName && errors.taskName}
                sx={{ gridColumn: "span 2" }}
              />
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
                label="Assignee"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.assignee}
                name="assignee"
                error={!!touched.assignee && !!errors.assignee}
                helperText={touched.assignee && errors.assignee}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Due date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dueDate}
                name="dueDate"
                error={!!touched.dueDate && !!errors.dueDate}
                helperText={touched.dueDate && errors.dueDate}
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
                label="Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
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

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  taskName: yup.string().required("required"),
  project: yup.string().required("required"),
  assignee: yup.string().required("required"),
  dueDate: yup.string().required("required"),
  priority: yup.string().required("required"),
  status: yup.string().required("required"),
  projectDescription: yup.string().required("required"),
  
});
const initialValues = {
  taskName: "",
  project: "",
  assignee: "",
  dueDate: "",
  priority: "",
  status: "",
  projectDescription: "",
};



export default Daily;






