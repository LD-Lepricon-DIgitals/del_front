import {useState} from "react";

function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (name, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return { formValues, handleInputChange };
}

export default useForm;