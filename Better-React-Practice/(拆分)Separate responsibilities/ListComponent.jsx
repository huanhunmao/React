// ListComponent.jsx - UI 模块
import React from 'react';

export function ListComponent({items}){
    return (
        <ul>
            {
                items.map(item => {
                    <li key={item.id}>
                        {item.name}
                    </li>
                })
            }
        </ul>
    )
}