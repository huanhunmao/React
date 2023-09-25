import React, {useState,  useMemo} from "react";


// 引用相等性: 当传递对象作为 props 到子组件时，可以使用 useMemo 来确保对象的引用相等性，防止子组件不必要的重渲染
const ChildComponent = React.memo(({obj, count}) => {
    console.log('ChildComponent rendered!');
    return <div>{obj.key}: {count}</div>
})

function ChildComponentRender(){
    const [count, setCount] = useState(0)

    const obj = useMemo(() => {
        return {key: 'value'}
    },[])

    return <div>
        <ChildComponent obj={obj} count={count} />
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
}

export default ChildComponentRender