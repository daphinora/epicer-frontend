import React from 'react';

// Like the lonely uncle. No children, but sibling to MenuCalendar and child of MenuPage!

const MenuTab = ({menu, handleClick}) => {
    return (
        <div onClick={()=> handleClick(menu)} >
            {menu.week.replace(/2020/g, "")}
        </div>
    );
}

export default MenuTab;
