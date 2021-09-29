import { useState } from "react"
import FormInput from "./FormInput"

const Checkout = ({ checkout }) => {
    const emailRegExp = new RegExp('^[^ @]+@[^ @]+.[a-z]{2,4}$')

    const fieldsConfig = {
        name: {
            label: 'Nombre',
            type: 'text',
            rule: new RegExp('^([A-Za-z \u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*)$'),
            message: 'Nombre no válido'
        },
        phone: {
            label: 'Teléfono',
            type: 'text',
            rule: new RegExp('^[0-9+()s]{9,20}$'),
            message: 'Teléfono no válido'
        },
        email: {
            label: 'Email',
            type: 'email',
            rule: emailRegExp,
            message: 'Email no válido'
        },
        repeatemail: {
            label: 'Confirmar email',
            type: 'email',
            rule: emailRegExp,
            sameAs: 'email',
            message: 'La confirmación de email no coincide'
        },
    }

    const defaultValues = Object.keys(fieldsConfig).reduce((prev, key) => ({...prev, [key]: ''}), {})

    const [formValues, setFormValues] = useState(defaultValues)

    const [formErrors, setFormErrors] = useState({})

    const handleInputChange = (event) => {
        const target = event.target

        setFormValues(values => ({ ...values, [target.name]: target.value }))
    }

    const isValidForm = () => {
        let errors = {}
        let isValid = true

        for (const key in fieldsConfig) {
            const field = fieldsConfig[key]

            if (!field.rule.test(formValues[key])) {
                errors[key] = field.message
                isValid = false
            }

            if (field.sameAs && formValues[key] !== formValues[ field.sameAs ]) {
                errors[key] = field.message
                isValid = false
            }
        }

        setFormErrors(errors)

        return isValid
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        if (isValidForm()) {
            const {repeatemail, ...userFormValues} = formValues

            checkout(userFormValues)
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="col-6 col-mx-auto">
                    {
                        Object.keys(fieldsConfig).map(key => 
                            <div key={key} className="mb-3">
                                <FormInput 
                                    name={key} 
                                    type={fieldsConfig[key]['type']}
                                    label={fieldsConfig[key]['label']}
                                    value={formValues[key]} 
                                    error={formErrors[key]} 
                                    handleChange={handleInputChange} />
                            </div>                            
                        )
                    }

                    <input type="submit" value="Comprar" className="btn btn-primary" />
                </div>               
            </div>
        </form>
    )
}

export default Checkout