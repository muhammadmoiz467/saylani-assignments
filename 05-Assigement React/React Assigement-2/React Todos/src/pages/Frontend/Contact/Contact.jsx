import { Col, Row, Typography } from 'antd'
import { FaGithub } from "react-icons/fa"

const { Title, Paragraph} = Typography

const Hero = () => {
  return (
    <div className='container'>
      <Row>
        <Col span={24}>
            <Title level={1}>Contact</Title>
            <Paragraph>Contact Section</Paragraph>
            <Paragraph>Contact Section</Paragraph>
        </Col>
        <Col><Title level={24}>
              Developer: {""}
              <a
                href="https://github.com/muhammadmoiz467"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "5px", fontSize: "70px" }}
              >
                <FaGithub />
              </a>
            </Title></Col>
      </Row>
    </div>
  )
}

export default Hero