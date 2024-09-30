import { ArrowRightOutlined, MoreOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, List, Space, Typography } from "antd";
const { Paragraph, Title } = Typography
export default function Stores({ stores }) {
    
    // window.open(url, '_blank').focus()

    const handleOnClick = (e) => {
       console.log(e) 
    }
    
    const lastIndex = stores.length - 1

    return (
        <List
            grid={{
                gutter: 16,
                xs: 3,
                sm: 4,
                md: 4,
                lg: 6,
                xl: 6,
                xxl: 8
            }}
            dataSource={stores}
            renderItem={(store, index) => (
                index !== lastIndex ?
                <List.Item>
                    <Space direction='vertical' align='center' size='small'>
                        <Card
                            hoverable
                            onClick={handleOnClick}
                            bordered>
                            <img src={store.media.logo} alt={store.media.alt} width={'100%'} />
                        </Card>
                        <Paragraph ellipsis={{ rows: 1, expandable: false, symbol: '...' }} style={{fontFamily: 'Outfit, sans-serif'}}>{store.name}</Paragraph>
                    </Space>
                </List.Item> : <List.Item>
                    <Space direction='vertical' align='center' size='large'>
                        <Button type='default' shape='round' size='large' icon={<RightOutlined />} iconPosition='end' href="shop/1"></Button>
                    </Space>
                </List.Item>
            )} />
    )
}