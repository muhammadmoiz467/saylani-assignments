import { Row, Col, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const Login = () => {
  return (
    <div className='container py-5'>
      <Row>
        <Col span={24}>
           <Title level={1} className='text-center'>Login</Title>
        </Col>
      </Row>
    </div>
  )
}

export default Login