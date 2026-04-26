import { useEffect, useState } from 'react'
import { Col, Row, Space, Typography } from 'antd'
import ButtonCustom from '@/components/Buttons'
import { FaGithub } from "react-icons/fa"

const { Title, Paragraph } = Typography

const Hero = () => {

  const [fullName, setFullName] = useState("")
  const [user, setUser] = useState({})

  const handleFullName = () => {
    setFullName("Moiz Gujjar")
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      setUser(user)
      console.log('user', user)
    }
  }, [])

  return (
    <>
      <div className='container text-center'>
        <Row>
          <Col span={24}>
            <Title level={1}>Home Page</Title>
            <Title level={2}>Hero Section</Title>
            <Title level={2}>UID: {user.id}</Title>
            <Title level={2}>Full Name: {user.fullName}</Title>
            <Title level={2}>Email: {user.email}</Title>
            <Title level={2}>Password: {user.password}</Title>
            <Title level={2} className='text-capitalize'>Status: {user.status}</Title>
            <Title level={2}><Title level={2}>
              Developer: {fullName}{" "}
              <a
                href="https://github.com/muhammadmoiz467"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "5px", fontSize: "50px" }}
              >
                <FaGithub />
              </a>
            </Title></Title>
          </Col>

          <Col span={24} className='text-center'>
            <Space>
              <ButtonCustom type="primary" text="primary" onclick={handleFullName} />
              <ButtonCustom type="secondary" text="secondary" />
              <ButtonCustom type="success" text="success" />
              <ButtonCustom type="danger" text="danger" />
              <ButtonCustom type="info" text="info" />
              <ButtonCustom type="warning" text="warning" />
              <ButtonCustom type="dark" text="dark" />
              <ButtonCustom type="light" text="light" />
              {/* <button className='btn btn-primary'>primary</button>
                  <button className='btn btn-secondary'>secondary</button>
                  <button className='btn btn-success'>success</button>
                  <button className='btn btn-danger'>danger</button>
                  <button className='btn btn-info'>info</button>
                  <button className='btn btn-warning'>warning</button>
                  <button className='btn btn-dark'>dark</button>
                  <button className='btn btn-light'>light</button> */}
            </Space>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Hero