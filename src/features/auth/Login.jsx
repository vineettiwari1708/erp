import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/api/auth.api";
import { loginSuccess } from "../../store/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("vineet@gmail.com");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await loginApi(email.trim());
      dispatch(loginSuccess(res.data));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-100 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
        {/* <p className="mt-1 text-sm text-slate-500">Use a email to continue.</p> */}
       <div className="relative group w-fit">
  <p className="mt-1 cursor-pointer text-sm text-slate-500">
    Use an email to continue.
  </p>

  {/* Right Center Dropdown */}
  <div
    className="absolute left-full top-1/2 z-10 ml-3 hidden 
               -translate-y-1/2 w-72 rounded-md border bg-white 
               shadow-lg group-hover:block"
  >
    <ul className="py-2 text-sm text-slate-700">
      <li className="cursor-pointer px-4 py-2 hover:bg-slate-100">
        <span className="font-medium">Superadmin</span> — vineet@gmail.com
      </li>

      <li className="cursor-pointer px-4 py-2 hover:bg-slate-100">
        <span className="font-medium">Admin</span> — admin@acme.com
      </li>

      <li className="cursor-pointer px-4 py-2 hover:bg-slate-100">
        <span className="font-medium">Manager</span> — manager@acme.com
      </li>
      <li className="cursor-pointer px-4 py-2 hover:bg-slate-100">
        <span className="font-medium">Account</span> — account@acme.com
      </li>
      <li className="cursor-pointer px-4 py-2 hover:bg-slate-100">
        <span className="font-medium">Client</span> — client@abc.com
      </li>
    </ul>
  </div>
</div>
        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400"
          />
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
