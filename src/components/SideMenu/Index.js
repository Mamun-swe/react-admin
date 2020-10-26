import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../../styles/components/SideMenu/style.scss'
import { Icon } from 'react-icons-kit'
import {
    ic_apps,
    ic_people,
    ic_add,
    ic_lock
} from 'react-icons-kit/md'
import jwt_decode from "jwt-decode"

import ProfileImg from '../../assets/admin.jpg'

const Index = () => {
    const history = useHistory()
    const [name, setName] = useState()

    useEffect(() => {
        var token = localStorage.getItem('token')
        var decoded = jwt_decode(token)
        setName(decoded.fullname)
    })

    const doLogout = () => {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="side-menu">

            {/* Header */}
            <div className="header">
                <div className="d-flex">
                    <div className="img-box rounded-circle">
                        <img src={ProfileImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="content">
                        <p>{name}</p>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="body">
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/admin/">
                    <Icon icon={ic_apps} size={20} />
                    <span>dashboard</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/admin/users">
                    <Icon icon={ic_people} size={20} />
                    <span>all users</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/admin/user/create">
                    <Icon icon={ic_add} size={20} />
                    <span>Add User</span>
                </NavLink>

                <button
                    type="button"
                    className="btn btn-block shadow-none"
                    onClick={doLogout}
                >
                    <Icon icon={ic_lock} size={18} />
                    <span>logout</span>
                </button>
            </div>

        </div>
    );
};

export default Index;