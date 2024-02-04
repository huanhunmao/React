// 将不需要依赖React组件生命周期方法的逻辑与组件本身分离，可以提高代码清晰度
// 原始代码
import React, { useState, useEffect } from 'react';

function ItemList() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      // 这里可能有一些依赖生命周期的逻辑
      // ...
  
      // 通过API、服务端或其他逻辑获取数据
      fetchData().then((data) => {
        setItems(data);
      });
    }, []); // 仅在组件挂载时执行
  
    return (
      <div>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  }

export default ItemList