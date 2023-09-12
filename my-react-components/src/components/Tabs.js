import { useState } from "react"

function Tabs({tabs}){
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            <div className="tabButtons">
                {tabs.map((tab, index) => (
                    <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={activeTab === index ? "active" : ""}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabContent">{tabs[activeTab].content}</div>
        </>
    )
}

export default Tabs