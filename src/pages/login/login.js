import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import api from '../../services/api'
import { login } from '../../services/auth'
import Footer from '../../components/footer/footer'
import Loading from '../../components/loading/loading'

import './login.css'

const Login = (props) => {
    const [ form,  setValues] = useState({
        email: '',
        password: ''
    })
    let [ isLoading, setLoading] = useState(false)
    async function handleSignIn(event){
        event.preventDefault()
        setLoading(true)

        try{
            const response = await api.post('/authenticate', (
                {email: form.email, password: form.password}
            ))
            login(response.data)
            setLoading(false)
            
        }catch(e) {
              if(!typeof e.response === undefined){
                console.log(e.response.code)
                console.log(e.response.data)

            }
            console.log(e.message)
        }
        props.history.push("/app")
    }
    function handleChange(event){
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    
    return (
        <>
        <section id="login-page">
            <article>
                <header>
                    <span role="img" aria-label="sheep">🎁</span>
                    <h2>Secret Friend</h2>
                    <p>Lista de Amigo Secreto</p> 
                </header>
                <content>
                    <form onSubmit={handleSignIn}>
                        <input type="text" 
                            name="email" 
                            placeholder="Email"
                            value={form.email} 
                            onChange={handleChange}
                        />
                        <input type="password" 
                            name="password" 
                            placeholder="Senha"
                            value={form.password} 
                            onChange={handleChange}
                        />
                        {isLoading===true ? <Loading /> : <button>Entrar</button>}
                        
                    </form>
                </content>
                <Footer />
            </article>
        </section>
        </>
    )
}
export default withRouter(Login)