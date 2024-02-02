<> 
当我们使用React处理表单输入时，通常会为每个输入字段定义一个处理器（handler）函数来处理该字段值的变化。在原始代码中，每个输入字段都有一个独立的处理器函数
</> 

{/* <>
会导致冗余的代码，因为每个处理器都在重复相似的逻辑
</> */}

// 原始代码
const handleNameChange = (e) => {
    // 获取输入框的新值
    const newName = e.target.value;
    // 使用 setUser 更新 user 对象中的 name 字段
    setUser((prevUser) => ({
      ...prevUser,
      name: newName,
    }));
  };

const handleSurnameChange = (e) => {
 // 获取输入框的新值
 const newSurname = e.target.value;
 // 使用 setUser 更新 user 对象中的 surname 字段
 setUser((prevUser) => ({
   ...prevUser,
   surname: newSurname,
 }));
}

const handleAddressesChange = (e) => {
// 获取输入框的新值
const newAddress = e.target.value;
// 使用 setUser 更新 user 对象中的 address 字段
setUser((prevUser) => ({
  ...prevUser,
  address: newAddress,
}));
}

// 在组件中使用这些处理器
return (
    <>
      <input value={user.name} onChange={handleNameChange} />
      <input value={user.surname} onChange={handleSurnameChange} />
      <input value={user.address} onChange={handleAddressesChange} />
    </>
  );