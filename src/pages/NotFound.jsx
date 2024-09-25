import { Button, Flex, Image, Layout, Space, Typography } from "antd";
import Container from "../components/layout/Container";
import { ArrowLeftOutlined, BackwardFilled, HomeTwoTone } from "@ant-design/icons";
const {Title, Paragraph, Text} = Typography
export default function NotFound({title, description}){
    return (
        <div>
            <Container>
                <Layout style={{minHeight: '100vh'}}>
                    <Space direction='vertical' align='center' size='small' style={{height: '100%', padding: '3em 0 3em 0'}}>
                        <Image preview={false} src="    ./assets/images/placeholder/not-found.jpg"/>
                        <Title level={2} className="display-4" type='danger' style={{textAlign: 'center', wordBreak: 'keep-all', fontFamily: 'Outfit, sans-serif'}}>{title}</Title>
                        <Paragraph type='secondary' className="sublead" style={{ textAlign: 'center', wordBreak: 'keep-all'}}>{description}</Paragraph>
                        <Button size='large' type='default' shape='round' href='/duda/' target='_self' icon={<ArrowLeftOutlined />} iconPosition='start'>Voltar à Homepage</Button>
                    </Space>
                </Layout>
            </Container>
        </div>
    )
}