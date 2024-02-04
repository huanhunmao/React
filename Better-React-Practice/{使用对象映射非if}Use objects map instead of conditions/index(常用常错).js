// 定义不同类型账户对应的组件
const UsualAccount = () => <div>普通账户</div>;
const VipAccount = () => <div>VIP账户</div>;
// 添加其他类型账户的组件

// 原始 bad code
// let Component = UsualAccount
// if(type === 'vip'){
//     Component = VipAccount
// }

// 更改为 
const ACCOUNTS_MAP = {
    'vip': VipAccount,
    'usual': UsualAccount
}

const Component = ACCOUNTS_MAP[type]

// 在React组件中使用
const AccountDisplay = () => {
    // 假设type是从父组件传递过来的变量
    return (
      <div>
        <h1>用户账户</h1>
        <Component />
      </div>
    );
  };
  
  // 渲染React组件
  ReactDOM.render(<AccountDisplay />, document.getElementById('root'));