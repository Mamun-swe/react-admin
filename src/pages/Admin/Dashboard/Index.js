import React, { useEffect, useState } from 'react'
import '../../../styles/Dashboard/style.scss'
import axios from 'axios'
import { api } from '../../../utils/api_url'

const Index = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        // Fetch total users
        const fetchTotalUsers = async () => {
            try {
                const response = await axios.get(`${api}admin/user/total`)
                setUsers(response.data.data)
            } catch (error) {
                if (error) {
                    console.log(error)
                }
            }
        }

        fetchTotalUsers()
    }, [])


    return (
        <div className="dashboard py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 p-lg-0">
                        <div className="card border-0">
                            <div className="card-body shadow">
                                <div className="flex-center flex-column">
                                    <h4>{users ? users : null}</h4>
                                    <h5>Users</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;