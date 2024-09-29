import { Col, Empty, Flex, Row } from "antd";

export default function GridSection({ mainChildSection, secondaryChildSection, tertiaryChildSection }) {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 16 }}>
                <Flex align='center' justify='center' wrap>
                    {mainChildSection}
                </Flex>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} xxl={{ span: 8 }} >
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 24 }}>
                        <Flex vertical align='center' justify='center'>
                            {secondaryChildSection == null ? <Empty description='No Section Available' /> : secondaryChildSection}
                        </Flex>
                    </Col>

                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }} xxl={{ span: 24 }}>
                        <Flex vertical align='center' justify='center'>
                            {tertiaryChildSection == null ? <Empty description='No Section Available' /> : tertiaryChildSection}
                        </Flex>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}