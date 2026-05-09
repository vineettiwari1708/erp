import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Optional: clear everything
    // localStorage.clear();

    // Redirect to login
    navigate("/login", {
      replace: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      
      <div className="rounded-xl border border-slate-200 bg-white px-8 py-6 shadow-sm">
        
        <h2 className="text-lg font-semibold text-slate-800">
          Logging out...
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Please wait
        </p>

      </div>
    </div>
  );
}