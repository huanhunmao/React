import { useState } from "react"

function DatePicker(){
    const [selectedDate, setSelectedDate] = useState()

    const handleDateChange = e => {
        setSelectedDate(e.target.value)
    }

    return (
        <div>
            <input
            type="datetime-local"
            value={selectedDate}
            onChange={handleDateChange}
            />
        </div>
    )
}

export default DatePicker