import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const { Title } = Typography
const { Item } = Form

const intialState = { fullName: "", email: "", password: "", confirmPassword: "" }
const Register = () => {

    const [state, setState] = useState(intialState)

    const [fullName, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isProcessing, setIsProcessing] = useState(false)
    const navigate = useNavigate()


    const handleChange = (e) => setState(s => ({ ...state, [e.target.name]: e.target.value }))
    //    const { name, value } = e.target
    //    setState ( { ...state, [name]: value } )
    //    setState ( (s) => ({ ...s, [name]: value}))
    // }

    const handleRegister = () => {

        let { fullName, email, password, confirmPassword } = state
        console.log("state", state)


        // console.log("fullName", fullName)
        // console.log("email", email)
        // console.log("password", password)
        // console.log("confirmPassword", confirmPassword)
        if (confirmPassword !== password) { return message.error("Password doesn't match.") }


        const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
        const user = { fullName, email, password, id, status: "pending", createdAt: new Date().getTime() }

        const users = JSON.parse(localStorage.getItem("users")) || []

        const isUserFound = users.find(user => user.email === email)

        console.log("isUserFound", isUserFound)

        if (isUserFound) { return message.error("User already exist") }

        setIsProcessing(true)
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
         localStorage.setItem("user", JSON.stringify(user))
        setIsProcessing(false)
        message.success("User has been successfully added")
        navigate("/")

    }

    return (
        <main className='auth'>
            <div className='container'>
                <div className='card p-3'>
                    <Title level={1} className='text-center mb-4'>Register</Title>

                    <Form layout='vertical'>
                        <Row>
                            <Col span={24}>
                                <Item label="Full Name" required>
                                    <Input size='large' type='text' placeholder='Enter your full name' name='fullName' onChange={handleChange} />
                                </Item>
                            </Col>
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
                            <Col span={24}>
                                <Item label="Confirm Password" required>
                                    <Input.Password size='large' placeholder='Enter your password again' name='confirmPassword' onChange={handleChange} />
                                </Item>
                            </Col>
                            <Col span={24}>
                                <Button size='large' type='primary' block htmlType='submit' loading={isProcessing} onClick={handleRegister}>Register</Button>
                            </Col>
                            <Col span={24} style={{ textAlign: "center", marginTop: "10px" }}>
                                Already have an account? <Link to="/auth/login">Login here</Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Register