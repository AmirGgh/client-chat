import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-full max-w-xs mx-auto mt-10">
            <h1 className="text-xl font-bold text-center mb-4">ChatAI</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="**********"
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Login
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>

                </div>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </form >
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 Amir Gez. All rights reserved.
            </p>
        </div >
    )
}

export default Login
