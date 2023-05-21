import React from 'react';
import FormGenerator from '../../Utils/formGenerator';
import { useNavigate } from 'react-router-dom';

import { Field, Button } from '../../Utils/interfaces';


const Login: React.FC = () => {
    const navigate = useNavigate()
    const fields: Field[] = [
        { name: 'username', type: 'text', label: 'Username' },
        { name: 'password', type: 'text', label: 'Password' },
    ];

    const buttons: Button[] = [
        {
            name: 'login',
            func: (formData: { [key: string]: string }) => {
                console.log('login');
                console.log(formData);
            },
        },
        {
            name: 'register',
            func: (formData: {}) => {
                console.log('register');
                navigate('/register')
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

export default Login;
