import { ArrowDownOutlined, BulbTwoTone, CarTwoTone, FrownTwoTone, GiftTwoTone, HddTwoTone, HomeTwoTone, LaptopOutlined, RocketTwoTone, ShopTwoTone, SoundTwoTone, StarTwoTone, ToolTwoTone } from "@ant-design/icons";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Hero from "../components/promotionals/Hero";
import PromotedCarosel from "../components/promotionals/PromotedCarousel";
import Showcase from "../components/showcase/Showcase";
import CategoryShowcase from "../components/category/CategoryShowcase";

export default function Home() {

    const items = [{
        title: 'Mouse Pad Gamer Anti derrapante Jogos Varias Estampas 70x35 80x40 90x40 90x55 cm',
        description: 'Lindo mousepad antiderrapante mega grande disponível em vários tamanhos com estampas diversas. O moderno mousepad mega grande é ideal para quem quer qualidade e originalidade para as atividades no computador como jogos e trabalho. Contam com super qualidade de imagem, são antiderrapantes, práticos, confortáveis, duráveis, fáceis de higienizar e excelente para utilizar no escritório, no trabalho ou em casa, principalmente para quem passa horas em atividades no computador e necessita de um acessório confortável e adequado.',
        price: {
            currency: 'R$',
            was: '33,80',
            current: '19,95'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98r-lmeklijm53cnd2'
        }
    },{
        title: 'Teclado para jogos com fio 61-Key RGB Backlight Mini Compact USB-C Cabo de alimentação plugável',
        description: 'Mini teclado com fio de 61 teclas separação de cabo chave plugável para conexão de laptop USB-C de mesa.',
        price: {
            currency: 'R$',
            was: '146,68',
            current: '99,68'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/685634513182a36e87efd904900fdc30'
        }
    },{
        title: 'Xiaomi Redmi 13c 256GB 8GB RAM/128GB 4GB Ram',
        description: 'Mini teclado com fio de 61 teclas separação de cabo chave plugável para conexão de laptop USB-C de mesa.',
        price: {
            currency: 'R$',
            was: '999,68',
            current: '789,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxwhv92usvwya3'
        }
    },
    {
        title: 'Celular IPhone 12 64gb/ 128gb 100% Original Com Garantia.',
        description: 'Mini teclado com fio de 61 teclas separação de cabo chave plugável para conexão de laptop USB-C de mesa.',
        price: {
            currency: 'R$',
            was: '3.950,00',
            current: '2.490,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-23030-cc799741anovd7'
        }
    },
    {
        title: 'Kit Teclado E Mouse Bluetooth 5.2 Compatível Pc iPhone Android',
        description: '',
        price: {
            currency: 'R$',
            was: '99,99',
            current: '54,99'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7rcc9-ltsds6lm8ww36b'
        }
    },
    {
        title: 'Caixa De Som Monitor De Áudio Preto -Tomate Original',
        description: '',
        price: {
            currency: 'R$',
            was: '717,00',
            current: '593,90'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7rcdu-ls4bpbw402sddb'
        }
    },
    {
        title: 'Guarda Roupa Dobrável Organizador De Roupas Portátil com Ziper Armário de Roupa Multifuncional',
        description: '',
        price: {
            currency: 'R$',
            was: '100,00',
            current: '72,99'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsbdp79rzy2j60'
        }
    },
    {
        title: 'Fritadeira Air Fryer Philco PFR15PI Redstone 4,4L 1500W',
        description: '',
        price: {
            currency: 'R$',
            was: '479,99',
            current: '389,90'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7rcdm-lsn4klt1ydyaa0'
        }
    },
    {
        title: 'Masturbador Masculino Realístico em Cyberskin com Formato de Bunda e Dois Orifícios Penetráveis Vagina e Anus PG-002',
        description: '',
        price: {
            currency: 'R$',
            was: '9.499,00',
            current: '4.443,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwomfbfz1cwi6a'
        }
    },
    {
        title: 'Tablet Xiaomi Redmi Pad SE 8GB de RAM 256GB Tela 11”',
        description: '',
        price: {
            currency: 'R$',
            was: '1.600,00',
            current: '1.450,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo8wvgicpkcn7c'
        }
    },
    {
        title: 'Realme C67 Cam 108 Mp NFC 6GB e 8GB RAM 4G LTE - Tela 6,72"',
        description: '',
        price: {
            currency: 'R$',
            was: '1.499,00',
            current: '949,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqj3fu5wjrj3de'
        }
    },
    {
        title: 'Espremedor Elétrico Laranja Limão Frutas Fazer Sucos Recarregável usb',
        description: '',
        price: {
            currency: 'R$',
            was: '139,80',
            current: '65,99'
        },
        merchant: {
            seller: 'Ali Express'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxq5uosfc89c6'
        }
    },
    {
        title: 'Smart TV LED 50" Semp 4K HDR Roku 50RK8600',
        description: '',
        price: {
            currency: 'R$',
            was: '2.499,00',
            current: '2.343,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7qve6-li31zzi5ofin80'
        }
    }, {
        title: 'Liquidificador Portátil Mini Original Fresh Juice Elétrico Copo ',
        description: '',
        price: {
            currency: 'R$',
            was: '499,00',
            current: '118,92'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/661b2863f64b94ac187ce885b85ab6df'
        }
    }, {
        title: 'Mini Processador de Alimentos Elétrico Triturador De Alho Elétrico com 03 Lâminas Sem Fio USB Recarregável',
        description: '',
        price: {
            currency: 'R$',
            was: '39,00',
            current: '29,99'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqnxvmparj0j84'
        }
    }, {
        title: 'Fritadeira Elétrica Air Fryer Gaabor Pares sem Óleo 3.5L 127V 1350W Preto - AF40M-BK02-1',
        description: '',
        price: {
            currency: 'R$',
            was: '499,00',
            current: '209,90'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbkk-lplbadqxh8up30'
        }
    }, {
        title: 'Mini Máquina de Lava Roupas Centrífuga 8 Litros Dobrável Portátil Lavar Roupa de Criança e Intima Usb Com Esterilizada U.V',
        description: '',
        price: {
            currency: 'R$',
            was: '299,99',
            current: '155,90'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7rcex-lrqh4x1nt9wub7'
        }
    }, {
        title: 'Controlador Sem Fio Xbox One S (Bluetooth Embutido) Joystick Para/Pc',
        description: '',
        price: {
            currency: 'R$',
            was: '550,00',
            current: '150,60'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/sg-11134201-7rbni-llmzmoizpxyc67'
        }
    }, {
        title: 'Usb BotãO AutomáTico Bebedouro Bomba EléTrica Agua RecarregáVel Dispenser Universal Carregamento',
        description: '',
        price: {
            currency: 'R$',
            was: '9.499,00',
            current: '4.443,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-ls2cgo94leec71'
        }
    },
        , {
        title: 'Copo Caneca Liquidificador Mini Juicer 420ml com 6 laminas com tampa e canudo Recarregavel Portatil',
        description: '',
        price: {
            currency: 'R$',
            was: '99,00',
            current: '34,00'
        },
        merchant: {
            seller: 'Magalu'
        },
        picture: {
            alt: '...',
            src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt4aurs7dbv335'
        }
    },]
    const categories = [{
        name: 'Ferramentas',
        color: {
            primary: 'white',
            secondary: '',
        },
        media: {
            background: 'https://plus.unsplash.com/premium_photo-1674078860580-688dd9519e81?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <ToolTwoTone />
        }
    }, {
        name: 'Eletroportáteis',
        color: {
            primary: 'darkslategray',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <FrownTwoTone />
        }
    }, {
        name: 'Comércio & Indústria',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1542274368-443d694d79aa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <StarTwoTone />
        }
    }, {
        name: 'Brinquedos',
        color: {
            primary: 'cornsilk',
            secondary: '',
        },
        media: {
            background: 'https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <BulbTwoTone />
        }
    }, {
        name: 'Automotivo',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-automotive.png',
            icon: <CarTwoTone />
        }
    }, {
        name: 'Casa',
        color: {
            primary: 'cornsilk',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww',
            icon: <HomeTwoTone />
        }
    }, {
        name: 'Utilidades Domésticas',
        color: {
            primary: 'darkslategray',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1567790375865-21c42874446e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <GiftTwoTone />
        }
    }, {
        name: 'TV & Áudio',
        color: {
            primary: 'purple',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <SoundTwoTone />
        }
    }, {
        name: 'Mercado',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1567790329613-4196347cf60b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <ShopTwoTone />
        }
    }, {
        name: 'Games',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1535043205849-513fe27db33e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <RocketTwoTone />
        }
    }, {
        name: 'Informática',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: 'https://images.unsplash.com/photo-1556559322-b5071efadc88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            icon: <HddTwoTone />
        }
    },]


    const promos = [{
        title: 'Seleção Especial do Editor',
        description: 'Confira os produtos escolhidos a dedo para você! Qualidade garantida e ofertas imperdíveis na nossa curadoria exclusiva.',
        callToAction: 'Compre Agora e Economize',
        color: {
            primary: 'gold',
            secondary: 'whitesmoke'
        },
        media: {
            backdropAlt: '..',
            backdrop: 'https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }, {
        title: 'Promoção Relâmpago em Produtos Selecionados',
        description: 'Ofertas imperdíveis por tempo limitado! Confira nossa seleção de produtos com até 50% de desconto. Renove seu carrinho com as melhores marcas e preços incríveis.',
        callToAction: 'Garanta o Seu Desconto',
        color: {
            primary: 'cornsilk',
            secondary: 'whitesmoke'
        },
        media: {
            backdropAlt: '..',
            backdrop: 'https://images.unsplash.com/photo-1628689761991-273c5392a162?q=80&w=2638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }, {
        title: 'Smartphones Recomendados',
        description: 'Explore os melhores smartphones selecionados pelo editor! Alta performance, tecnologia de ponta e preços incríveis.',
        callToAction: 'Aproveite o Frete Grátis',
        color: {
            primary: 'gold',
            secondary: 'whitesmoke'
        },
        media: {
            backdropAlt: '..',
            backdrop: 'https://images.unsplash.com/photo-1668871333606-ef8461d43922?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    },]

    const banners = [{
        title: 'Encontre os Melhores Produtos, Selecionados para Você!',
        description: 'Explore ofertas exclusivas de nossos parceiros e garanta os itens mais populares com os melhores preços. Toda a qualidade, em um só lugar!',
        lead: null,
        callToAction:{
            message: 'Veja as Ofertas Agora',
            action: '/about'
        },
        media: {
            background: 'https://images.unsplash.com/photo-1556139954-ec19cce61d61?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        color:{
            primary: 'gold',
            secondary: 'white'
        }
    },{
        title: 'Descubra as Novidades! Economize com a gente.',
        description: 'Fique por dentro dos últimos lançamentos e atualizações exclusivas. Não perca essa oportunidade de se manter informado!',
        lead: null,
        callToAction:{
            message: 'Saiba Mais',
            action: '/about'
        },
        media: {
            background: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        color:{
            primary: 'indigo',
            secondary: 'black'
        }
    },{
        title: 'Faça parte da maior comunidade de compras online!',
        description: 'Explore ofertas exclusivas de nossos parceiros e garanta os itens mais populares com os melhores preços. Toda a qualidade, em um só lugar!',
        lead: null,
        callToAction:{
            message: 'Veja as Ofertas Agora',
            action: '/about'
        },
        media: {
            background: 'https://images.unsplash.com/photo-1696159403688-3deee7d4daf8?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        color:{
            primary: 'blue',
            secondary: 'black'
        }
    },]

    return (
        <div>
            <Hero banners={banners}/>
            
            {/* <CategoryShowcase categories={categories} /> */}

            <Container>

                <Section children={<CategoryShowcase categories={categories} />} />
                
                <Section header={{
                    title: 'Achadinhos do Dia',
                    description: 'Aqui voce encontra as melhores ofertas com muitos descontos e cupons das lojas; Amazon, Magalu, Renner, C&A, Beleza na Web, Época Cosméticos e muitas outras.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: '/shop'
                    }
                }} children={<Showcase items={items} />} />

                <Section children={<PromotedCarosel promos={promos} />} />

                <Section header={{
                    title: 'Achadinhos Destaque',
                    description: 'Aqui voce encontra as melhores ofertas com muitos descontos e cupons das lojas; Amazon, Magalu, Renner, C&A, Beleza na Web, Época Cosméticos e muitas outras.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: '/about'
                    }
                }} children={<Showcase items={items} />} />


            </Container>
        </div>
    )
}