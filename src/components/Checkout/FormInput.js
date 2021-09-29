const FormInput = ({ name, label, value, error, handleChange, type = 'text', required = true }) =>
    <>
        <label htmlFor={name} className="form-label">{label}</label>
        <input 
            onChange={handleChange} 
            value={value} 
            type={type} 
            name={name} 
            id={name} 
            className={`form-control ${error ? "is-invalid" : ""}`}
            required={required} 
        />
        {error && (<div className="invalid-feedback">{error}</div>)}
    </>

export default FormInput