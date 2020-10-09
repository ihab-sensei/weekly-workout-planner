import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export default function Navbar() {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" to = "/" exact>Home</Link>
            </Menu.Item>

            <Menu.Item>
                <Link rel="noopener noreferrer" to = "/board">Board</Link>
            </Menu.Item>
            
            <Menu.Item>
                <Link to = "/about">About</Link>
            </Menu.Item>
        </Menu>
        )

return(
    <Dropdown overlay={menu}>
    <Button type="primary">
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Navigation <DownOutlined />
    </a>
    </Button>
  </Dropdown>
    )
}