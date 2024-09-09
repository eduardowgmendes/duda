import './App.css'
import { Divider, Layout } from 'antd'
import AppRoutes from './AppRoutes'
import SimpleHeader from './components/SimpleHeader'
import { Content } from 'antd/es/layout/layout'
import SimpleFooter from './components/SimpleFooter'
import Reminder from './components/promotionals/Reminder'
import Container from './components/layout/Container'

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <SimpleHeader />

      <Content style={{ height: '100%' }}>
        <AppRoutes />
        <Container>
          <Reminder />
        </Container>
      </Content>
          <Divider />

      <SimpleFooter />
    </Layout>
  )
}

export default App
