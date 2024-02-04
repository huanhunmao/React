// fetchData函数示例 
export const fetchData = () => {
    // 模拟异步获取数据的过程
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([6, 7, 8, 9, 10]);
      }, 1000);
    });
  };