// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";

// export default function TenantLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-slate-100 lg:flex">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div className="flex min-w-0 flex-1 flex-col">
//         <Header setSidebarOpen={setSidebarOpen} />
//         <main className="p-4 sm:p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function TenantLayout() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      
      {/* ================= SIDEBAR ================= */}

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* ================= MAIN LAYOUT ================= */}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        
        {/* ================= HEADER ================= */}

        <Header
          setSidebarOpen={
            setSidebarOpen
          }
        />

        {/* ================= PAGE CONTENT ================= */}

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
