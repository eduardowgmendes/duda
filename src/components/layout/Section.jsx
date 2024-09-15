import { Empty } from "antd";
import Header from "./Header";

export default function Section({ header, children }) {

    return (
        <section style={{minHeight: '25vh', padding: '8px 0 64px 0'}}>
            {header ? <Header header={header} /> : null}
            {children || <Empty description='Nada para exibir...' style={{display: "flex", flexDirection: 'column', alignItems: "center", backgroundColor: ' #ebebeb ', border: '1px solid  #f7f7f7', justifyContent: "center", height: "50vh"}} />}
        </section>
    )
}