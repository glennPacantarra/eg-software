import "./styles/Login.css";
import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Cashier;
    console.log({
      username,
      password,
    });

    if (username && password) {
      navigate("/cashier");
    }
    // Connect your authentication API here
  };

  const handleGoogleLogin = () => {
    // Integrate Google OAuth here
    console.log("Google login clicked");
  };
  return (
    <main className="min-h-screen w-full bg-white p-3 md:p-5">
      <div className="mx-auto grid min-h-[calc(100vh-40px)] max-w-[1600px] grid-cols-1 overflow-hidden rounded-2xl bg-white md:grid-cols-2">
        {/* LEFT BRANDING PANEL */}
        <section className="relative flex min-h-120 items-center overflow-hidden rounded-2xl bg-[#14213e] px-9 py-12 md:min-h-full md:px-10 lg:px-12 ">
          {/* Decorative helmet artwork */}
          <div
            className="pointer-events-none absolute -right-28 top-1/2 h-[85%] transform -scale-x-100 w-[75%] -translate-y-1/2 bg-contain bg-right bg-no-repeat opacity-50"
            style={{
              backgroundImage: "url('../../resources/knight.png')",
            }}
          />

          {/* Branding content */}
          <div className="relative z-10 w-full">
            {/* EG Logo */}
            <div className="mb-7 flex items-center">
              <div className="relative flex h-28 w-36 items-center">
                <span className=" initial-logo absolute left-0  text-[150px] leading-none tracking-[-18px] text-white">
                  E
                </span>
                <span className=" initial-logo absolute left-12.5  text-[150px] leading-none text-white">
                  G
                </span>
              </div>
            </div>

            {/* Brand name */}
            <h1 className=" initial-logo   tracking-[0.08em] text-[#91cce6] md:text-4xl">
              EmelGabb
            </h1>

            <h2 className=" emelgabb-text  text-2xl  tracking-[0.06em] text-[#91cce6] md:text-3xl">
              Trading System
            </h2>

            {/* Tagline */}
            <p className="mt-3 text-[10px] tracking-wide text-gray-400 md:text-xs">
              Smarter Trading · Precise Tracking · Better Profits.
            </p>
          </div>
        </section>

        {/* RIGHT LOGIN PANEL */}
        <section className="flex min-h-155 items-center justify-center px-7 py-12 md:min-h-full md:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-107.5">
            {/* Header */}
            <div className="mb-9">
              <h2 className="text-3xl font-bold tracking-wide text-[#26334f]">
                Welcome back
              </h2>

              <p className="mt-1 text-[11px] tracking-wide text-gray-500">
                Enter your details to access your account
              </p>
            </div>
            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Email/ Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="h-10.75 w-full rounded-full border border-[#b9dff5] bg-white px-5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#14213e] focus:ring-2 focus:ring-[#14213e]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-800"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-10.75 w-full rounded-full border border-[#b9dff5] bg-white px-5 pr-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#14213e] focus:ring-2 focus:ring-[#14213e]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    aria-label="Toggle password visibility"
                  >
                    {/* {showPassword ? <EyeOff size={17} /> : <Eye size={17} />} */}
                  </button>
                </div>

                <div className="mt-5 text-right">
                  <a
                    href="/forgot-password"
                    className="text-xs font-medium tracking-wide text-[#e7ac32] transition hover:text-[#bd8520]"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="h-10.5 w-full rounded-full bg-[#14213e] text-sm font-medium text-white transition duration-200 hover:bg-[#243657] active:scale-[0.99]"
              >
                Login
              </button>
            </form>
            {/* Google Sign In */}
            <div className="mt-16">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex h-10.75 w-full items-center justify-center gap-8 rounded-full border border-[#c8e5f5] bg-white text-sm text-gray-500  hover:bg-[#8ECAE6] transition"
              >
                {/* Google Icon */}
                <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-2 4.6-4.2 6v5h6.8c4-3.7 6-8.7 6-14.7Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44c5.4 0 10-1.8 13.3-4.8l-6.5-5c-1.8 1.2-4.1 2-6.8 2-5.2 0-9.7-3.5-11.3-8.2H5.9v5.2A20 20 0 0 0 24 44Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.7 28a12 12 0 0 1 0-7.9v-5.2H5.9a20 20 0 0 0 0 18.3l6.8-5.2Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 11.9c2.9 0 5.5 1 7.5 3l5.9-5.9C33.8 5.8 29.2 4 24 4A20 20 0 0 0 5.9 14.9l6.8 5.2c1.6-4.7 6.1-8.2 11.3-8.2Z"
                  />
                </svg>

                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className=" pt-2 mt-3">
        <div>
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default Login;
