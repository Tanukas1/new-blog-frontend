import { Card, CardContent, Container } from "@material-ui/core";
import { Formik } from 'formik';
import  Swal  from  'sweetalert2' ;
import app_config from '../config';
import "../stylesheets/signup.css";
import image from '../images/signup.png';

const Signup = () => {

    const url = app_config.api_url;

    const signupform = {
        name: '',
        email: '',
        mobile: '',
        address: '',
        password: ''
    }

    const formSubmit = (values) => {
        console.log(values);


        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        // request on server and parse the json response
        fetch(url + 'user/add', reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message == 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registered!',
                        text: 'Now Login to Continue'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: 'Something went wrong'
                    })
                }

            })
    }

    return (
        
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-body content">
                <img src={image} className="img-fluid" />
                    <div className="row">
                    
                        <div className="col-md-6" ></div>
                        <div className="col-md-6">
                                           
                            <Formik
                                initialValues={signupform}
                                onSubmit={formSubmit}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleSubmit
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <h2>SIGNUP FORM</h2>

                                        <label className="mt-3">Name</label>
                                        <input className="form-control" onChange={handleChange} value={values.name} name="name" />

                                        <label className="mt-3">Email</label>
                                        <input className="form-control" onChange={handleChange} value={values.email} name="email" />

                                        <label className="mt-3">Mobile No.</label>
                                        <input className="form-control" type="number" onChange={handleChange} value={values.mobile} name="mobile" />

                                        <label className="mt-3">Address</label>
                                        <textarea className="form-control" rows="5" onChange={handleChange} value={values.address} name="address" ></textarea>

                                        <label className="mt-3">Password</label>
                                        <input className="form-control" type="password" onChange={handleChange} value={values.password} name="password" />

                                        <button type="submit" className="btn btn-primary mt-5">Submit</button>
                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;