import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'Marvin',
        email: 'marvinrivas777@google.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setformState({
            ...formState, 
            [name]: value
        })
    }

    useEffect(() => {
        //console.log('El useEffect se llamo')
    },[])

    useEffect(() => {
        //console.log('formState Changed!!!')
    },[formState])

    useEffect(() => {
        //console.log('email 3 Changed!!!')
    },[email])


  return (
   <>
        <h1>Formulario Simple</h1>

        <hr />
        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        />
        <input type="email"
        className="form-control mt-2"
        placeholder="marvinrivas@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
        />

        {
            (username === 'Marvin7') && <Message/>
        }

   </>
  )
}

