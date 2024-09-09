import { Col, Row } from "antd";

export default function Container({ children }) {
    return (
        <Row>
            <Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20} offset={2}>
                { children }
            </Col>
        </Row>
    )
}