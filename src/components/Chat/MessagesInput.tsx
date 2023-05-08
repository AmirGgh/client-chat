import { useState } from "react"

const MessagesInput = ({ send }: { send: (val: string) => void }) => {

    const [value, setValue] = useState<string>("")

    return (
        <div className="flex flex-col ml-3  ">
            <div className="bg-slate-200 p-4 rounded-full ">
                <input onChange={(e) => setValue(e.target.value)} placeholder="type your message.." value={value} className="bg-slate-200 w-11/12 text-gray-700" />
                <button className="w-1/12 bg-slate-400 text-white rounded-full " onClick={() => send(value)}>send</button>
            </div>
        </div>
    )
}

export default MessagesInput
