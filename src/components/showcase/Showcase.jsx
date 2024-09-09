import { Col, Empty, Row } from "antd";
import DisplayItem from "./item/DisplayItem";

export default function Showcase({ items }) {
    
    return (
        <Row gutter={[8, 8]}>
            {items ? items.map((item, index) => (
                <Col key={index} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 4 }} xl={{ span: 3 }}>
                    <DisplayItem item={item} />
                </Col>
            )) : <Empty description='Não há items para mostrar' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '75vh'
            }} />}
        </Row>
    )
}