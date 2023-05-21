import React, { useState, ChangeEvent } from 'react';
import { Field, Button } from './interfaces';


interface FormGeneratorProps {
    fields: Field[];
    buttons: Button[];
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ fields, buttons }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleButtonClick = (buttonFunc: (formData: { [key: string]: string }) => void) => {
        buttonFunc(formData);
    };

    return (
        <form >
            {fields.map((field) => (
                <div key={field.name} className="p-4">
                    <label className='text-slate-200' htmlFor={field.name}>{field.label}</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                    />
                </div>
            ))}
            <div className="flex justify-center">
                {buttons.map((button) => (
                    <button
                        key={button.name}
                        type="button"
                        onClick={() => handleButtonClick(button.func)}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-bold m-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {button.name}
                    </button>
                ))}
            </div>
        </form>
    );
};

export default FormGenerator;
