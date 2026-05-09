// import { useEffect, useState } from "react";
// import { getUsersApi } from "../../services/api/user.api";

// export default function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getUsersApi("tnt_001").then((res) => setUsers(res.data || []));
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {users.map((u) => (
//         <p key={u.id}>
//           {u.name} ({u.role})
//         </p>
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { getUsersApi } from "../../services/api/user.api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsersApi("tnt_001");

      setUsers(res.data || []);
    } catch (error) {
      console.error(
        "Failed to fetch users:",
        error
      );
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Users
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all system users
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition">
          + Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        
        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-gray-500">
                  Name
                </th>

                <th className="text-left p-4 text-sm font-semibold text-gray-500">
                  Role
                </th>

                <th className="text-left p-4 text-sm font-semibold text-gray-500">
                  Email
                </th>

                <th className="text-left p-4 text-sm font-semibold text-gray-500">
                  Status
                </th>

                <th className="text-left p-4 text-sm font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    
                    {/* Name */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                          {u.name?.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {u.name}
                          </p>

                          <p className="text-sm text-gray-400">
                            ID: {u.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="p-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {u.role}
                      </span>
                    </td>

                    {/* Email */}
                    <td className="p-4 text-gray-700">
                      {u.email || "N/A"}
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Active
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex gap-3">
                        
                        <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition">
                          Edit
                        </button>

                        <button className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium transition">
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}