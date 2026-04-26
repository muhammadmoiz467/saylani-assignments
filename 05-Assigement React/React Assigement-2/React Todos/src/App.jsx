import './App.scss'
import "bootstrap/dist/js/bootstrap.bundle"
import Frontend from './pages/Frontend'
import { Routes } from 'react-router-dom'
import IndexRoutes from "./pages/Routes"
import { ConfigProvider } from "antd"

function App() {

  return (
    <>
      <ConfigProvider theme={{token: {colorPrimary: '#1d3557' }, components: {Button: {controlOutlineWidth: 0}} }} >
        <IndexRoutes />
        </ConfigProvider>
    </>
  )
}

export default App
