function Input({label, iconname, name, type, placeholder}) {
  return (
    <div className='input-new-group'>
      <label htmlFor='username'>{label}</label>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <i className={`la la-${iconname}`}></i>
          </span>
        </div>
        <input
          className='form-control'
          name={name}
          id={label}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
}

export default Input;
