import { useState, useEffect } from "react"

function SortableTable({data, sortFunction}){
    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
        setSortedData(data)
    }, [data])

    const handleSort = () => {
        const newData = [...data] 
        newData.sort(sortFunction)

        setSortedData(newData)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={handleSort}>Column 1</th>
                    <th onClick={handleSort}>Column 2</th>
                    <th onClick={handleSort}>Column 3</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.column1}</td>
                            <td>{item.column2}</td>
                            <td>{item.column3}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default SortableTable