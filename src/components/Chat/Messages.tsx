
const Messages = ({ messages }: { messages: string[] }) => {
    return (

        <div className="flex-1 p-4 overflow-y-auto ">
            <ul className="space-y-4">
                {
                    messages.map((message, index) => {
                        return (
                            <li className="flex items-end" key={index}>
                                <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
                                    <span className="text-gray-700 font-bold ">JD</span>
                                </div>
                                <div className="flex flex-col ml-3">
                                    <div className="bg-gray-100 p-2 rounded-lg rounded-bl-none">
                                        <p className="text-gray-800">{message}</p>
                                    </div>
                                    <p className="text-gray-800 text-xs mt-1">10:00am</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )
}

export default Messages

