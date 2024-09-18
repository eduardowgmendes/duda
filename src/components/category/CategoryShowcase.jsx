import { Card, Col, Row, Typography } from "antd";
import { useExtractColor } from "react-extract-colors"
const {  Paragraph } = Typography

export default function CategoryShowcase({ categories }) {
    
    return (
        <Row gutter={[8, 8]}>
            {categories.map((category, index) => (
                <Col xs={{ span: 8 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 3 }}>
                    <Card bordered hoverable key={index} size='small' cover={<img src={category.media.background} alt="..." />}
                        bodyStyle={{ padding: 0 }}
                        style={{ 
                            overflow: 'hidden', 
                            marginBottom: 8,
                            borderColor: `${useExtractColor(category.media.background).dominantColor}` }}></Card>

                        <Paragraph 
                            className='body-2'
                            ellipsis={{ rows: 2, expandable: false, symbol: '...' }} 
                            style={{ 
                                marginBottom: 16,
                                userSelect: 'none', 
                                lineHeight: 1, 
                                color: `${useExtractColor(category.media.background).darkerColor}`,
                                textAlign: 'center', 
                                fontFamily: 'Outfit, sans-serif', 
                                fontWeight: 'bold', 
                                wordBreak: 'keep-all' }}>{category.name}</Paragraph>

                </Col>
            ))}
        </Row >
    )
}