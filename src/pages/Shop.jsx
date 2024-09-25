import { Flex, Form, Layout, Segmented, Select, Space, Typography } from "antd";
import items from "../local/data/mock/products-mock.json"
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import ShowcaseDisplayer from "../components/showcase/ShowcaseDisplayer";
import Container from "../components/layout/Container";
import { useState } from "react";

const { Title, Paragraph, Link } = Typography

export default function Shop() {

    const [sortedItems, setSortedItems] = useState(items)
    const [pageSize, setPageSize] = useState(20)

    const sortBy = (criteria) => {
        switch (criteria) {
            case 'price_descendant':
                sortByPrice(true)
                break;
            case 'price_ascendant':
                sortByPrice(false)
                break;
        }
    }

    const sortByPrice = (ascendant) => {
        const sortedItems = [...items].sort((a, b) => parseFloat(a.price.current) - parseFloat(b.price.current))
        if (ascendant) {
            setSortedItems(sortedItems)
        } else {
            setSortedItems(sortedItems.reverse())
        }
    }

    const paginate = (pageSize) => {
        setPageSize(pageSize)
    }

    const criterias = [{
        value: 'price_ascendant',
        label: 'Maior Preço'
    }, {
        value: 'price_descendant',
        label: 'Menor Preço'
    },]

    const itemsPerPage = [{
        value: 20,
        label: '20 por página'
    }, {
        value: 40,
        label: '40 por página'
    }, {
        value: 60,
        label: '60 por página'
    }, {
        value: 80,
        label: '80 por página'
    }, {
        value: 100,
        label: '100 por página'
    },]

    return (
        <Layout>
            <Container>
                <Flex align='center' justify='start' style={{ padding: '2em 0 4em 0' }}>
                    <Title level={2} style={{ margin: 0 }}>Categoria</Title>
                </Flex>

                <Space size='large' style={{ width: '100%' }}>

                    <Form.Item label='Ordernar'>
                        <Select options={criterias} defaultValue='price_ascendant' onChange={sortBy} />
                    </Form.Item>

                    <Form.Item label='Exibir'>
                        <Select options={itemsPerPage} defaultValue={20} onChange={paginate} />
                    </Form.Item>

                    <Form.Item label='Exibição'>
                        <Segmented options={[{
                            value: 'List',
                            icon: <BarsOutlined />
                        }, {
                            value: 'Grid',
                            icon: <AppstoreOutlined />
                        },]} />
                    </Form.Item>
                </Space>

                <ShowcaseDisplayer items={sortedItems} pageSize={pageSize} />

            </Container>
        </Layout>
    )
}