import Navigation from '../../components/Navigation';
import { Link } from 'react-router';
import { Briefcase, Users, Eye, TrendingUp, Plus, Calendar, MapPin, Clock } from 'lucide-react';

export default function CompanyDashboard() {
  const stats = [
    { label: 'Active Internships', value: '8', icon: Briefcase, color: 'blue', change: '+2 this month' },
    { label: 'Total Applicants', value: '156', icon: Users, color: 'purple', change: '+45 this week' },
    { label: 'Profile Views', value: '2.4k', icon: Eye, color: 'green', change: '+12% vs last month' },
    { label: 'Avg. Response Time', value: '2.3d', icon: Clock, color: 'yellow', change: 'Improving' },
  ];

  const activeInternships = [
    { id: 1, position: 'Software Engineering Intern', applicants: 45, views: 320, posted: '2026-04-28', deadline: '2026-05-20', location: 'San Francisco, CA' },
    { id: 2, position: 'Product Design Intern', applicants: 28, views: 215, posted: '2026-04-25', deadline: '2026-05-18', location: 'Remote' },
    { id: 3, position: 'Data Science Intern', applicants: 35, views: 280, posted: '2026-04-22', deadline: '2026-05-22', location: 'New York, NY' },
  ];

  const recentApplicants = [
    { id: 1, name: 'Sarah Johnson', position: 'Software Engineering Intern', university: 'MIT', applied: '2026-05-04', status: 'new' },
    { id: 2, name: 'Michael Chen', position: 'Product Design Intern', university: 'Stanford', applied: '2026-05-04', status: 'new' },
    { id: 3, name: 'Emily Davis', position: 'Data Science Intern', university: 'Berkeley', applied: '2026-05-03', status: 'reviewed' },
    { id: 4, name: 'James Wilson', position: 'Software Engineering Intern', university: 'CMU', applied: '2026-05-03', status: 'reviewed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="company" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Company Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, TechCorp Inc.</p>
          </div>
          <Link to="/company/post">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Post New Internship
            </button>
          </Link>
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Internships */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Internships</h2>
                <Link to="/company/manage" className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {activeInternships.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{job.position}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                      <Link to={`/company/applicants/${job.id}`}>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                          View Applicants
                        </button>
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-3 border-t border-gray-100">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{job.applicants}</div>
                        <div className="text-xs text-gray-600">Applicants</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">{job.views}</div>
                        <div className="text-xs text-gray-600">Views</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{job.deadline}</div>
                        <div className="text-xs text-gray-600">Deadline</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Applicants */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Applicants</h2>

              <div className="space-y-4">
                {recentApplicants.map((applicant) => (
                  <div key={applicant.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {applicant.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{applicant.name}</h4>
                        <p className="text-xs text-gray-600">{applicant.university}</p>
                        <p className="text-xs text-gray-500 mt-1">{applicant.position}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            applicant.status === 'new'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {applicant.status === 'new' ? 'New' : 'Reviewed'}
                          </span>
                          <span className="text-xs text-gray-500">{applicant.applied}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
