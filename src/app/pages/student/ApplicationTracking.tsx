import Navigation from '../../components/Navigation';
import { Link } from 'react-router';
import { Building2, MapPin, Calendar, Clock, CheckCircle, XCircle, Eye, FileText } from 'lucide-react';

export default function ApplicationTracking() {
  const applications = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      logo: 'T',
      position: 'Software Engineering Intern',
      location: 'San Francisco, CA',
      appliedDate: '2026-05-03',
      status: 'pending',
      statusMessage: 'Under review by hiring team',
    },
    {
      id: 2,
      company: 'Design Studio',
      logo: 'D',
      position: 'UI/UX Design Intern',
      location: 'New York, NY',
      appliedDate: '2026-05-01',
      status: 'accepted',
      statusMessage: 'Congratulations! Offer letter sent to your email',
    },
    {
      id: 3,
      company: 'Marketing Pro',
      logo: 'M',
      position: 'Marketing Intern',
      location: 'Remote',
      appliedDate: '2026-04-28',
      status: 'rejected',
      statusMessage: 'Position filled with another candidate',
    },
    {
      id: 4,
      company: 'Finance Plus',
      logo: 'F',
      position: 'Financial Analyst Intern',
      location: 'Chicago, IL',
      appliedDate: '2026-04-25',
      status: 'pending',
      statusMessage: 'Application received, awaiting initial review',
    },
    {
      id: 5,
      company: 'AI Innovations',
      logo: 'A',
      position: 'Machine Learning Intern',
      location: 'Boston, MA',
      appliedDate: '2026-04-20',
      status: 'pending',
      statusMessage: 'Scheduled for phone interview on May 10',
    },
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
    if (status === 'accepted') return <CheckCircle className="w-5 h-5" />;
    if (status === 'rejected') return <XCircle className="w-5 h-5" />;
    return <Clock className="w-5 h-5" />;
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="student" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-600 mt-1">Track all your internship applications</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Applications</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-6 border border-yellow-200">
            <div className="text-3xl font-bold text-yellow-700 mb-1">{stats.pending}</div>
            <div className="text-sm text-yellow-700">Pending Review</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 border border-green-200">
            <div className="text-3xl font-bold text-green-700 mb-1">{stats.accepted}</div>
            <div className="text-sm text-green-700">Accepted</div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-lg p-6 border border-red-200">
            <div className="text-3xl font-bold text-red-700 mb-1">{stats.rejected}</div>
            <div className="text-sm text-red-700">Rejected</div>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    {app.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{app.position}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{app.company}</span>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${getStatusBadge(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {app.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Applied on {app.appliedDate}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-700">
                      <strong>Status Update:</strong> {app.statusMessage}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Link to={`/student/internship/${app.id}`}>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (hidden when there are applications) */}
        {applications.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
             <FileText className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Applications Yet</h3>
            <p className="text-gray-600 mb-6">Start applying for internships to see them here</p>
            <Link to="/student/search">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                Browse Internships
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
