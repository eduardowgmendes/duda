import { ApiTwoTone, FileZipTwoTone, MailTwoTone, MessageTwoTone, SendOutlined } from "@ant-design/icons";
import { Button, Card, Col, Flex, Input, Row, Space, Typography } from "antd";

const { Title, Paragraph, Link, Text } = Typography

export default function Reminder() {

    return (
        <Card bordered style={{margin: '128px 0 128px 0'}}>
            <Row gutter={[32, 32]}>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 6}} xxl={{span: 6}}>
                    <Flex vertical align="start" justify="center" style={{ height: '100%' }}>
                        <Title level={2} style={{ fontFamily: 'Outfit, sans-serif', wordBreak: 'keep-all' }}>Não perca nenhuma oferta!</Title>
                        <Paragraph type="secondary">Cadastre-se nos grupos de WhatsApp ou inscreva seu e-mail para não perder nenhuma promoção.</Paragraph>
                    </Flex>
                </Col>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 18}} xxl={{span: 18}}>
                    <Row gutter={[16, 16]}>
                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 12}} xl={{span: 12}} xxl={{span: 12}}>
                            <MailTwoTone style={{fontSize: '2rem'}}/>
                            <Title level={4}> Receba as Melhores Ofertas </Title>

                            <Paragraph type='secondary'>Quer receber nossas melhores ofertas e novidades em primeira mão? Deixe seu e-mail e fique por dentro de todas as promoções e lançamentos exclusivos! Não perca a chance de aproveitar ofertas imperdíveis diretamente na sua caixa de entrada."</Paragraph>

                            <Space.Compact>
                                <Input size="large" placeholder="seuemail@email.com" />
                                <Button size="large" type="primary" iconPosition='end' icon={<SendOutlined />}>Enviar</Button>
                            </Space.Compact>

                        </Col>

                        <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 12}} xl={{span: 12}} xxl={{span: 12}}>

                        <MessageTwoTone style={{fontSize: '2rem'}}/>
                            <Title level={4}> Grupo de Ofertas </Title>

                            <Space direction='vertical' size='large'>
                                
                                <Paragraph type="secondary" >Entre agora nos nossos grupos exclusivos de WhatsApp e Telegram, e receba as melhores promoções direto no seu celular."</Paragraph>

                                <Row align='center' justify='center' gutter={[10,10]}>

                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} xxl={{span: 12}}>
                                        <Card hoverable bordered style={{ padding: 10, background: 'lightcyan' }} bodyStyle={{ padding: 0 }}>
                                            <Flex align='center' justify='center'>
                                                <img src="./assets/images/logos/telegram.svg" width={32} alt="" style={{ marginInlineEnd: 10 }} />
                                                <Flex vertical>
                                                    <Paragraph style={{ margin: 0, color: "inherit" }}>Participe no</Paragraph>
                                                    <Title level={5} style={{ wordBreak: 'keep-all', margin: 0, color: "inherit" }} fontFamily='Outfit, sans-serif'>Telegram</Title>
                                                </Flex>
                                            </Flex>
                                        </Card>
                                    </Col>

                                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}} xxl={{span: 12}}>

                                        <Card hoverable bordered style={{ padding: 10, background: 'springgreen' }} bodyStyle={{ padding: 0 }}>
                                            <Flex align='center' justify='center'>
                                                <img src="./assets/images/logos/whatsApp.svg" width={32} alt="" style={{ marginInlineEnd: 10 }} />
                                                <Flex vertical>
                                                    <Paragraph style={{ margin: 0, color: "inherit" }}>Participe no</Paragraph>
                                                    <Title level={5} style={{ margin: 0, color: "inherit" }} fontFamily='Outfit, sans-serif'>WhatsApp</Title>
                                                </Flex>
                                            </Flex>
                                        </Card>
                                    </Col>
                                </Row>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}