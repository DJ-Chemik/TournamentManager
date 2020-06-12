import React from 'react';

const useFormInput = (initialValue: any) => {
  
    const [value, setValue] = React.useState(initialValue);

    const onChange = (e: any) => {
        setValue(e.target.value);
    };


    return{
        value,
        onChange
    };
}

export default useFormInput;