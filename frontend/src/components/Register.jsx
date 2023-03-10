import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser, userSelector, clearErrorMsg, clearState } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isRegistered , errorMessage } = useSelector(userSelector)

    useEffect(()=> {
        if (isRegistered === true ){
            dispatch(clearState)
            navigate('/')
        }
    }, [isRegistered])

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(registerUser(formData))
    }

    const errorDiv = errorMessage !== '' ?
		<div className="error-message"><h5>{errorMessage}</h5></div> : null

    return (
        <div className="app-container d-flex">
            <div className="left side">
                <h2>Sign up</h2>
                <div className="socials d-flex">
                    <div><i className="fa fa-twitter"></i></div>
                    <div><i className="fa fa-envelope"></i></div>
                    <div><i className="fa fa-facebook"></i></div>
                </div>
                <form action=""onSubmit={handleSubmit} >
                    {errorDiv}
                    <div className="username">
                        <i className="fa fa-user"></i>
                        <input type="text" name="username" required placeholder="Username" onChange={handleChange} />
                    </div>
                    <div className="email">
                        <i className="fa fa-envelope"></i>
                        <input type="text" name="email"  required placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="pass">
                        <i className="fa fa-unlock"></i>
                        <input type="password" name="password"  required placeholder="Password" onChange={handleChange} />
                    </div>
                    <button type='submit' >Sign up</button>
                </form>
                <div className="register">
                    <h6>Already have an account? Sign in <Link to='/' ><em>Here</em></Link></h6>
                </div>
            </div>
            <div className="right side">
                <h1>Hello, friend</h1>
                <p>Enter your personal information to continue</p>
                <Link to='/'><button>Sign in</button></Link>
            </div>
        </div>
    )
}

export default Register