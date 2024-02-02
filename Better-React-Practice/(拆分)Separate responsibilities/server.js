// server.js - server 模块
export function fetchDataFromServer() {
    // 模拟从服务器获取数据的函数
    return Promise.resolve([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      // ... more items
    ]);
  }
  
  export function deleteItemFromServer(itemId) {
    // 模拟从服务器删除数据的函数
    // 实际项目中需要根据后端接口来实现
    console.log(`Item with id ${itemId} deleted from server.`);
  }
  