import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import './form.css';
 
 const SignupForm = () => {
   return (
     <Formik
       initialValues={{  fullName: '', email: '', password: '' }}
       validationSchema={Yup.object({
         fullName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         password: Yup.string('Enter your password')
         .min(8, 'password should be of minimum 8 characters')
         .required('required')
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
         <section>
             <main className="container">
                 <article className="c2">
                    <Form className="signup__form">
                         <h2>Signup Form</h2>
                        <Field name="fullName" type="text" placeholder="FullName*" className="username"/>
                        <ErrorMessage name="fullName" />
 
                        <Field name="email" type="email" placeholder="Email*" className="username" />
                        <ErrorMessage name="email" />

                        <Field name="password" type="password" placeholder="password*" className="username"/>
                        <ErrorMessage name="password" />
 
                        <button type="submit" className="btn">Submit</button>
                    </Form>
                 </article>
             </main>
         </section>
       
     </Formik>
   );

 };

 
 export default SignupForm;

//Question 2
 const alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export const handlePassword = (text)=> {
    // split text into an array of characters
    const characters = text.split("");

    let response = characters.map((ch, index)=>{
        // check that character is alphabet
        const charCode = ch.charCodeAt(0)
        if((charCode>= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)){ // character is alphabet
            const char = ch.toLowerCase();

            // check for character positio(index)
            const index = alphabet.indexOf(char);
            let resultingIndex = 25 - index;
            return alphabet[resultingIndex]
        }
        return ch;
    })
    return response.join("")
}

