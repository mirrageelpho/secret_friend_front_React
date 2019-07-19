import React from 'react'
import { getToken, logout } from '../../services/auth'
import { withRouter } from "react-router-dom";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faUser} />

const Header = (props) => {
    
    const playload = getToken()
    
    function handleLogout(){
        logout()
        props.history.push("/")
    }

    return (
        <>
            <article id="app-header-component">
                <header>
                    <div id="logo">                
                        <span role="img" aria-label="sheep">🎁</span>
                        <div id="text_logo">
                            <h2>Secret Friend</h2>
                            <p>Lista de Amigo Secreto</p>
                        </div>
                    </div>
                    <div>
                    <button onClick={handleLogout} id="use-icon">
                        {icon} {playload.name} 
                        <p>sair</p>
                    </button>
                    </div>

                </header>
            </article>
        </>
    )
}

export default withRouter(Header)