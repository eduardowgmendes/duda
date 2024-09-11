import { ArrowDownOutlined, BulbTwoTone, CarTwoTone, FrownTwoTone, GiftTwoTone, HddTwoTone, HomeTwoTone, LaptopOutlined, RocketTwoTone, ShopTwoTone, SoundTwoTone, StarTwoTone, ToolTwoTone } from "@ant-design/icons";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Hero from "../components/promotionals/Hero";
import PromotedCarosel from "../components/promotionals/PromotedCarousel";
import Showcase from "../components/showcase/Showcase";
import CategoryShowcase from "../components/category/CategoryShowcase";
import Recommended from "../components/promotionals/Recommended";
import RecommendedPromoCard from "../components/promotionals/RecommendedPromoCard";

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
    }, {
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
    }, {
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
            background: './assets/images/category/category-banner-tools.png',
            icon: <ToolTwoTone />
        }
    }, {
        name: 'Eletroportáteis',
        color: {
            primary: 'darkslategray',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-home-appliance.png',
            icon: <FrownTwoTone />
        }
    }, {
        name: 'Comércio & Indústria',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-industry.png',
            icon: <StarTwoTone />
        }
    }, {
        name: 'Brinquedos',
        color: {
            primary: 'cornsilk',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-toys.png',
            icon: <BulbTwoTone />
        }
    }, {
        name: 'Informática',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-computers.png',
            icon: <HddTwoTone />
        }
    }, {
        name: 'Casa',
        color: {
            primary: 'cornsilk',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-house-alternative.png',
            icon: <HomeTwoTone />
        }
    }, {
        name: 'Utilidades Domésticas',
        color: {
            primary: 'darkslategray',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-furniture.png',
            icon: <GiftTwoTone />
        }
    }, {
        name: 'TV & Áudio',
        color: {
            primary: 'purple',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-tv.png',
            icon: <SoundTwoTone />
        }
    }, {
        name: 'Mercado',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-supermarket.png',
            icon: <ShopTwoTone />
        }
    }, {
        name: 'Games',
        color: {
            primary: 'whitesmoke',
            secondary: '',
        },
        media: {
            background: './assets/images/category/category-banner-games.png',
            icon: <RocketTwoTone />
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
        callToAction: {
            message: 'Veja as Ofertas Agora',
            action: '/about'
        },
        media: {
            background: 'https://images.unsplash.com/photo-1631510083755-11ecb5172d81?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        color: {
            primary: 'forestgreen',
            secondary: 'dimgray'
        }
    }, {
        title: 'Descubra as Novidades! Economize com a gente.',
        description: 'Fique por dentro dos últimos lançamentos e atualizações exclusivas. Não perca essa oportunidade de se manter informado!',
        lead: null,
        callToAction: {
            message: 'Saiba Mais',
            action: '/about'
        },
        media: {
            background: 'https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        color: {
            primary: 'gold',
            secondary: 'whitesmoke'
        }
    }, {
        title: 'Faça parte da maior comunidade de compras online!',
        description: 'Explore ofertas exclusivas de nossos parceiros e garanta os itens mais populares com os melhores preços. Toda a qualidade, em um só lugar!',
        lead: null,
        callToAction: {
            message: 'Veja as Ofertas Agora',
            action: '/about'
        },
        media: {
            background: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        color: {
            primary: 'orangered',
            secondary: 'dimgray'
        }
    },]

    const recommendeds = [{
        title: 'XiaomiRedmi8A (4GB + 64GB) Dual SIM 100 % original Versão global Segunda Mão Telefone 95novo',
        description: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes. Seu processador Snapdragon 439 garante uma performance ágil, enquanto a câmera traseira de 12 MP captura fotos nítidas e detalhadas. Ideal para quem busca tecnologia de ponta sem comprometer o orçamento.',
        copy: {
            title:'Smartphone que combina desempenho robusto e preço acessível',
            message: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes.'
        },
        price: {
            currency: 'R$',
            was: '999,00',
            current: '799,00'
        },
        merchant: {
            seller: 'Magalu'
        },
        media: {
            mainPicture: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74mo6dd6',
            alt: '...',
            showcasePictures: [{
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74o2qt7e',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvck76qrtuqt02',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74phb959',
                caption: '...',
                alt: '...'
            },]
        }
    },{
        title: 'Tablet Xiaomi Redmi Pad SE - 128GB/256GB - 4RAM/8RAM - Verde e Cinza',
        description: 'Desfrute do desempenho excepcional e da qualidade visual do Tablet Redmi Pad S. Ideal para quem busca um tablet potente e versátil, perfeito para entretenimento, trabalho e muito mais.',
        copy: {
            title:'Tablet que combina desempenho robusto e preço acessível',
            message: 'Desfrute do desempenho excepcional e da qualidade visual do Tablet Redmi Pad S. Ideal para quem busca um tablet potente e versátil, perfeito para entretenimento, trabalho e muito mais.'
        },price: {
            currency: 'R$',
            was: '1.699,00',
            current: '1.200,00'
        },
        merchant: {
            seller: 'Magalu'
        },
        media: {
            mainPicture: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lypc8yr4jrxhfd.webp',
            alt: '...',
            showcasePictures: [{
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74o2qt7e',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvck76qrtuqt02',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74phb959',
                caption: '...',
                alt: '...'
            },]
        }
    },{
        title: 'Celular Xiaomi Redmi A3 Original Global 64GB 3GB RAM',
        description: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes. Seu processador Snapdragon 439 garante uma performance ágil, enquanto a câmera traseira de 12 MP captura fotos nítidas e detalhadas. Ideal para quem busca tecnologia de ponta sem comprometer o orçamento.',
        copy: {
            title:'Smartphone que combina desempenho robusto e preço acessível',
            message: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes.'
        },price: {
            currency: 'R$',
            was: '1.244,99',
            current: '589,00'
        },
        merchant: {
            seller: 'Shopee'
        },
        media: {
            mainPicture: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxpsgll8y18f0f.webp',
            alt: '...',
            showcasePictures: [{
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74o2qt7e',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvck76qrtuqt02',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74phb959',
                caption: '...',
                alt: '...'
            },]
        }
    },{
        title: 'Celular iPhone 12 Original com NF 64GB e 128GB Novo Vitrine com Garantia Bateria 100% Apple',
        description: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes. Seu processador Snapdragon 439 garante uma performance ágil, enquanto a câmera traseira de 12 MP captura fotos nítidas e detalhadas. Ideal para quem busca tecnologia de ponta sem comprometer o orçamento.',
        copy: {
            title:'Smartphone que combina desempenho robusto e preço acessível',
            message: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes.'
        },price: {
            currency: 'R$',
            was: '4.200,00',
            current: '1.999,00'
        },
        merchant: {
            seller: 'Magalu'
        },
        media: {
            mainPicture: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvbuq7d09hi0ec.webp',
            alt: '...',
            showcasePictures: [{
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74o2qt7e',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvck76qrtuqt02',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74phb959',
                caption: '...',
                alt: '...'
            },]
        }
    },{
        title: 'Tablet Samsung Galaxy Tab A T295 8" 4g 32gb 2gb Ram Preto',
        description: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes. Seu processador Snapdragon 439 garante uma performance ágil, enquanto a câmera traseira de 12 MP captura fotos nítidas e detalhadas. Ideal para quem busca tecnologia de ponta sem comprometer o orçamento.',
        copy: {
            title:'Smartphone que combina desempenho robusto e preço acessível',
            message: 'Descubra o Xiaomi Redmi 8A, o smartphone que combina desempenho robusto e preço acessível. Com uma tela de 6,22 polegadas HD+ e uma bateria de 5.000 mAh, você desfrutará de uma visualização imersiva e longa duração sem se preocupar com recargas frequentes.'
        },price: {
            currency: 'R$',
            was: '1.299,99',
            current: '899,99'
        },
        merchant: {
            seller: 'Magalu'
        },
        media: {
            mainPicture: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwq4tbovwltifa.webp',
            alt: '...',
            showcasePictures: [{
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74o2qt7e',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvck76qrtuqt02',
                caption: '...',
                alt: '...'
            },
            {
                url: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvcjta74phb959',
                caption: '...',
                alt: '...'
            },]
        }
    },]

    const recommendation = {
        title: 'Destaques Imperdíveis! ',
        description: 'Nossa seleção especial foi feita pensando em você, que busca qualidade, estilo e as melhores tendências. Não perca a chance de descobrir o que há de melhor em nossa loja!',
        copy: {
            message: 'Aproveite para encontrar peças exclusivas que combinam elegância e sofisticação, elevando seu visual a um novo patamar. Venha conferir e se surpreender!',
        },
        items: recommendeds,
        color: {
            primary: 'teal',
            secondary: 'dimgray'
        }
    }

    return (
        <div>
            <Hero banners={banners} />

            <Container>

                <Section header={{
                    title: 'Categorias',
                    description: 'Nossa loja virtual oferece uma ampla variedade de produtos, incluindo eletrônicos, roupas e acessórios, e artigos para casa. Explore nossa seleção diversificada para encontrar o que você precisa com qualidade e praticidade.',
                    callToAction: {
                        label: 'Ver Todas',
                        action: '/shop'
                    }
                }} children={<CategoryShowcase categories={categories} />} />

                <Section header={{
                    title: 'Achadinhos do Dia',
                    description: 'Aqui voce encontra as melhores ofertas com muitos descontos e cupons das lojas; Amazon, Magalu, Renner, C&A, Beleza na Web, Época Cosméticos e muitas outras.',
                    callToAction: {
                        label: 'Ver Tudo',
                        action: '/shop'
                    }
                }} children={<Showcase items={items} />} />

                <Section children={<RecommendedPromoCard recommendation={recommendation}/>} />

            </Container>

            <Section children={<PromotedCarosel promos={promos} />} />

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
        </div>
    )
}