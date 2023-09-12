
import {useState} from 'react'
function Counter({Increment, Decrement, constValue}){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + constValue)
    }

    const decrement = () => {
        setCount(count - constValue)
    }
 
    return (
        <div>
            <p>{count}</p>
            <button  onClick={increment}>{Increment}</button>
            <button  onClick={decrement}>{Decrement}</button>
        </div>
    )
}

export default Counter