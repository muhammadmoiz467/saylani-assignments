import { useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import ButtonCustom from '@/components/Buttons'
import { FaGithub } from "react-icons/fa"

const { Title, Paragraph } = Typography

const SetDashboard = () => {

    const [showName, setShowName] = useState(false)
    const [user, setUser] = useState({})

    const handleShow = () => setShowName(true)

    const handleHide = () => setShowName(false)

    {

        // useEffect(() => {
        //     setFullName("Moiz Gujjar")
        // }, [] )

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"))

            if (user) {
                setUser(user)
                console.log('user', user)
            }
        }, [])

        return (
            <>
                <main className='dashboard'>
                    <div className='container text-center'>
                    <Row>
                        <Col span={24}>
                            <Title level={1}>Dashboard Page</Title>
                            <Title level={2}>Home Section</Title>
                            <Title level={2}>UID: {user.id}</Title>
                            <Title level={2}>Full Name: {user.fullName}</Title>
                            <Title level={2}>Email: {user.email}</Title>
                            <Title level={2}>Password: {user.password}</Title>
                            <Title level={2} className='text-capitalize'>Status: {user.status}</Title>

                            <Title level={2}>Developer: {showName && "Moiz Gujjar"} <a
                href="https://github.com/muhammadmoiz467"
                target="_blank"
                rel="noopener noreferrer"
                className='github-icon'
              >
                <FaGithub />
              </a></Title>
                        </Col>

                        <Col span={24} className='text-center'>
                            <Space>
                                <ButtonCustom type="primary" text="Click Me" onclick={handleShow} />
                                <ButtonCustom type="primary" text="Click Me" onclick={handleHide} />
                            </Space>
                        </Col>
                    </Row>
                </div>
                </main>
            </>
        )
    }
}

    export default SetDashboard