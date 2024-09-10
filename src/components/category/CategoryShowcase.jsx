import { Avatar, Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
import { useExtractColor } from "react-extract-colors"
const { Text, Paragraph, Title } = Typography

export default function CategoryShowcase({ categories }) {
    return (
        <Row gutter={[8, 8]}>
            {categories.map((category, index) => (
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{span: 4}}>
                    <Card bordered hoverable key={index} size='large' bodyStyle={{ padding: 0 }} style={{ height: 300, overflow: 'hidden', borderColor: `${useExtractColor(category.media.background).dominantColor}` }}>
                        <Flex vertical align="center" justify="end"
                            style={{ height: 300, padding: 16, background: `linear-gradient(0deg, ${useExtractColor(category.media.background).dominantColor} 10%, rgba(250, 250, 250, 0) 50%), url('${category.media.background}')`,  backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <Paragraph  style={{ color: `${category.color.primary}`, userSelect: 'none', lineHeight: 1, textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', fontSize: '1.2rem', wordBreak: 'keep-all' }}>{category.name}</Paragraph>
                        </Flex>
                    </Card>
                </Col>
            ))
            }
        </Row >
    )
}