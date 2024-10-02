import { SaveOutlined, ShopFilled, ShopOutlined } from "@ant-design/icons";
import { Card, Divider, Flex, Space, Typography, Watermark } from "antd";
const { Title, Text, Paragraph } = Typography

export default function DisplayItem({ item }) {
    return (
        <Card
            bordered
            hoverable
            size='small'
            cover={<img alt={item.picture.alt} src={item.picture.src} />}>
            
            <Space direction='vertical' size='medium'>
                <Paragraph
                className="body-2"
                    ellipsis={{ rows: 2, expandable: false, symbol: 'more' }}
                    style={{ fontWeight: 'bold', marginBottom: 16, marginTop: 0, fontFamily: 'Outfit, sans-serif', color: '#25333e', wordBreak: 'keep-all' }}>{item.title}</Paragraph>

                <Space direction='vertical' size='small'>
                    <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit, sans-serif' }}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                    <Flex align='start'>
                        <Text type='secondary' style={{ paddingInlineEnd: 4, wordBreak: 'keep-all' }}>{item.price.currency}</Text>
                        <Text ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{ fontSize: '1.16rem', fontWeight: 'bold', lineHeight: 1, fontFamily: 'Outfit, sans-serif', color: '#1c80da', wordBreak: 'keep-all' }}>{item.price.current}</Text>
                    </Flex>
                </Space>
                <Divider style={{ marginBottom: 6, marginTop: 12 }} />
                <small style={{ fontFamily: 'Outfit, sants-serif', wordBreak: 'keep-all'}}><ShopFilled style={{marginInlineEnd: 8, color: 'steelblue'}} />{item.merchant.seller}</small>
            </Space>
        </Card>
    )
}