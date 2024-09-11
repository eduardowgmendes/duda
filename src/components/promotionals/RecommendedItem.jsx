import { StarOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Row, Space, Typography } from "antd";
import { useState } from "react";
const { Meta } = Card
const { Title, Paragraph, Text } = Typography

export default function RecommendedItem({ item }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <Card
            size='small'
            bordered
            style={{width: '40vh'}}
            title={<Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ maxWidth: '90%' }}>{item.title}</Text>}
            extra={<StarOutlined style={{ fontSize: '1.3rem', color: 'gold' }} />}
            bodyStyle={{ padding: 16, background: 'lemonchiffon' }}
            cover={<img src={item.media.mainPicture} alt={item.media.alt} />}>

            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>

                    <Flex align='end' justify="end" style={{height: '100%'}}>
                        <Title level={4} style={{ fontFamily: 'Outfit, sans-serif' }} ellipsis={{ rows: 3, expandable: false, symbol: '...' }}>{item.copy.title}</Title>
                    </Flex>

                </Col>

                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 24 }}>
                    <Space direction="vertical" align="center" size='middle'>
                        <Paragraph ellipsis={{ rows: 3, expandable: 'collapsible', expanded: expanded, onExpand: () => setExpanded(info.expanded) }} type='secondary'>{item.copy.message}</Paragraph>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}