import './App.css'
import { ConfigProvider, Layout, Segmented, theme } from 'antd'
import AppRoutes from './AppRoutes'
import SimpleHeader from './components/SimpleHeader'
import { Content } from 'antd/es/layout/layout'
import SimpleFooter from './components/SimpleFooter'
import SubscriptionReminder from './components/promotionals/SubscriptionReminder'
import Container from './components/layout/Container'
import { useCallback, useEffect, useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = (value) => {
    setDarkMode(value === 'dark')
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}>

      <Layout style={{ minHeight: '100vh' }}>

        <SimpleHeader themeChangeHandler={handleThemeChange} themeMode={darkMode ? 'dark' : 'light'} />

        <Content style={{ height: '100%' }}>
          <AppRoutes />
        </Content>

        <SimpleFooter />
      </Layout>
    </ConfigProvider>
  )
}

export default App
