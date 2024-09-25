import './App.css'
import { Layout } from 'antd'
import AppRoutes from './AppRoutes'
import SimpleHeader from './components/SimpleHeader'
import { Content } from 'antd/es/layout/layout'
import SimpleFooter from './components/SimpleFooter'
import SubscriptionReminder from './components/promotionals/SubscriptionReminder'
import Container from './components/layout/Container'

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <SimpleHeader />

      <Content style={{ height: '100%' }}>
        <AppRoutes />
      </Content>

      <SimpleFooter />
    </Layout>
  )
}

export default App
