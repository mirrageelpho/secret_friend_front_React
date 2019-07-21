import React, {useState, useEffect, useReducer}  from 'react'
import api from '../../services/api'
import Form from '../../components/form/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/loading/loading'

import reducer from '../../services/reducers'

import './list.css'

const List = (props) => {
    
    const iconRemove = <FontAwesomeIcon icon={faUserMinus} />
    const iconHasFriend = <FontAwesomeIcon icon={faHandPointRight} />

    let [ isLoading, setLoading] = useState(false)
    const [ shuffler, setShuffler ] = useState([])
      
    const initialState = []

    const [ state, dispatch ] = useReducer(reducer, initialState)

    useEffect(() => {
        setLoading(true)
        async function fetchData() {
          const response =  await api.get('/friends')
          dispatch({type: 'loadData', data: response.data})
          setLoading(false)
        }
        fetchData()
    }, [state.length]);

    async function handleShuffler(){
        setLoading(true)
        const response =  await api.get('/make_secret_friend')
        setShuffler(response.data)
        setLoading(false)

    }

    async function handleRemove(id, index, elem){
        const removed = await api.delete('/friends/'+id)
        if(removed)
            dispatch({type: 'removeData', index: index})
    }


    return(
        <>  
            <Form dispatch={dispatch} />
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
                    {isLoading===true && <Loading />}
                    {
                    shuffler.length === 0 ?
                        state.map((res, index)=> (
                        <li key={res._id}>
                            <span id="text">{res.name} <p>{res.email}</p></span>
                            <span id="link" onClick={()=>{handleRemove(res._id, index)}}> {iconRemove} </span>
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