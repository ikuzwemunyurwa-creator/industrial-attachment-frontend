import Navigation from '../../components/Navigation';
import { Users, Building2, Briefcase, TrendingUp, UserCheck, Clock, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Students', value: '2,543', icon: Users, color: 'blue', change: '+12% this month' },
    { label: 'Total Companies', value: '487', icon: Building2, color: 'purple', change: '+8% this month' },
    { label: 'Active Internships', value: '1,234', icon: Briefcase, color: 'green', change: '+15% this month' },
    { label: 'Pending Approvals', value: '23', icon: Clock, color: 'yellow', change: 'Needs review' },
  ];

  const applicationData = [
    { month: 'Jan', applications: 145 },
    { month: 'Feb', applications: 178 },
    { month: 'Mar', applications: 210 },
    { month: 'Apr', applications: 245 },
    { month: 'May', applications: 198 },
  ];

  const userGrowth = [
    { month: 'Jan', students: 1800, companies: 320 },
    { month: 'Feb', students: 2050, companies: 380 },
    { month: 'Mar', students: 2200, companies: 420 },
    { month: 'Apr', students: 2400, companies: 455 },
    { month: 'May', students: 2543, companies: 487 },
  ];

  const pendingCompanies = [
    { id: 1, name: 'InnovateTech Solutions', industry: 'Technology', submitted: '2026-05-04', location: 'Austin, TX' },
    { id: 2, name: 'GreenEnergy Corp', industry: 'Energy', submitted: '2026-05-03', location: 'Portland, OR' },
    { id: 3, name: 'HealthPlus Medical', industry: 'Healthcare', submitted: '2026-05-02', location: 'Boston, MA' },
  ];

  const recentActivity = [
    { type: 'company', action: 'TechCorp Inc. posted new internship', time: '5 min ago' },
    { type: 'student', action: 'John Doe applied to Software Engineer position', time: '12 min ago' },
    { type: 'approval', action: 'New company registration pending approval', time: '1 hour ago' },
    { type: 'student', action: '5 new student registrations', time: '2 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">System overview and analytics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              purple: 'from-purple-500 to-purple-600',
              green: 'from-green-500 to-green-600',
              yellow: 'from-yellow-500 to-yellow-600',
            };
            return (
              <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.change}</div>
              </div>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Applications Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Applications Overview</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="applications" fill="url(#colorGradient)" />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* User Growth Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="companies" stroke="#8B5CF6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pending Approvals */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Pending Company Approvals</h2>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                  {pendingCompanies.length} Pending
                </span>
              </div>

              <div className="space-y-4">
                {pendingCompanies.map((company) => (
                  <div key={company.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{company.name}</h3>
                        <p className="text-sm text-gray-600">{company.industry}</p>
                        <p className="text-sm text-gray-500 mt-1">{company.location}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                          Reject
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Submitted {company.submitted}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>

              <div className="space-y-4">
                {recentActivity.map((activity, idx) => {
                  const icons = {
                    company: <Building2 className="w-4 h-4 text-purple-600" />,
                    student: <Users className="w-4 h-4 text-blue-600" />,
                    approval: <Clock className="w-4 h-4 text-yellow-600" />,
                  };

                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {icons[activity.type as keyof typeof icons]}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
