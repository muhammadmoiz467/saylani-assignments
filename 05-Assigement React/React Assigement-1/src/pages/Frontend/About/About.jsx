import { Col, Row, Typography } from 'antd'

const { Title, Paragraph} = Typography

const Information = () => {
  return (
    <div className='container'>
     <Row>
        <Col>
            <Title level={1}>About</Title>
            <Paragraph>About Section</Paragraph>
            <Paragraph>About Section</Paragraph>
        </Col>
     </Row>
    </div>
  )
}

export default Information