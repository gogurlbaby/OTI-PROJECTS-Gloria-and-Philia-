import React from 'react';
import { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const CompanyMenu = () => {

    const [activeItem, setActiveItem] = useState('')
    
    const handleItemClick = (e, {name}) =>{
        setActiveItem(name)
    }
    return (
        <div>
            <Menu secondary fluid widths={4}>
                <Menu.Item
                    name='About OTI'
                    active={activeItem === 'aboutoti'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Auditorium'
                    active={activeItem === 'auditorium'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Notice Board'
                    active={activeItem === 'notice'}
                    onClick={handleItemClick}
                />
                 <Menu.Item
                    name='Departments'
                    active={activeItem === 'departments'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )
}

export default CompanyMenu;