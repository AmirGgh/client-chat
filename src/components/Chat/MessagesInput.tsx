import React, { useRef, useState } from 'react';

const MessagesInput = ({ send }: { send: (val: string) => void }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && value.length > 0) {
            send(value);
            setValue('');
        }
    };

    const handleSend = () => {
        send(value);
        setValue('');
    };

    return (
        <div className="flex flex-col ml-3">
            <div className="bg-slate-200 p-4 rounded-full">
                <input
                    ref={inputRef}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="type your message.."
                    value={value}
                    className="bg-slate-200 w-11/12 text-gray-700"
                />
                {value.length > 0 && <button
                    onClick={handleSend}
                    className="w-1/12 bg-slate-400 text-white rounded-full"
                >
                    send
                </button>}
            </div>
        </div>
    );
};

export default MessagesInput;
