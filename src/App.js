// import logo from './logo.svg'
import './App.scss'
// import styles from './App.module.scss'
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home/index.tsx'
import Table from './pages/table/index.tsx'
import MenuBar from './componets/MenuBar/index'
import { Menu } from 'antd'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu

function App() {
    return (
        <div className='App'>
            {/* <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
            >
                <SubMenu
                    key='sub1'
                    icon={<MailOutlined />}
                    title='Navigation One'
                >
                    <Menu.ItemGroup key='g1' title='Item 1'>
                        <Menu.Item key='home'>
                            <Link to='/'>Option 1</Link>
                        </Menu.Item>
                        <Menu.Item key='table'>Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key='g2' title='Item 2'>
                        <Menu.Item key='3'>Option 3</Menu.Item>
                        <Menu.Item key='4'>Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu> */}
            <HashRouter>
                <Route path='/' component={Home} />
                <Route path='/table' component={Table} />
            </HashRouter>
        </div>
        /* <header className='App-header'>
                <div className={styles.red}>111</div>
                <img className='App-logo' src={logo} alt='logo' />
            </header> */
    )
}

export default App
