import React, { useState } from 'react'
import '../../styles/Auth/style.scss'
import axios from 'axios'
import { api } from '../../utils/api_url'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({ autoClose: 2000 })
const Register = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post(`${api}auth/register`, data)
            console.log(response);
            if (response.status === 200) {
                setLoading(false)
                toast.success(response.data.message)
            }
        } catch (error) {
            if (error && error.response.status !== 200) {
                setLoading(false)
                toast.warn(error.response.data.message)
            }
        }
    }

    return (
        <div className="Auth">
            <div className="flex-center flex-column">

                <div className="card shadow border-0">
                    <div className="card-header text-center bg-white">
                        <h4 className="mb-0">Registration</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Username */}
                            <div className="form-group mb-3">
                                {errors.fullname && errors.fullname.message ? (
                                    <small className="text-danger">{errors.fullname && errors.fullname.message}</small>
                                ) : <small>Full name</small>
                                }

                                <input
                                    type="text"
                                    name="fullname"
                                    className="form-control shadow-none"
                                    placeholder="Enter fullname"
                                    ref={register({
                                        required: "Please enter fullname",
                                    })}
                                />
                            </div>

                            {/* E-mail */}
                            <div className="form-group mb-3">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    placeholder="example@gmail.com"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            {/* phone */}
                            <div className="form-group mb-4">
                                {errors.phone && errors.phone.message ? (
                                    <small className="text-danger">{errors.phone && errors.phone.message}</small>
                                ) : <small>Phone number</small>
                                }

                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control shadow-none"
                                    placeholder="01XXXXXXXXX"
                                    ref={register({
                                        required: "Phone number is required",
                                    })}
                                />
                            </div>

                            {/* Password */}
                            <div className="form-group mb-3">
                                {errors.password && errors.password.message ? (
                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                ) : <small>Password</small>
                                }

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control shadow-none"
                                    placeholder="*****"
                                    ref={register({
                                        required: "Please enter password",
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none">
                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                            </button>

                        </form>

                        <div className="text-right mt-3">
                            <p className="mb-1">Go to <Link to="/">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;