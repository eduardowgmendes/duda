import Container from "../components/layout/Container";
import SectionHeader from "../components/layout/SectionHeader";
import Stores from "../components/showcase/Stores";
import partners from "../local/data/partners.json"

export default function StoresPage(){
    return(
        <Container>
            <SectionHeader header={{
                    title: 'Lojas',
                    description: 'Descubra a seleção de lojas parceiras cuidadosamente escolhidas para oferecer os melhores produtos e serviços. Trabalhamos com marcas renomadas e confiáveis, garantindo a qualidade, variedade e ótimos preços para você.',
                    callToAction: null
                }} children={<Stores stores={partners} />} />
        </Container>
    )
}