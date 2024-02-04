import React, { useState, useEffect } from 'react';
import { DEFAULT_ITEMS } from "./const";
import { fetchData } from "./server";

const useItemsList = async () => {
    const [items, setItems] = useState([])
    // 处理逻辑，不依赖React生命周期方法
    // ...
    await fetchData().then((data) => {
        setItems(data);
      });
  
    return {
      items: DEFAULT_ITEMS,
      // 可能还有其他返回值或方法
    };
  };

export default useItemsList