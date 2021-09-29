const FormInput = ({ name, label, value, error, handleChange, type = 'text', required = true, disabled = false }) =>
    <>
        <label htmlFor={name} className="form-label">{label}</label>
        <input 
            onChange={handleChange} 
            value={value} 
            type={type} 
            name={name} 
            id={name} 
            className={`form-control ${error ? "is-invalid" : ""}`}
            disabled={disabled}
            required={required} 
        />
        {error && (<div className="invalid-feedback">{error}</div>)}
    </>

export default FormInput