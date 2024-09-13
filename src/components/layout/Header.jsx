import { ArrowRightOutlined } from "@ant-design/icons";
import { Typography, Flex, Button, Row, Col, Grid } from "antd";
const { Title, Paragraph } = Typography
const { useBreakpoint } = Grid

export default function Header({ header }) {

    const screens = useBreakpoint()

    return (
        <Row gutter={[16,16]} style={{ marginBottom: 32 }}>
            <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }} lg={{ span: 16 }} xl={{ span: 16 }} xxl={{ span: 16 }}>
                <Title level={3} style={{textAlign: `${screens.xs ? 'center' : 'start'}`, fontFamily: 'Outfit, sans-serif' }}>{header.title}</Title>
                <Paragraph className="body-1" style={{ textAlign: `${screens.xs ? 'center' : 'start'}`, marginBottom: 0 }} type='secondary'>{header.description}</Paragraph>
            </Col>
            {
                header.callToAction ?
                    <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 8 }} xxl={{ span: 8 }}>
                        <Flex vertical align={screens.xs ? 'center' : 'end'} justify="end" style={{ height: '100%' }}>
                            <Button
                                icon={<ArrowRightOutlined />}
                                iconPosition="end"
                                type='default'
                                href={header.callToAction.action}>{header.callToAction.label}</Button>
                        </Flex>
                    </Col> : null
            }

        </Row>
    )
}