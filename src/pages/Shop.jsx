import { Divider, Layout, Menu } from "antd";
import Container from "../components/layout/Container";
import Showcase from "../components/showcase/Showcase";
const { Sider } = Layout

export default function Shop({ props }) {

    const category = {
        name: 'Name',
        items: [{
            key: 'shop',
            label: 'Shop'
        }]
    }

    return (
        <Layout>
            <Sider style={{ background: 'colorBgContainer' }} width={200}>
                <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} items={category.items} />
            </Sider>
            <Container>
                <Showcase items={null} />
            </Container>
        </Layout>
    )
}