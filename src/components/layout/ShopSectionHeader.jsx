import { ArrowDownOutlined, CaretDownOutlined } from "@ant-design/icons"
import { Button, Card, Flex, Image, Layout } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import { Animated } from "react-animated-css"
import { useExtractColor } from "react-extract-colors"

export default function ShopSectionHeader({ header, currentOffer }) {

    const colors = useExtractColor(currentOffer.media.cover)

    return (

        <Flex vertical>
            <Card
                bordered
                style={{
                    borderColor: `${colors.dominantColor}`,
                    borderRadius: '2rem',
                    minHeight: '50vh',
                    overflow: 'hidden',
                    backgroundImage: `url('${currentOffer.media.cover}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
                bodyStyle={{ padding: 0 }}>
            </Card>

            <Flex vertical align='center' style={{ padding: '0 2rem 6rem 2rem' }}>
                <Title className="display-3" level={1} style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: `${colors.dominantColor}`, wordBreak: 'keep-all' }}>{header.title}</Title>
                <Paragraph className="lead" style={{ textAlign: 'center', margin: 0, wordBreak: 'keep-all' }}>{header.description}</Paragraph>
                <Button type="default" shape="round" iconPosition="start" icon={<ArrowDownOutlined />} />
            </Flex>
        </Flex>
    )

}