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
  const [themeMode, setThemeMode] = useState('auto');
  const windowQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const darkModeChange = useCallback((event) => {
    if (themeMode === 'auto') {
      setDarkMode(event.matches);
    }
  }, [themeMode]);

  useEffect(() => {
    windowQuery.addEventListener("change", darkModeChange);
    return () => {
      windowQuery.removeEventListener("change", darkModeChange);
    };
  }, [windowQuery, darkModeChange]);

  useEffect(() => {
    if (themeMode === 'auto')
      setDarkMode(windowQuery.matches);
  }, [themeMode, windowQuery]);

  const handleThemeChange = (value) => {
    setThemeMode(value)
    if (value === 'light')
      setDarkMode(false)
    else if (value === 'dark')
      setDarkMode(true)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}>

      <Layout style={{ minHeight: '100vh' }}>

        <SimpleHeader themeChangeHandler={handleThemeChange} themeMode={themeMode}/>

        <Content style={{ height: '100%' }}>
          <AppRoutes />
        </Content>

        <SimpleFooter />
      </Layout>
    </ConfigProvider>
  )
}

export default App
