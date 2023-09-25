import React,{useState, useMemo} from "react";

// 复杂计算: 当组件进行复杂计算并且渲染时，这些计算不依赖于组件的状态或 props 时，可以使用 useMemo 来存储计算结果
function getValue(list){
    // 假设这是一个非常复杂的计算
    return list.reduce((acc, num) => acc + num, 0)
}

function ComplexCalculation(){
    const [list, setList] = useState([1,2,3,4,5])

    const sum = useMemo(() => {
        return getValue(list)
    })

    return <div>Sum: {sum}</div>
}

export default ComplexCalculation