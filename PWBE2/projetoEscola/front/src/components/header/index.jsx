import React from "react";
import './styles.css'
import {ImExit} from "react-icons/im"

export default function Header() {

    const logout = ()=> {
        localStorage. removeItem('token')
        window.location.href = '/login'
    }

    return (
        <div className="container_header">
            <section className="body_header">
                <div className="title">
                    <h1>Header</h1>
                </div>
                <div className="nav">
                    <span>Create</span>
                    <span>Read</span>
                    <span>Update</span>
                    <span>Delete</span>
                </div>
                <div className="exit">
                    <ImExit onClick={logout}/>
                </div>
            </section>
        </div>
    )
}