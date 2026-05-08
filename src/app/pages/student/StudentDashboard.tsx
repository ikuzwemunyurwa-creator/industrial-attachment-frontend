import Navigation from '../../components/Navigation';
import { Link } from 'react-router';
import { Search, FileText, TrendingUp, Clock, CheckCircle, XCircle, Calendar, MapPin, Building2, ArrowRight } from 'lucide-react';

export default function StudentDashboard() {
  const stats = [
    { label: 'Applications Sent', value: '12', icon: FileText, color: 'blue', change: '+3 this week' },
    { label: 'Pending Reviews', value: '5', icon: Clock, color: 'yellow', change: 'Awaiting response' },
    { label: 'Accepted', value: '2', icon: CheckCircle, color: 'green', change: 'Congratulations!' },
    { label: 'Available Jobs', value: '150+', icon: TrendingUp, color: 'purple', change: 'New this week' },
  ];

  const recentApplications = [
    { id: 1, company: 'TechCorp Inc.', position: 'Software Engineering Intern', status: 'pending', date: '2026-05-03', location: 'San Francisco, CA' },
    { id: 2, company: 'Design Studio', position: 'UI/UX Design Intern', status: 'accepted', date: '2026-05-01', location: 'New York, NY' },
    { id: 3, company: 'Marketing Pro', position: 'Marketing Intern', status: 'rejected', date: '2026-04-28', location: 'Remote' },
    { id: 4, company: 'Finance Plus', position: 'Financial Analyst Intern', status: 'pending', date: '2026-04-25', location: 'Chicago, IL' },
  ];

  const recommendedInternships = [
    { id: 1, company: 'Google', position: 'Software Development Intern', location: 'Mountain View, CA', deadline: '2026-05-20', type: 'Full-time' },
    { id: 2, company: 'Microsoft', position: 'Data Science Intern', location: 'Seattle, WA', deadline: '2026-05-25', type: 'Full-time' },
    { id: 3, company: 'Amazon', position: 'Cloud Computing Intern', location: 'Austin, TX', deadline: '2026-05-18', type: 'Full-time' },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      accepted: 'bg-green-100 text-green-700 border-green-200',
      rejected: 'bg-red-100 text-red-700 border-red-200',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'accepted') return <CheckCircle className="w-4 h-4" />;
    if (status === 'rejected') return <XCircle className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="student" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-1">Here's your internship search overview</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              yellow: 'from-yellow-500 to-yellow-600',
              green: 'from-green-500 to-green-600',
              purple: 'from-purple-500 to-purple-600',
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                <Link to="/student/applications" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div key={app.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{app.position}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <Building2 className="w-4 h-4" />
                          {app.company}
                        </div>
                      </div>
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(app.status)}`}>
                        {getStatusIcon(app.status)}
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {app.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Applied {app.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Internships */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended</h2>
                <Link to="/student/search" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
                  Browse
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {recommendedInternships.map((job) => (
                  <Link key={job.id} to={`/student/internship/${job.id}`}>
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {job.company.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{job.position}</h3>
                          <p className="text-xs text-gray-600">{job.company}</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Deadline: {job.deadline}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <Link to="/student/search">
                <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" />
                  Search More Internships
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
