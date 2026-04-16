import { Col, Row, Typography } from 'antd'
import React from 'react'
const {Paragraph} = Typography

const Copyright = () => {
    const year = new Date().getFullYear()
  return (
    <>
     <footer className='bg-primary py-2'>
        <Row>
           <Col span={24}>
              <Paragraph style={{ marginBottom: 0, textAlign: 'center', color: 'white'}}>&copy; {year}. All Right Reversed.</Paragraph>
            </Col>
        </Row>
     </footer>
    </>
  )
}

export default Copyright