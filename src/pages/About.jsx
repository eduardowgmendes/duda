import { Card, Col, Divider, Flex, Image, Row, Typography } from "antd";
import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
const { Title, Paragraph, Text } = Typography
export default function About() {
    return (
        <div>
            <SectionHeader children={<Container>
                <Card bodyStyle={{padding: 0}}>
                    <Flex vertical style={{ textAlign: 'center', padding: '2rem' }} align='center' justify='center'>
                        <Flex vertical align='center' justify='center' style={{padding: '2rem 2rem 4rem 2rem'}}>
                            <Image preview={false} src="./assets/images/logos/duda-dark-logo.svg" width='16em'/>
                        </Flex>
                        <Paragraph type="secondary" className="lead" style={{wordBreak: 'keep-all'}}>Na <b>Duda</b>, nossa missão é <b>oferecer a melhor experiência de compra para nossos clientes</b>, combinando <b>qualidade</b>, <b>confiança</b> e <b>preços imbatíveis</b>.<br/>Nosso compromisso vai além de simplesmente fornecer produtos - estamos dedicados a garantir que cada compra seja uma satisfação total.</Paragraph>
                        <Paragraph type="secondary" className="lead" style={{wordBreak: 'keep-all'}}>Cada item em nossa loja é cuidadosamente selecionado para atender aos mais altos padrões de excelência.<b>Trabalhamos com os melhores fornecedores para trazer a você uma curadoria<br/>de ofertas exclusivas, sempre com a certeza de que você está adquirindo o melhor em termos de valor e qualidade.</b> Nossa equipe está constantemente em busca das melhores oportunidades<br/>para garantir que você tenha acesso às melhores ofertas do mercado.</Paragraph>
                        <Paragraph type="secondary" className="lead" style={{wordBreak: 'keep-all'}}>Estamos aqui para ouvir e atender suas necessidades, com um atendimento ao cliente que reflete nosso compromisso com a sua satisfação. Se você tiver qualquer dúvida ou necessidade, nossa equipe está sempre disponível para ajudar e garantir que sua experiência de compra seja perfeita do início ao fim.</Paragraph>
                        <Paragraph type="secondary" className="lead" style={{wordBreak: 'keep-all'}}>Agradecemos sinceramente a todos os nossos consumidores que confiam na Duda.<br/><b>É graças a você que continuamos a crescer e a oferecer o melhor.</b> Sua fidelidade é a nossa maior motivação para buscar sempre o melhor.</Paragraph>
                        <Paragraph type="secondary" style={{textAlign: 'center'}} className="body-2">Obrigado por fazer parte da família Duda! 🥰</Paragraph>
                        <Paragraph type="secondary" style={{textAlign: 'center'}} className="body-2"><strong>Com carinho</strong>,<br />Equipe <strong>Duda</strong>.</Paragraph>
                    </Flex>
                </Card>
            </Container>}>

            </SectionHeader>
        </div>
    )
}