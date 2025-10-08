import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Portal } from './portal';

function List({ mockdata }) {
    console.log('mockdata', mockdata);
    const [menuData, setMenuData] = useState([...mockdata]);
    const [firstLevelSubMenu, setFirstLevelSubMenu] = useState({});
    const handleMenuToggle = (element,itemId) => {
        console.dir('item/', itemId, menuData);
        const newState = [...menuData];
        newState.forEach(item => {
            if(item.id === itemId) {
                item['isOpen'] = !item['isOpen'];
                item.position = {
                    x: element.currentTarget.clientWidth,
                    y: element.currentTarget.clientHeight
                }
            } else {
                item['isOpen'] = false;
            }
        });
        setMenuData(newState);
        const subMenu = newState.find((eachMenu => eachMenu.isOpen));
        const subMenuInfo = {
            subMenu:subMenu?.data,
            position: subMenu?.position
        }
        setFirstLevelSubMenu(subMenuInfo);
    };

    const { subMenu, position } = firstLevelSubMenu;
    return (<div className='parent'>
        <ListGroup>
            {menuData.map(item => <ListGroup.Item onClick={(e) => handleMenuToggle(e,item.id)} key={item.id}>{item.name}</ListGroup.Item>)}
        </ListGroup>
        <Portal>
            <ListGroup className="primary-submenu" style={{
                left: position?.x,
                top: position?.y,
            }}>
            {subMenu?.map(item => <ListGroup.Item onClick={() => handleMenuToggle(item.id)} key={item.id}>{item.name}</ListGroup.Item>)}
        </ListGroup>
        </Portal>
    </div>
    );
}

export default List;