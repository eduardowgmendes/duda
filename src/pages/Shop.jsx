import { Flex, Form, Layout, Segmented, Select, Space, Spin, Typography } from "antd";
import { AppstoreOutlined, BarsOutlined, LoadingOutlined } from "@ant-design/icons";
import ShowcaseDisplayer from "../components/showcase/ShowcaseDisplayer";
import Container from "../components/layout/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const { Title, Paragraph } = Typography;

import offers from "../local/data/offers/offers.json";

export default function Shop() {

    const { offerId } = useParams();
    const currentOffer = offers.find(offer => offer.id == offerId);

    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]);
    const [pageSize, setPageSize] = useState(20);
    const [loading, setLoading] = useState(false);
    const [itemLayout, setItemLayout] = useState('horizontal');

    useEffect(() => {
        if (currentOffer) {
            setItems(currentOffer.offers)
            setSortedItems(currentOffer.offers)
        }
    }, [currentOffer]);

    const sortBy = (criteria) => {
        setLoading(true);
        switch (criteria) {
            case 'price_descendant':
                sortByPrice(true);
                break;
            case 'price_ascendant':
                sortByPrice(false);
                break;
            default:
                break;
        }
        setLoading(false);
    };

    const sortByPrice = (descendant) => {
        const sorted = [...items].sort((a, b) => {
            const priceA = parseFloat(a.price.current)
            const priceB = parseFloat(b.price.current)
            return descendant ? priceB - priceA : priceA - priceB
        });

        setSortedItems(sorted);
    };

    const setupPageSize = (size) => {setPageSize(size)}

    const changeListView = (view) => {setItemLayout(view)}

    const criterias = [
        {
            value: 'price_ascendant',
            label: 'Menor Preço'
        },
        {
            value: 'price_descendant',
            label: 'Maior Preço'
        },
    ];

    const itemsPerPage = [
        { value: 20, label: '20 por página' },
        { value: 40, label: '40 por página' },
        { value: 60, label: '60 por página' },
        { value: 80, label: '80 por página' },
        { value: 100, label: '100 por página' },
    ];

    if (!currentOffer) {
        return (
            <Layout>
                <Container>
                    <Flex align='center' justify='center' style={{ padding: '8em 0 8em 0', width: '100%' }}>
                        <Spin indicator={<LoadingOutlined spin />} size='large' tip='Carregando Oferta...' />
                    </Flex>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <Container>
                <Flex vertical align='start' justify='center' style={{ padding: '8em 0 2em 0' }}>
                    <Title level={1} style={{ fontFamily: 'Outfit, sans-serif', color: 'steelblue' }}>{currentOffer.title}</Title>
                    <Paragraph type='secondary'>{currentOffer.description}</Paragraph>
                </Flex>

                <Flex align='end' justify='space-between'>
                    <Space size='large'>
                        <Form.Item label='Ordenar'>
                            <Select options={criterias} defaultValue='price_ascendant' onChange={sortBy} />
                        </Form.Item>

                        <Form.Item label='Exibir'>
                            <Select options={itemsPerPage} defaultValue={20} onChange={setupPageSize} />
                        </Form.Item>
                    </Space>

                    <Space size='small'>
                        <Form.Item label='Exibição'>
                            <Segmented 
                                onChange={changeListView}
                                value={itemLayout}
                                options={[
                                    { value: 'vertical', icon: <BarsOutlined /> },
                                    { value: 'horizontal', icon: <AppstoreOutlined /> },
                                ]} 
                            />
                        </Form.Item>
                    </Space>
                </Flex>

                <Flex align='center' justify='stretch' style={{ padding: '0 0 8em 0', width: '100%' }}>
                    <Spin 
                        spinning={loading} 
                        indicator={<LoadingOutlined spin />} 
                        size='large' 
                        tip='Carregando Dados...'>
                        <ShowcaseDisplayer items={sortedItems.length > 0 ? sortedItems : items} pageSize={pageSize} itemLayout={itemLayout} />
                    </Spin>
                </Flex>
            </Container>
        </Layout>
    );
}
