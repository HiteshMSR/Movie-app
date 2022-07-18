import { FormatItalicTwoTone, FormatLineSpacing } from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from "yup";
import './App.css';

const formValidationSchema = yup.object({
  email: yup.string().min(5).required().email(),
  password: 
        yup.string()
        .min(8)
        .max(12)
        .required()
        //below  line uses .matches using which we can match the password with regex
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/,"please enter valid email"),
});


export function BasicForm() {
    //const formik= useFormik({    //instead of using this, we can destructure the as below, to avoid typing multiples
    // like formik.touched.email or formik.errors.email. instead using below we can directly use touched. email
    const  {handleChange,handleSubmit,handleBlur,touched,values,errors}=useFormik({
        initialValues:{email:"hitesh", password:"hitesh"},
        validationSchema :formValidationSchema,
        onSubmit:(values)=>{console.log("onSubmit",values)}
    })

  return (
    <>
      <h2>BasicForm</h2>
      <form onSubmit={handleSubmit}>
        <input
            type="email" 
            placeholder="Emailadress"
            name="email" 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          { touched.email && errors.email ? errors.email : ""}
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur} //once its  touched and moved to another input, value of touched changes to true
        />
        {touched.password && errors.password ? errors.password : ""}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
