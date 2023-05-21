import React from 'react';
import FormGenerator from '../../Utils/formGenerator';
import { useNavigate } from 'react-router-dom';
import { Field, Button } from '../../Utils/interfaces';



const Signup: React.FC = () => {
    const navigate = useNavigate()
    const fields: Field[] = [
        { name: 'username', type: 'text', label: 'Username' },
        { name: 'password', type: 'text', label: 'Password' },
        { name: 'fullname', type: 'text', label: 'Fullname' },
        { name: 'email', type: 'email', label: 'Email' },
    ];

    const buttons: Button[] = [
        {
            name: 'Sign Up',
            func: (formData: { [key: string]: string }) => {
                console.log('Signed Up');
                console.log(formData);
                navigate('/')
            },
        },
        {
            name: 'Cancel',
            func: (formData: {}) => {
                console.log('back to login');
                navigate('/')
            },
        },
    ];

    return (
        <div className="h-screen w-full max-w-xs mx-auto mt-10">
            <h1 className="text-5xl font-bold text-center mb-4 text-slate-200">WhatsupBot</h1>
            <FormGenerator fields={fields} buttons={buttons} />
        </div>
    );
};

export default Signup;
