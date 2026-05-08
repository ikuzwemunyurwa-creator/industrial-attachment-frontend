import Navigation from '../../components/Navigation';
import { Search, Filter, User, Mail, GraduationCap, Calendar, Edit, Trash2, Ban, CheckCircle } from 'lucide-react';

export default function ManageUsers() {
  const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com', university: 'MIT', field: 'Computer Science', joined: '2026-01-15', status: 'active', applications: 12 },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', university: 'Stanford', field: 'Engineering', joined: '2026-02-20', status: 'active', applications: 8 },
    { id: 3, name: 'Michael Chen', email: 'michael@example.com', university: 'Berkeley', field: 'Data Science', joined: '2026-03-10', status: 'active', applications: 15 },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', university: 'CMU', field: 'Software Engineering', joined: '2026-01-28', status: 'suspended', applications: 3 },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-200',
      suspended: 'bg-red-100 text-red-700 border-red-200',
    };
    return styles[status as keyof typeof styles] || styles.active;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
          <p className="text-gray-600 mt-1">View and manage all student accounts</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{students.length}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg p-6 border border-green-200">
            <div className="text-3xl font-bold text-green-700">
              {students.filter(s => s.status === 'active').length}
            </div>
            <div className="text-sm text-green-700">Active</div>
          </div>
          <div className="bg-red-50 rounded-xl shadow-lg p-6 border border-red-200">
            <div className="text-3xl font-bold text-red-700">
              {students.filter(s => s.status === 'suspended').length}
            </div>
            <div className="text-sm text-red-700">Suspended</div>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-200">
            <div className="text-3xl font-bold text-blue-700">
              {students.reduce((sum, s) => sum + s.applications, 0)}
            </div>
            <div className="text-sm text-blue-700">Total Applications</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or university..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Student</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">University</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Field</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applications</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <GraduationCap className="w-4 h-4" />
                        {student.university}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{student.field}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {student.joined}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{student.applications}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(student.status)}`}>
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Profile">
                          <User className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors" title="Suspend">
                          <Ban className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
