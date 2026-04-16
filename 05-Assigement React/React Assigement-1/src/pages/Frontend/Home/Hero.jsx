import { Col, Row, Typography } from 'antd'

const { Title, Paragraph } = Typography

const Hero = () => {
    return (
        <>
          <div className='container'>
            <Row>
                <Col span={24}>
                     <Title level={1}>Home</Title>
                     <Paragraph>Hero Section</Paragraph>
                     <Paragraph>Hero Section</Paragraph>
                </Col>
            </Row>
          </div>
        </>
    )
}

export default Hero