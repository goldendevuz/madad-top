import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getRegisteredUsers } from "@/lib/actions"

export default async function AdminPage() {
  const { success, users, message } = await getRegisteredUsers()

  if (!success) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{message || "Failed to load registered users"}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Registered Users</CardTitle>
          </CardHeader>
          <CardContent>
            {users.length === 0 ? (
              <p className="text-gray-300">No registered users yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="p-4 text-gray-300">Name</th>
                      <th className="p-4 text-gray-300">Email</th>
                      <th className="p-4 text-gray-300">Phone</th>
                      <th className="p-4 text-gray-300">Course</th>
                      <th className="p-4 text-gray-300">Status</th>
                      <th className="p-4 text-gray-300">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user: any) => (
                      <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                        <td className="p-4 text-white">{user.name}</td>
                        <td className="p-4 text-white">{user.email}</td>
                        <td className="p-4 text-white">{user.phone}</td>
                        <td className="p-4 text-white">{user.course}</td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              user.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-300"
                                : user.status === "contacted"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : user.status === "enrolled"
                                    ? "bg-green-500/20 text-green-300"
                                    : "bg-gray-500/20 text-gray-300"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-4 text-gray-300">{new Date(user.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
