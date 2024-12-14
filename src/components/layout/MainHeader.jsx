import { Flex } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"

export default function MainHeader({ header }) {

    return (
        <Flex vertical align='center' justify='end' style={{padding: '1rem 4rem 4rem 4rem', margin: '0 0 2rem 0'}}>
            <Title className="display-4" level={1} style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', color: `${header.colors ? header.colors.title : 'steelblue'}`, wordBreak: 'keep-all' }}>{header.title}</Title>
            <Paragraph className="sublead" style={{ textAlign: 'center', marginBottom: 0 }}>{header.description}</Paragraph>
        </Flex>
    )

}