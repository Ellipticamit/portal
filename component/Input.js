import {useState} from 'react';

function Input({
  label,
  iconname,
  name,
  type,
  placeholder,
  required = false,
  onValueChange,
}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onValueChange(e.target.name, e.target.value);
  };

  return (
    <div className='input-new-group'>
      <label htmlFor='username'>
        {label}
        {required && <span className='required'>*</span>}
      </label>
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
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Input;
