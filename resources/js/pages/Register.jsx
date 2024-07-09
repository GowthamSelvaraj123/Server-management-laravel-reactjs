import React, { useState, useMemo, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select  from 'react-select';
import countryList from 'react-select-country-list';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch CSRF token from meta tag
        const token = document.head.querySelector('meta[name="csrf-token"]').content;
        setCsrfToken(token);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken // Pass CSRF token here
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Form submitted successfully:', data);
            // Optionally, reset the form fields
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
            />
            <button type="submit">Submit</button>
        </form>
    );

}


// const Register = () => {
//   const [formdata, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
// });
// const [value, setValue] = useState('');
// const options = useMemo(() => countryList().getData(), []);
// const [selectedOption, setSelectedOption] = useState(null);
// const [validationErrors, setValidationErrors] = useState({});
//     const changeHandler = value => {
//         setSelectedOption(selectedOption);
//       }
//       const handleChange = (e) => {
//         setFormData({...formdata, [e.target.name]: e.target.value })
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
//           // const response = await axios.post("http://127.0.0.1:8000/api/register", formdata);
//           const response = await fetch("http://127.0.0.1:8000/api/register", {
//               method: "POST",
//               headers: {
//                   "Content-Type": "application/json",
//               },
//               body: JSON.stringify(formdata),
//           });

//           const responseData = await response.json();
//           if (response.ok) {
//               setValidationErrors({});
//               Swal.fire({
//                   icon: "success",
//                   title: "Success",
//                   text: responseData.message,
//               }).then(() => {
//                   window.location.href = "/login";
//               });
//           } else {
//               setValidationErrors(responseData);
//               if (responseData) {
//                   setValidationErrors(responseData);
//               } else {
//                   Swal.fire({
//                   icon: "error",
//                   title: "Error",
//                   text: responseData || "Registration failed.",
//                   });
//               }
//           }
//       } catch (error) {
//           Swal.fire({
//               icon: "error",
//               title: "Error",
//               text: "An error occurred during registration.",
//           });
//       } 
//     };

//     return (
//       <section className="vh-100 bg-image" >
//       <div className="mask d-flex align-items-center h-100 gradient-custom-3">
//           <div className="container h-100">
//               <div className="row d-flex justify-content-center align-items-center h-100">
//                   <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                       <div className="card" style={{borderRadius: '15px'}}>
//                           <div className="card-body p-5">
//                               <h2 className="text-uppercase text-center mb-5">Create an account</h2>
//                               <form  method="POST" action="{{ route('register') }}" onSubmit={handleSubmit}>
//                                   <div className="form-outline mb-4">
//                                       {/* <label htmlFor="name"  className="form-label">Name:</label> */}
//                                       <input type="text" name="name" placeholder="Enter Full Name" className="form-control form-control-lg" onChange={handleChange} />
//                                       {validationErrors.name && <span className="text-danger">{validationErrors.name[0]}</span>}
//                                   </div>
//                                   <div className="form-outline mb-4">
//                                       {/* <label htmlFor="email" className="form-label">Email:</label> */}
//                                       <input type="email" name="email" placeholder="Enter Email" className="form-control form-control-lg" onChange={handleChange} />
//                                       {validationErrors.email && <span className="text-danger">{validationErrors.email[0]}</span>}
//                                   </div>
//                                   <div className="form-outline mb-4">
//                                       {/* <label htmlFor="password" className="form-label">Password:</label> */}
//                                       <input type="Password" name="password" placeholder="Enter Password" className="form-control form-control-lg" onChange={handleChange}/>
//                                       {validationErrors.password && <span className="text-danger">{validationErrors.password[0]}</span>}
//                                   </div>
//                                   <div class="d-flex justify-content-center">
//                                   <button type="submit"
//                                       class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
//                                   </div>
                                  
//                               </form>
//                               <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
//                                   className="fw-bold text-body"><u>Login here</u></a></p>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>

//       </div>

//   </section>
//         // <Container>
//         //     <Form>
//         //     <Row>
//         // <Col lg={6}>
//         // <Form.Group className="mb-3" controlId="formBasicEmail">
//         //   <Form.Label>Email address</Form.Label>
//         //   <Form.Control type="email" placeholder="Email Address*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="formBasicPassword">
//         //   <Form.Label>Password</Form.Label>
//         //   <Form.Control type="password" placeholder="Password*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="formRepeatPassword">
//         //   <Form.Label>Repeat Password</Form.Label>
//         //   <Form.Control type="password" placeholder="Repeat Password*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="FirstName">
//         //   <Form.Label>First Name</Form.Label>
//         //   <Form.Control type="text" placeholder="First Name*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="LastName">
//         //   <Form.Label>Last Name</Form.Label>
//         //   <Form.Control type="test" placeholder="Last Name*" />
//         // </Form.Group>
//         // </Col>
//         // <Col lg={6}>
//         // <Form.Group className="mb-3" controlId="Address 1">
//         //   <Form.Label>Address 1</Form.Label>
//         //   <Form.Control type="test" placeholder="Address 1*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="Address 2">
//         //   <Form.Label>Address 2</Form.Label>
//         //   <Form.Control type="test" placeholder="Address 2*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="City">
//         //   <Form.Label>State</Form.Label>
//         //   <Form.Control type="test" placeholder="State*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="PostalCode">
//         //   <Form.Label>Postal Code</Form.Label>
//         //   <Form.Control type="test" placeholder="Postal Code*" />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="Country">
//         //   <Form.Label>Country</Form.Label>
//         //   <Select className="form-control" options={options} value={selectedOption} onChange={changeHandler} />
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="Phone">
//         //   <Form.Label>Phone</Form.Label>
//         //   <PhoneInput className="mb-3 form-control" placeholder="Enter phone number" value={value} onChange={setValue}/>
//         // </Form.Group>
//         // <Form.Group className="mb-3" controlId="AccountType">
//         //   <Form.Label>Last Name</Form.Label>
//         //   <Form.Select class="form-control" aria-label="Default select example">
//         //         <option>Account Type</option>
//         //         <option value="1">Personal</option>
//         //         <option value="2">Organization</option>
//         // </Form.Select>
//         // </Form.Group>
//         // </Col>
//         // </Row>
//         // </Form>
//         // <Button variant="primary" type="submit">
//         //   Submit
//         // </Button>
//         // </Container>
//     );
// };

export default Register;
