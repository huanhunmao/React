import { useState } from "react"

function CollapsiblePanel({title, children}){
    const [isOpen, setIsOpen] = useState(false)
    const [arrowUp, setArrowUp] = useState(false)
    const arrowUpPic = ' ↓'
    const arrowDownPic = ' ↑'
    const combineUp = title +  arrowUpPic
    const combineDown = title +  arrowDownPic

    const togglePanel = () => {
        setIsOpen(!isOpen)
        setArrowUp(!isOpen)
    }

    return (
        <div>
            <button onClick={togglePanel}>{arrowUp ? combineUp : combineDown   }</button>
           {isOpen && <div>{children}</div>}
        </div>
    )
}

export default CollapsiblePanel