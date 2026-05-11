import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";

export default function SystemLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: 20 }}>{children}</div>
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