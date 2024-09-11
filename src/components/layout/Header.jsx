import { ArrowRightOutlined } from "@ant-design/icons";
import { Typography, Flex, Button, Row, Col } from "antd";
const { Title, Paragraph } = Typography

export default function Header({ header }) {
    return (
        <Row style={{ marginBottom: 32 }}>
            <Col xs={{ span: 16 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                <Title level={3} style={{ fontFamily: 'Outfit, sans-serif' }}>{header.title}</Title>
                <Paragraph style={{ marginBottom: 0 }} type='secondary'>{header.description}</Paragraph>
            </Col>
            {
                header.callToAction ?
                    <Col xs={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} xl={{ span: 2, offset: 6 }} xxl={{ span: 2, offset: 6 }}>
                        <Flex vertical align="end" justify="end" style={{ height: '100%' }}>
                            <Button
                                icon={<ArrowRightOutlined />}
                                iconPosition="end"
                                type='text'
                                href={header.callToAction.action}>{header.callToAction.label}</Button>
                        </Flex>
                    </Col> : null
            }

        </Row>
    )
}