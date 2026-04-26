import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ForgotPassword from './ForgotPassowrd'

const { Title } = Typography
const { Item } = Form

const intialState = { email: "", password: "" }
const Login = () => {

    const [state, setState] = useState(intialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const navigate = useNavigate()

    const handleChange = (e) => setState(s => ({ ...state, [e.target.name]: e.target.value }))
    //    const { name, value } = e.target
    //    setState ( { ...state, [name]: value } )
    //    setState ( (s) => ({ ...s, [name]: value}))
    // }

    const handleLogin = () => {

        let { email, password } = state
        console.log("state", state)

        const users = JSON.parse(localStorage.getItem("users")) || []
        const user = users.find((user) => user.email === email && user.password === password)

        if (!user) { return message.error("Invalid credentials") }
        localStorage.setItem('user', JSON.stringify(user))

        console.log("user", user)
        setIsProcessing(true)
        message.success("Login successful")
        setIsProcessing(false)
        navigate("/")
        // console.log("fullName", fullName)
        // console.log("email", email)
        // console.log("password", password)
        // console.log("confirmPassword", confirmPassword)


        // if(confirmPassword !== password) {return message.error("Password doesn't match.") }


        // const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
        // const user = { fullName, email, password, id, status: "pending", createdAt: new Date().getTime() }




        // if(isUserFound) { return message.error("User already exist") }

        // users.push(user)


    }

    return (
        <main className='auth'>
            <div className='container'>
                <div className='card p-3'>
                    <Title level={1} className='text-center mb-4'>Login</Title>

                    <Form layout='vertical'>
                        <Row>
                            <Col span={24}>
                                <Item label="Email" required>
                                    <Input size='large' type="email" placeholder='Enter your email' name='email' onChange={handleChange} />
                                </Item>
                            </Col>
                            <Col span={24}>
                                <Item label="Password" required>
                                    <Input.Password size='large' placeholder='Enter your password' name='password' onChange={handleChange} />
                                </Item>
                            </Col>
                            <Col span={24} style={{ display: "flex", justifyContent: "end", marginBottom: "10px" }}>
                                <Link to="/auth/ForgotPassword">Forgot Password</Link>
                            </Col>
                            <Col span={24}>
                                <Button size='large' type='primary' block htmlType='submit' loading={isProcessing} onClick={handleLogin}>Login</Button>
                            </Col>
                            <Col span={24} style={{ textAlign: "center", marginTop: "10px" }}>
                                Don’t have an account? <Link to="/auth/register">Create one</Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Login