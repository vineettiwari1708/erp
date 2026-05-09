import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/api/auth.api";
import { loginSuccess } from "../../store/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginApi( email.trim(), password );
      dispatch(loginSuccess(res.data));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      
      <div className="flex flex-col w-80 p-6 bg-white shadow-md rounded-lg">

        <h1 className="text-center font-bold text-xl mb-2">Login</h1>
        <p className="text-center text-gray-500 mb-6">Welcome to Urbanfeat</p>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            className="border-b focus:outline-none focus:border-blue-500 p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            type="password"
            className="border-b focus:outline-none focus:border-blue-500 p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button
            type="submit"
            className="bg-slate-200 py-2 rounded hover:bg-slate-300"
          >
            Sign in
          </button>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

        </form>
      </div>
    </div>
  );
}