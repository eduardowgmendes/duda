import { Card, Divider, Flex, Space, Typography } from "antd";
const { Title, Text, Paragraph } = Typography

export default function DisplayItem({ item }) {
    return (
        <Card
            
            bordered
            hoverable
            size='small'
            cover={<img alt={item.picture.alt} src={item.picture.src} />}>

            <Space direction='vertical' size='medium'>
                <Title level={5} ellipsis={{ rows: 2, expandable: false, symbol: 'more' }} style={{ marginBottom: 20, marginTop: 0, fontFamily: 'Outfit', color: '#25333e' }}>{item.title}</Title>

                <Space direction='vertical' size='small'>
                    <Paragraph delete italic type='secondary' style={{ margin: 0, fontFamily: 'Outfit'}}>{item.price.currency.concat(' ').concat(item.price.was)}</Paragraph>
                    <Flex align='start'>
                        <Text type='secondary' style={{ paddingInlineEnd: 4, wordBreak: 'keep-all'}}>{item.price.currency}</Text>
                        <Text ellipsis={{rows: 1, expandable:false, symbol: '...'}} style={{ fontSize: '1.16rem', fontWeight: 'bold', lineHeight: 1, fontFamily: 'Outfit', color: '#1c80da' }}>{item.price.current}</Text>
                    </Flex>
                </Space>
                <Divider style={{marginBottom: 6, marginTop: 12}}/>
                <small style={{fontFamily: 'Outfit'}}><span style={{color: "gray"}}>Vendido por: </span>{item.merchant.seller}</small>
            </Space>
        </Card>
    )
}