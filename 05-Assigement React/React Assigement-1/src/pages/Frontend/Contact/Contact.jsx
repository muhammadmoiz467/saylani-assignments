import { Col, Row, Typography } from 'antd'

const { Title, Paragraph} = Typography

const Hero = () => {
  return (
    <div className='container'>
      <Row>
        <Col>
            <Title level={1}>Contact</Title>
            <Paragraph>Contact Section</Paragraph>
            <Paragraph>Contact Section</Paragraph>
        </Col>
      </Row>
    </div>
  )
}

export default Hero