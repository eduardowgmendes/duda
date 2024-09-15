import { Card, Col, Divider, Flex, Image, Row, Typography } from "antd";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
const { Title, Paragraph, Text } = Typography
export default function About() {
    return (
        <div>
            <Section children={<Container>
                <Card bodyStyle={{padding: 0}} style={{borderRadius: 32}}>
                    <div style={{borderRadius: 32, backgroundImage: `url('https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundPosition: 'center', backgroundSize: 'cover', minHeight: '25em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image preview={false} src="./assets/images/logos/duda-dark-logo.svg" width='32em' />
                    </div>
                    <Flex vertical style={{ textAlign: 'center', padding: 32 }} align='center' justify='center'>
                        <Paragraph type="secondary" className="body-2" style={{wordBreak: 'keep-all'}}>Na Duda, nossa missão é oferecer a melhor experiência de compra para nossos clientes, combinando qualidade, confiança e preços imbatíveis. Nosso compromisso vai além de simplesmente fornecer produtos – estamos dedicados a garantir que cada compra seja uma satisfação total.</Paragraph>
                        <Paragraph type="secondary" className="body-2" style={{wordBreak: 'keep-all'}}>Cada item em nossa loja é cuidadosamente selecionado para atender aos mais altos padrões de excelência. Trabalhamos com os melhores fornecedores para trazer a você uma curadoria de ofertas exclusivas, sempre com a certeza de que você está adquirindo o melhor em termos de valor e qualidade. Nossa equipe está constantemente em busca das melhores oportunidades para garantir que você tenha acesso às melhores ofertas do mercado.</Paragraph>
                        <Paragraph type="secondary" className="body-2" style={{wordBreak: 'keep-all'}}>Estamos aqui para ouvir e atender suas necessidades, com um atendimento ao cliente que reflete nosso compromisso com a sua satisfação. Se você tiver qualquer dúvida ou necessidade, nossa equipe está sempre disponível para ajudar e garantir que sua experiência de compra seja perfeita do início ao fim.</Paragraph>
                        <Paragraph type="secondary" className="body-2" style={{wordBreak: 'keep-all'}}>Agradecemos sinceramente a todos os nossos consumidores que confiam na Duda. É graças a você que continuamos a crescer e a oferecer o melhor. Sua fidelidade é a nossa maior motivação para buscar sempre o melhor.</Paragraph>
                        <Divider />
                        <Row gutter={[8, 8]}>
                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Paragraph type="secondary" style={{textAlign: 'start'}} className="body-2">Obrigado por fazer parte da família Duda! 🥰</Paragraph>
                            </Col>

                            <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 12 }}>
                                <Paragraph type="secondary" style={{textAlign: 'end'}} className="body-2"><strong>Com carinho</strong>,<br />Equipe <strong>Duda</strong>.</Paragraph>
                            </Col>
                        </Row>
                    </Flex>
                </Card>
            </Container>}>

            </Section>
        </div>
    )
}