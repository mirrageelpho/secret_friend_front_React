import React, { useState } from 'react'
import api from '../../services/api'
import './form.css'

const Form = (props) => {
    const [ form, setValues ] = useState({
        name:'',
        email:''
    })
    async function handleSetFriends(event){
        event.preventDefault()
        try{
            const response = await api.post('/friends', (
                {name: form.name, email: form.email}
            ))
            if(response){
                setValues({name: '', email: ''})
                props.setCount(props.count+1)
            }
                
        }catch(e) {
              if(!typeof e.response === undefined){
                console.log(e.response.code)
                console.log(e.response.data)
            }
            console.log(e.message)
        }
    }

    function handleChange(event){
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <article id="form-add-user-component">
                <header>
                <h2>Incluir um amigo</h2>
                </header>
                <form onSubmit={handleSetFriends}>
                    <input type="text"
                     name="name"
                     placeholder="Nome"
                     value={form.name}                    
                     onChange={handleChange}
                     />

                    <input type="text"
                     name="email"
                     placeholder="Email"
                     value={form.email}                    
                     onChange={handleChange}
                     />

                    <button>Adcionar</button>
                </form>
            </article>
        </>
    )
}
export default Form