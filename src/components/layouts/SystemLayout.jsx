import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";


export default function SystemLayout({ children }) {
  const [compact, setCompact] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
  
  {/* SIDEBAR */}
  <Sidebar
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
  compact={compact}
  setCompact={setCompact}
/>

  {/* MAIN CONTENT */}
  <div className="flex flex-1 flex-col overflow-hidden">
    
    <Header />

    {/* PAGE CONTENT */}
    <main className="flex-1 overflow-y-auto p-5">
      {children}
    </main>

  </div>

</div>
  );
}



// import Sidebar from "../components/layouts/Sidebar";
// import Header from "../components/layouts/Header";

// export default function SystemLayout({ children }) {
//   return (
//     <div className="flex h-screen overflow-hidden bg-slate-50">

//       {/* ================= SIDEBAR ================= */}
//       <Sidebar />

//       {/* ================= MAIN AREA ================= */}
//       <div className="flex flex-1 flex-col overflow-hidden">

//         {/* HEADER (fixed top) */}
//         <Header />

//         {/* PAGE CONTENT (scrollable) */}
//         <main className="flex-1 overflow-y-auto p-4">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// }