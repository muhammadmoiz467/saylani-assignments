import React, { useState } from 'react'
import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import Password from 'antd/es/input/Password'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
const { Item } = Form

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [captchaInput, setCaptchaInput] = useState("")
    const [generatedCaptcha, setGeneratedCaptcha] = useState("")
    const [step, setStep] = useState(1)

    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isProsecing, setIsProcessing] = useState(false)
    const navigate = useNavigate()

    // Generate captcha
    const generateCaptcha = () => {
        const charts = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"
        let code = ""

        for (let i = 0; i < 5; i++) {
            code += charts[Math.floor(Math.random() * charts.length)]

        }
        setGeneratedCaptcha(code)

    }

    const handleEmail = () => {
        setIsProcessing(true)
        const user = JSON.parse(localStorage.getItem("users")) || []


        const userExist = user.find(u => u.email === email)
        if (!userExist) {
             setIsProcessing(false)
            return message.error("User not found")
        }
        setTimeout(() => {
            generateCaptcha()
            setStep(2)
            setIsProcessing(false)
            message.success("Captcha Generated")
        }, 1000)

    }
    // Step 2: Captcha verify
    const handleCaptchaSubmit = () => {
         setIsProcessing(true)
        if (captchaInput !== generatedCaptcha) {
            setIsProcessing(false)
            return message.error("Invalid Captcha")
        }
        setTimeout(() => {
            setStep(3)
            setIsProcessing(false)
            message.success("Captcha Verfied")
        }, 1000)
    }

    // Step 3: Reset password
    const handlePasswordReset = () => {
         setIsProcessing(true)
        if (!newPassword || !confirmPassword) {
             setIsProcessing(false)
            return message.error("Please fill all fields")
        }
        if (newPassword !== confirmPassword) {
             setIsProcessing(false)
            return message.error("Passwords do not match")
        }
        setTimeout(() => {
            let users = JSON.parse(localStorage.getItem("users")) || []
            const updateUsers = users.map(u => {
                if (u.email === email) {
                    return { ...u, password: newPassword }
                }
                return u
            })
            localStorage.setItem("users", JSON.stringify(updateUsers))
            message.success("Password update successfully")
            navigate("/auth/login")
            setStep(1)
            setEmail("")
            setCaptchaInput("")
            setNewPassword("")
            setConfirmPassword("")
            setGeneratedCaptcha("")
            setIsProcessing(false)

        }, 1000)

    }

    return (
        <>
            <main className='forgotPassword'>
                <div className='container text-center'>
                    <div className='card p-3'>
                        <Title level={1}>Forgot Password</Title>
                        <Form layout='vertical'>
                            <Row>
                                {step == 1 && (
                                    <Col span={24}>
                                        <Item label="Email" required>
                                            <Input size='large' placeholder='Enter your email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Item>
                                        <Button size='large' type='primary' block htmlType='submit' loading={isProsecing} onClick={handleEmail}>Send Captcha</Button>
                                    </Col>
                                )}
                                {/* STEP 2 - CAPTCHA */}
                                {step == 2 && (
                                    <Col span={24}>
                                        <h3>Captcha: <span style={{ letterSpacing: "5px" }}>{generatedCaptcha}</span></h3>
                                        <Item label="Enter captcha" required>
                                            <Input size='large' placeholder='Enter your captcha' value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />
                                        </Item>
                                        <Button size='large' type='primary' block htmlType='submit' loading={isProsecing} onClick={handleCaptchaSubmit}>Verify</Button>
                                    </Col>
                                )}
                                {/* Step 3: Reset password */}
                                {step == 3 && (

                                    <Col span={24}>
                                        <Item label="New Password" required>
                                            <Input.Password size='large' placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        </Item>
                                        <Item label="Confirm Passowrd" required>
                                            <Input.Password size='large' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        </Item>
                                        <Button size='large' type='primary' block htmlType='submit' loading={isProsecing} onClick={handlePasswordReset} >Reset Password</Button>
                                    </Col>
                                )}
                            </Row>
                        </Form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ForgotPassword