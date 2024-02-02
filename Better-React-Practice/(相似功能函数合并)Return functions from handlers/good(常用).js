<>
为了减少冗余，可以使用函数柯里化（currying）的方式，将所有输入变化的处理逻辑统一到一个函数中
</>

// 解决方案
const handleInputChange = field => {
    return e => {
        setUser(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }
}

// 在组件中使用这个统一的处理器
return (
    <>
      <input value={user.name} onChange={handleInputChange("name")} />
      <input value={user.surname} onChange={handleInputChange("surname")} />
      <input value={user.address} onChange={handleInputChange("address")} />

      {JSON.stringify(user)}
    </>
  );

  <>
  创建了一个名为handleInputChange的通用处理器函数，该函数接受一个字段名作为参数，并返回一个处理输入变化的函数。
  在组件中，我们通过传递不同的字段名来使用这个通用的处理器函数，从而避免了重复编写类似的处理器逻辑。这使得代码更加简洁和可维护
  </>