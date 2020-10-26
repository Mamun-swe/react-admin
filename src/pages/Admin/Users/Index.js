import React, { useEffect, useState } from 'react'
import '../../../styles/Users/style.scss'
import axios from 'axios'
import { api } from '../../../utils/api_url'
import { Link } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md'

import LoadingComponent from '../../../components/Loading/Index'


const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Fetch Random videos
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${api}admin/user`)
                setUsers(response.data)
                setLoading(false)
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="index">
            {isLoading ? <LoadingComponent message={'Loading...'} /> :
                <div className="container-fluid p-0 py-2 py-lg-0">
                    <div className="col-12 pl-lg-0 mb-3">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body p-3">
                                <div className="d-flex">
                                    <div><h5>all users</h5></div>
                                    <div className="ml-auto">
                                        <Link to="/admin/user/create"
                                            type="button"
                                            className="btn shadow-none"
                                        >
                                            <Icon icon={ic_add} size={22} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pl-lg-0">
                        <table className="table table-responsive-sm table-sm">
                            <thead>
                                <tr>
                                    <td className="text-center"><p>SL</p></td>
                                    <td><p>Full name</p></td>
                                    <td><p>E-mail</p></td>
                                    <td><p>Phone</p></td>
                                    <td><p>Role</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.map((user, i) =>
                                    <tr key={i}>
                                        <td className="text-center"><p>{i + 1}</p></td>
                                        <td><p>{user.fullname}</p></td>
                                        <td><p>{user.email}</p></td>
                                        <td><p>{user.phone}</p></td>
                                        <td className="text-capitalize"><p>{user.role}</p></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default Index;