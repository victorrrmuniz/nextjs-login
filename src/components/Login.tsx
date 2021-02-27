
import styles from '../styles/components/Login.module.css';
import { Button, Form, FormControl } from 'react-bootstrap'
import { useState } from 'react';

export function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [status, setStatus] = useState(0)

	async function submit() {
		console.log(email, password);
		const response = await fetch('http://localhost:3001/login', {
			headers: {"Content-type": "application/json; charset=UTF-8"},
			method: 'post',
			body: JSON.stringify({
				email,
				password
			})
		})

		setStatus(Number(response.status));
		setEmail('')
		setPassword('')
	}

	return(
		<div className={styles.loginContainer}>
			<section>
				<div></div>
				<div>
					<h3 className="display-3">Inform your user and password to enter</h3>
					<Form.Group> 
						<FormControl 
						type="text" 
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						/>
					</Form.Group>
					<Form.Group>
						<FormControl 
						type="password" 
						placeholder="Enter passoword" 
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						/>
					</Form.Group>
					{
						status === 401 && <p>Email and/or passoword are invalid!</p>
					}
					<button onClick={submit}>
						Sign in
					</button>
				</div>
			</section>
		</div>
	)
}