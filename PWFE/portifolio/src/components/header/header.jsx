import React from "react";


export default function Header () {

    return (
        <section className="header">
            <div className="logo">
               <p> YouTube </p>

            </div>

            <div className="search-bar">
                <input type="searc" /> 
                <div className="microfone">
                    <p> icone </p>
                </div>
            </div>

            <div className="user">
                <div className="create">
                    <button className="criar"></button>
                </div>

                <div className="notification">
                    <p> icone </p>
                </div>

                <div className="photo-user">
                    <img src="" alt="" />
                </div>
            </div>

        </section>
    )
}