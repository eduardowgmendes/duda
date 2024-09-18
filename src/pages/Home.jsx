import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Hero from "../components/promotionals/Hero";
import PromotedCarosel from "../components/promotionals/PromotedCarousel";
import Showcase from "../components/showcase/Showcase";
import CategoryShowcase from "../components/category/CategoryShowcase";
import RecommendedPromoCard from "../components/promotionals/RecommendedPromoCard";

import items from "../local/data/products.json"
import promos from "../local/data/promos.json"
import banners from "../local/data/banners.json"
import categories from "../local/data/categories.json"
import recommendations from "../local/data/mock/recommendations.json"

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
            base: 'steelblue',
            primary: 'steelblue',
            secondary: 'dimgray'
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
                    description: 'Aqui voce encontra as melhores ofertas com muitos descontos e cupons das lojas; Amazon, Magalu, Renner, C&A, Beleza na Web, Época Cosméticos e muitas outras.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: './duda/shop'
                    }
                }} children={<Showcase items={items} />} />

            </Container>

            <Section children={<RecommendedPromoCard recommendation={recommendation} />} />

            <Container>

                <Section header={{
                    title: 'Achadinhos Destaque',
                    description: 'Aqui voce encontra as melhores ofertas com muitos descontos e cupons das lojas; Amazon, Magalu, Renner, C&A, Beleza na Web, Época Cosméticos e muitas outras.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: '/about'
                    }
                }} children={<Showcase items={items} />} />


            </Container>

            <Section children={<PromotedCarosel promos={promos} />} />
        </div>
    )
}