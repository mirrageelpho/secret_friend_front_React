import React, {useState, useEffect}  from 'react'
import api from '../../services/api'
import Form from '../../components/form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'

import './list.css'

const List = (props) => {
    const iconRemove = <FontAwesomeIcon icon={faUserMinus} />
    const iconHasFriend = <FontAwesomeIcon icon={faHandPointRight} />

    const [ data, setData ] = useState([])
    const [ shuffler, setShuffler ] = useState([])
    const [ count, setCount ] = useState(0)


    useEffect(() => {
        async function fetchData() {
          const response =  await api.get('/friends')
          setData(response.data)
        }
        fetchData()
    }, [count]);


    async function handleShuffler(){
        const response =  await api.get('/make_secret_friend')
        setShuffler(response.data)
    }


    async function handleRemove(id){
        const removed = await api.delete('/friends/'+id)
        if(removed)
            setCount(count + 1)
    }


    return(
        <>  
            <Form setCount={setCount} count={count} />
            <article id="list-friends-component">
                {shuffler.length === 0 ? 
                    <span>
                        Convidados
                        <button onClick={handleShuffler}>Sortear</button>
                    </span>
                :
                    <span>
                        Sorteio concluído
                        <button onClick={()=>setShuffler([])}>Voltar</button>
                    </span>
                }
                {shuffler.length > 0 &&
                    <p className="log-msg">Uma cópia desta lista foi enviada para seu email{  }</p>
                } 

                <ul>
                    {
                    shuffler.length === 0 ?
                        data.map(res=> (
                        <li key={res._id}>
                            <span id="text">{res.name} <p>{res.email}</p></span>
                            <span id="link" onClick={()=>{handleRemove(res._id)}}> {iconRemove} </span>
                        </li>
                        ))
                    :
                    shuffler.map(res=> (
                        <li key={res.guest._id}>
                            <span id="text2">{res.guest.name} = {iconHasFriend}  {res.friend.name}</span>
                            <span id="text2" onClick={()=>{handleRemove(res._id)}}></span>
                        </li>
                    ))
                    }
                </ul>
            </article>            
        </>
    )
}
export default List