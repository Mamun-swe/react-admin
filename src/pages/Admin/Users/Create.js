import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../../styles/Users/style.scss'
import axios from 'axios'
import { api } from '../../../utils/api_url'

import LoadingComponent from '../../../components/Loading/Index'

const Create = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Header
    const header = {
        headers:
        {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const response = await axios.post(`${api}admin/user`, data, header)
            if (response.status === 200) {
                toast.success(response.data.message)
                setLoading(false)
            }
        } catch (error) {
            if (error && error.response.status !== 200) {
                setLoading(false)
                toast.warn(error.response.data.message)
            }
        }
    }

    return (
        <div className="create">

            {isLoading ? <LoadingComponent message={'Adding...'} /> : null}

            <div className="container-fluid p-0 py-2 py-lg-0">
                <div className="col-12 pl-lg-0 mb-3">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-white p-3">
                            <h5>Add user</h5>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">

                                    {/* Fullname */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
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
                                                    required: "Fullname is required",
                                                })}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
                                            {errors.email && errors.email.message ? (
                                                <small className="text-danger">{errors.email && errors.email.message}</small>
                                            ) : <small>E-mail</small>
                                            }

                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control shadow-none"
                                                placeholder="Enter e-mail"
                                                ref={register({
                                                    required: "E-mail is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>

                                    {/* phone */}
                                    <div className="col-12 col-lg-6">
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
                                    </div>

                                    {/* Role */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
                                            {errors.role && errors.role.message ? (
                                                <small className="text-danger">{errors.role && errors.role.message}</small>
                                            ) : <small>Role</small>
                                            }

                                            <select
                                                name="role"
                                                className="form-control shadow-none"
                                                ref={register({
                                                    required: "Role is required",
                                                })}
                                            >
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="col-12">
                                        <div className="form-group mb-4">
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
                                    </div>

                                    <div className="col-12 text-right">
                                        <button type="submit" className="btn shadow-none px-4">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;