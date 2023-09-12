import { useState } from "react"

function FormInput({fields, onSubmit}){
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const {value, name}  = e.target

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                fields.map(field => (
                    <>
                    <input 
                    key={field.key}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ''}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                     />
                    <button type="submit">{field.submit}</button>
                    </>
                ))
            }
           
        </form>
    )
}

export default FormInput