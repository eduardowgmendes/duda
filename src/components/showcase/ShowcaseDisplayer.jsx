import { Empty, List } from "antd";
import DisplayItem from "./item/DisplayItem";

export default function ShowcaseDisplayer({items, pageSize}){
    return (
        items ? 
        <List 
            grid={{
                gutter: 16,
                xs: 2,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 8,
            }}
            dataSource={items}
            pagination={{position: 'bottom', align: 'center', pageSize: pageSize}}
            renderItem={(item) => (
                <List.Item>
                    <DisplayItem item={item}/>
                </List.Item>
            )} 
            /> : <Empty description='Sem Items' />
    )
}