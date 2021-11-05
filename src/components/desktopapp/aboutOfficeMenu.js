import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useState } from 'react';

const AboutMenu = () => {
    const [activeItem, setActiveItem] = useState('')
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
    return (
        <Menu secondary vertical borderless>
            <Menu.Item>
                <Menu.Header>OTI Products</Menu.Header>

                <Menu.Menu>
                    <Menu.Item
                        name='Organic White Fonio'
                        active={activeItem === 'fonio'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Organic Ivory Shea Butter'
                        active={activeItem === 'sheabutter'}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>CRM Systems</Menu.Header>

                <Menu.Menu>
                    <Menu.Item
                        name='Trello'
                        active={activeItem === 'trello'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Zoha'
                        active={activeItem === 'zoha'}
                        onClick={handleItemClick}
                    />
                    {/* <Menu.Item
                        name='php'
                        active={activeItem === 'php'}
                        onClick={handleItemClick}
                    /> */}
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Export System</Menu.Header>

                <Menu.Menu>
                    <Menu.Item
                        name='Organic White Fonio'
                        active={activeItem === 'fonio'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='Organic Yellow Shea Butter'
                        active={activeItem === 'sheabutter'}
                        onClick={handleItemClick}
                    />
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Header>Customer Support</Menu.Header>

                <Menu.Menu>
                    <Menu.Item
                        name='email'
                        active={activeItem === 'email'}
                        onClick={handleItemClick}
                    >
                        E-mail Support
            </Menu.Item>

                    <Menu.Item
                        name='livechat'
                        active={activeItem === 'livechat'}
                        onClick={handleItemClick}
                    >
                        Live Chat
            </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Menu>
    )
}

export default AboutMenu;