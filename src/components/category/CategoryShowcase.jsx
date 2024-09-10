import { Card, Col, Row, Typography } from "antd";
import { useExtractColor } from "react-extract-colors"
const { Text, Paragraph, Title } = Typography

export default function CategoryShowcase({ categories }) {
    return (
        <Row gutter={[8, 8]}>
            {categories.map((category, index) => (
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{ span: 4 }}>
                    <Card bordered hoverable key={index} size='small' cover={<img src={category.media.background} alt="..." />}
                        bodyStyle={{ padding: 0 }}
                        style={{ 
                            overflow: 'hidden', 
                            marginBottom: 16,
                            borderColor: `${useExtractColor(category.media.background).dominantColor}` }}></Card>

                        <Paragraph 
                            ellipsis={{ rows: 2, expandable: false, symbol: '...' }} 
                            style={{ 
                                marginBottom: 32,
                                userSelect: 'none', 
                                lineHeight: 1, 
                                color: `${useExtractColor(category.media.background).darkerColor}`,
                                textAlign: 'center', 
                                fontFamily: 'Outfit, sans-serif', 
                                fontWeight: 'bold', 
                                wordBreak: 'keep-all' }}>{category.name}</Paragraph>

                </Col>
            ))
            }
        </Row >
    )
}