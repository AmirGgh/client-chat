
const Sidebar = () => {
    return (
        <div className="w-1/4 p-4 sticky inset-y-0 left-0 ">
            <h1 className="text-xl font-bold mb-4 text-gray-50">Channels</h1>
            <ul className="space-y-1">
                <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-gray-50">MyBot</span>
                </li>
                <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                    <span className="text-gray-50">Connections</span>
                </li>
                <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                    <span className="text-gray-50">Setting</span>
                </li>
                <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                    <span className="text-gray-50">Logout</span>
                </li>
            </ul>
        </div>

    );
};

export default Sidebar;
