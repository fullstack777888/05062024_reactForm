import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [usernameInput, setUsernameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const submitHanlder = (event) => {
        event.preventDefault()

        // you can validation

        const data = {
            usernameInput,
            emailInput,
            passwordInput
        }

        fetch('http://localhost:3000/user',{
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        // send input values
    }

    const usernameInputHandler = (event) => {
        setUsernameInput(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setPasswordInput(event.target.value)
    }

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value)
    }

    const resetHandler = () => {
        setUsernameInput('')
        setEmailInput('')
        setPasswordInput('')
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={submitHanlder} >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={usernameInput}
                        onChange={usernameInputHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={passwordInput}
                        onChange={passwordInputHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={emailInput}
                        onChange={emailInputHandler}
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <button onClick={resetHandler}>reset</button>
        </div>
    )
}

export default App
