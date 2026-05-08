import Navigation from '../../components/Navigation';
import { TrendingUp, Users, Building2, Briefcase, Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const monthlyStats = [
    { month: 'Jan', students: 1800, companies: 320, internships: 850, applications: 3200 },
    { month: 'Feb', students: 2050, companies: 380, internships: 920, applications: 3850 },
    { month: 'Mar', students: 2200, companies: 420, internships: 1050, applications: 4320 },
    { month: 'Apr', students: 2400, companies: 455, internships: 1180, applications: 4890 },
    { month: 'May', students: 2543, companies: 487, internships: 1234, applications: 5120 },
  ];

  const applicationsByField = [
    { name: 'Engineering', value: 1850 },
    { name: 'Technology', value: 1620 },
    { name: 'Business', value: 980 },
    { name: 'Design', value: 670 },
    { name: 'Healthcare', value: 450 },
    { name: 'Other', value: 550 },
  ];

  const topCompanies = [
    { name: 'Google', internships: 45, applicants: 2340 },
    { name: 'Microsoft', internships: 38, applicants: 2120 },
    { name: 'Amazon', internships: 42, applicants: 1980 },
    { name: 'Apple', internships: 35, applicants: 1850 },
    { name: 'Meta', internships: 32, applicants: 1720 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6B7280'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-600 mt-1">Detailed insights and statistics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <Users className="w-10 h-10 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">2,543</div>
            <div className="text-sm text-blue-100">Total Students</div>
            <div className="text-xs text-blue-200 mt-2">↑ 12% from last month</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
            <Building2 className="w-10 h-10 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">487</div>
            <div className="text-sm text-purple-100">Total Companies</div>
            <div className="text-xs text-purple-200 mt-2">↑ 8% from last month</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
            <Briefcase className="w-10 h-10 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">1,234</div>
            <div className="text-sm text-green-100">Active Internships</div>
            <div className="text-xs text-green-200 mt-2">↑ 15% from last month</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
            <TrendingUp className="w-10 h-10 mb-3 opacity-80" />
            <div className="text-3xl font-bold mb-1">5,120</div>
            <div className="text-sm text-orange-100">Total Applications</div>
            <div className="text-xs text-orange-200 mt-2">↑ 18% from last month</div>
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">User Growth Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} name="Students" />
                <Line type="monotone" dataKey="companies" stroke="#8B5CF6" strokeWidth={2} name="Companies" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Applications by Field */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Applications by Field</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={applicationsByField}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {applicationsByField.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Internships & Applications Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Internships vs Applications</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="internships" fill="#10B981" name="Internships" />
                <Bar dataKey="applications" fill="#3B82F6" name="Applications" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top Companies */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Companies by Applicants</h2>
            <div className="space-y-4">
              {topCompanies.map((company, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{company.name}</div>
                      <div className="text-sm text-gray-500">{company.internships} internships</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{company.applicants}</div>
                    <div className="text-xs text-gray-500">applicants</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Summary Statistics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <div className="text-sm text-gray-600 mb-1">Average Applications per Internship</div>
              <div className="text-2xl font-bold text-gray-900">4.15</div>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <div className="text-sm text-gray-600 mb-1">Average Internships per Company</div>
              <div className="text-2xl font-bold text-gray-900">2.53</div>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <div className="text-sm text-gray-600 mb-1">Success Rate</div>
              <div className="text-2xl font-bold text-gray-900">23.5%</div>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <div className="text-sm text-gray-600 mb-1">Average Response Time</div>
              <div className="text-2xl font-bold text-gray-900">2.3 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
