import { Card, Empty, List } from "antd";
import DisplayItem from "./item/DisplayItem";
import ListItem from "./item/ListItem";

export default function ShowcaseDisplayer({ items, pageSize, itemLayout }) {
    return (
        items ?
            <List
                grid={itemLayout === 'horizontal' ? {
                    gutter: 16,
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 8,
                } : null}
                dataSource={items}
                itemLayout={itemLayout}
                pagination={{ position: 'bottom', align: 'center', defaultPageSize: 20, pageSize: pageSize }}
                renderItem={(item) => (
                    <List.Item>
                        {itemLayout === 'horizontal' ? <DisplayItem item={item} /> : <ListItem item={item} />}
                    </List.Item>
                )}
            /> : <Empty description='Sem Dados' />
    )
}