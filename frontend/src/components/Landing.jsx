import React, {useState} from "react";
import { Link } from "react-router-dom";
import { loginUser, userSelector, clearErrorMsg, clearState, userSelector } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {

	const dispatch = useDispatch()
	const [formData, setFormData] = useState({email:'', password:''})
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
		dispatch(loginUser(formData))
    }

  	return (
		<div className="app-container d-flex">
			<div className="left side">
				<h2>Sign in</h2>
				<div className="socials d-flex">
					<div>
						<i className="fa fa-twitter"></i>
					</div>
					<div>
						<i className="fa fa-envelope"></i>
					</div>
					<div>
						<i className="fa fa-facebook"></i>
					</div>
				</div>
				<form action="" onSubmit={handleSubmit}>
					<div className="email">
						<i className="fa fa-envelope"></i>
						<input
						type="text"
						name="email"
						required
						id="email-input"
						placeholder="Email"
						onChange={handleChange}
						/>
					</div>
					<div className="pass">
						<i className="fa fa-unlock"></i>
						<input
							type="password"
							name="password"
							required
							id="pass-input"
							placeholder="Password"
							onChange={handleChange}
						/>
					</div>
					<h6>Forgot Password ? </h6>
					<button type="submit">Sign in</button>
				</form>
				<div className="register">
					<h6>
						Dont have an account? Register{" "}
						<Link to="register">
						Here
						</Link>
					</h6>
				</div>
			</div>
			<div className="right side">
				<h1>Hello, friend</h1>
				<p>Enter your personal information to continue</p>
				<Link to="register">
				<button>Sign up</button>
				</Link>
			</div>
		</div>
  	);
};

export default Landing;
