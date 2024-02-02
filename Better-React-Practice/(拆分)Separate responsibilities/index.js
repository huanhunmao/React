// 原始代码
function ListComponent() {
    // 组件包含 UI渲染
    // 数据获取
    // 删除项的处理逻辑
}

  // 解决方案
  export function ListComponent() {
    // UI模块只负责渲染
  }
  
  export function useList() {
    // Logic/Model模块负责数据获取和删除项的处理逻辑
  }
  
//   比如 
export function fetchDataFromServer(){
    
}
  // Utils模块包含所有需要的工具函数
  