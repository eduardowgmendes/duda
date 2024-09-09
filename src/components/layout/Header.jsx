import { Typography, Flex, Button, Row, Col } from "antd";
const { Title, Paragraph } = Typography

export default function Header({ header }) {
    return (
        <Row gutter={[8,8]} style={{padding: '0 0 32px 0'}}>
            <Col xs={{span: 16}} sm={{span: 18}} md={{span: 18}} lg={{span: 16}} xl={{span: 16}} xxl={{span: 16}}>
                <Title level={2} style={{ marginBottom: 0, fontFamily: 'Outfit, sans-serif' }}>{header.title}</Title>
                <Paragraph style={{ marginBottom: 0 }} type='secondary'>{header.description}</Paragraph>
            </Col>

            <Col xs={{span: 8}} sm={{span: 6}} md={{span: 6}} lg={{span: 2, offset: 6}} xl={{span: 2, offset: 6}} xxl={{span: 2, offset: 6}}>
                    <Flex style={{minHeight: '100%'}} align="end" justify="end">
                        <Button
                        type='text'
                        href={header.callToAction.action}>{header.callToAction.label}</Button>                
                    </Flex>
            </Col>
            
        </Row>
    )
}