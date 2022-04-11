import React from 'react';
const TextField = (props) => {
  const { onChange, values, name, id, className, placeholder, type, errors,fieldName } =
    props;
  return (
    <div className={className}>
      <label>Enter {fieldName}</label>
      <input
        className='form-control my-2'
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={onChange}
        value={values}
      />
      {errors[name] && (
        <span className='text-danger'>{errors[name]}</span>
      )}
    </div>
  );
};
export default TextField;
