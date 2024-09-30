import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Hero from "../components/promotionals/Hero";
import PromotedCarosel from "../components/promotionals/PromotedCarousel";
import Showcase from "../components/showcase/Showcase";
import CategoryShowcase from "../components/category/CategoryShowcase";

import items from "../local/data/products.json"
import promos from "../local/data/promos.json"
import partners from "../local/data/partners.json"
import banners from "../local/data/banners.json"
import categories from "../local/data/categories.json"
import recommendations from "../local/data/mock/recommendations.json"
import Stores from "../components/showcase/Stores";
import LeadCapturer from "../components/promotionals/LeadCapturer";
import GridSection from "../components/showcase/layout/GridSection";
import UnitLink from "../components/promotionals/UnitLink";
import { BugOutlined, DollarOutlined, MobileOutlined, UpOutlined, UsbOutlined } from "@ant-design/icons";

export default function Home() {

    const recommendation = {
        title: 'Destaques Imperdíveis no',
        subtitle: 'Grupo de Ofertas!',
        description: 'Nossa seleção especial foi feita pensando em você, que busca qualidade, estilo e as melhores tendências. Não perca a chance de descobrir o que há de melhor em nossa loja!',
        copy: {
            message: 'Entre agora nos nossos grupos exclusivos de WhatsApp e Telegram, e receba as melhores promoções direto no seu celular.',
        },
        items: recommendations,
        color: {
            base: 'purple',
            primary: 'indigo',
            secondary: 'lightcoral'
        }
    }

    return (
        <div>
            <Hero banners={banners} />

            <Container>

                <Section header={{
                    title: 'Categorias Populares',
                    description: 'Explore nossas categorias para encontrar rapidamente o que você procura. Organize suas compras de forma prática e eficiente com nossas opções diversificadas e atualizadas.',
                    callToAction: {
                        label: 'Ver Todas',
                        action: null
                    }
                }} children={<CategoryShowcase categories={categories} />} />

                <Section header={{
                    title: 'Achadinhos do Dia',
                    description: 'Descubra as melhores ofertas e produtos selecionados especialmente para você! Aproveite nossas recomendações diárias com qualidade e preços imbatíveis.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: 'shop/1'
                    }
                }} children={<Showcase items={items} />} />

            </Container>

            <Container>

                <Section header={{
                    title: 'Achadinhos Destaque',
                    description: 'Confira os produtos que estão em alta! Selecionamos os itens mais desejados e com ofertas imperdíveis para você aproveitar.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: 'shop/2'
                    }
                }} children={<Showcase items={items} />} />

                <GridSection
                    mainChildSection={<LeadCapturer recommendation={recommendation} />}
                    secondaryChildSection={<UnitLink link={{ 
                        icon: <MobileOutlined style={{ fontSize: 64, marginTop: 24 }} />, 
                        title: 'Smartphones XIAOMI 50% OFF', 
                        description: 'Não perca! Smartphones XIAOMI com até 50% de desconto. Alta tecnologia, desempenho incomparável e design moderno por um preço que você nunca viu. Aproveite agora e tenha o melhor da inovação XIAOMI na palma da sua mão, com economia garantida!', 
                        color: { background: 'tomato', textColor: 'whitesmoke' }, 
                        action: { callToAction: 'Conferir', href: 'shop/1' } }} />}
                    tertiaryChildSection={<UnitLink link={{ 
                        icon: <UsbOutlined style={{ fontSize: 64, marginTop: 24 }} />, 
                        title: 'Informática 25% OFF', 
                        description: 'Aproveite 25% OFF em todo o setor de informática! Ofertas imperdíveis em notebooks, acessórios, e muito mais. Garanta já o seu desconto!', 
                        color: { background: 'springgreen', textColor: 'teal' }, 
                        action: { callToAction: 'Conferir', href: 'shop/2' } }} />}>

                </GridSection>

                <Section header={{
                    title: 'Lojas',
                    description: 'Descubra a seleção de lojas parceiras cuidadosamente escolhidas para oferecer os melhores produtos e serviços. Trabalhamos com marcas renomadas e confiáveis, garantindo a qualidade, variedade e ótimos preços para você.',
                    callToAction: null
                }} children={<Stores stores={partners} />} />

            </Container>

            <Section children={<PromotedCarosel promos={promos} />} />

            <Container>

                <Section header={{
                    title: 'Achadinhos Incríveis',
                    description: 'Produtos incríveis com preços que você não pode perder! Aproveite nossas seleções especiais e garanta suas melhores compras.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: 'shop/3'
                    }
                }} children={<Showcase items={items} />} />

            </Container>

        </div>
    )
}