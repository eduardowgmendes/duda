import './App.css'
import { ConfigProvider, Flex, Layout, Spin, theme } from 'antd'
import AppRoutes from './AppRoutes'
import SimpleHeader from './components/SimpleHeader'
import { Content } from 'antd/es/layout/layout'
import SimpleFooter from './components/SimpleFooter'
import { useEffect, useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(()=>{
    const savedTheme = localStorage.getItem('themeMode')
    if(savedTheme){
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  const handleThemeChange = (value) => {
    const isDarkMode = value === 'dark'
    setDarkMode(value === 'dark')
    localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light')
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
        <SimpleFooter themeMode={darkMode ? 'dark' : 'light'}/>
      </Layout>
  
    </ConfigProvider>
  )
}

export default App
