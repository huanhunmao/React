/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useMemo} from 'react';

// 重渲染优化: 当组件频繁重渲染，并且每次重渲染都会进行相同的复杂计算时，使用 useMemo 可以提高性能
function GetExpensiveValue(){
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(1)

    const expensiveValue = useMemo(() => {
        let value = 0 
        for(let i = 0; i < 100; i++){
            value += i
        }

        return value
    },[])

    return (
        <div>
        <div>Expensive Value: {expensiveValue}</div>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <div>Number: {number}</div>
        <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      </div>
    )
}

export default GetExpensiveValue