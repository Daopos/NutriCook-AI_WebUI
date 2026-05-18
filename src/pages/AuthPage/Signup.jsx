const Signup = () => {
    return (
            <div className="w-full max-w-md bg-white/50 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-blue/100">
                
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[var(--primary-dark)]">
                        Join Nourish
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Access your kitchen dashboard
                    </p>
                </div>

                <form className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-2">
                        <label 
                            htmlFor="email" 
                            className="text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label 
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="px-4 py-3 rounded-xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-orange-400 transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-3 bg-[var(--primary-green)]  text-white font-semibold py-3 rounded-xl transition shadow-lg hover:shadow-[var(--light-green)]"
                    >
                        Access Kitchen
                    </button>
                </form>

            </div>
    );
};

export default Signup;