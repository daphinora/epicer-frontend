import React from 'react';

const MenuTab = ({menu, handleClick}) => {
    return (
        <div onClick={()=> handleClick(menu)} >
            {menu.week.replace(/2020/g, "")}
        </div>
    );
}

export default MenuTab;
