import Navigation from '../../components/Navigation';
import { Search, Building2, MapPin, Calendar, Users, Eye, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function ManageInternshipsAdmin() {
  const internships = [
    { id: 1, position: 'Software Engineering Intern', company: 'TechCorp Inc.', location: 'San Francisco, CA', status: 'active', applicants: 45, posted: '2026-04-28', deadline: '2026-05-20' },
    { id: 2, position: 'Product Design Intern', company: 'Design Studio', location: 'Remote', status: 'active', applicants: 28, posted: '2026-04-25', deadline: '2026-05-18' },
    { id: 3, position: 'Data Science Intern', company: 'DataCo', location: 'New York, NY', status: 'active', applicants: 35, posted: '2026-04-22', deadline: '2026-05-22' },
    { id: 4, position: 'Marketing Intern', company: 'MarketPro', location: 'Chicago, IL', status: 'flagged', applicants: 12, posted: '2026-04-20', deadline: '2026-05-15' },
    { id: 5, position: 'Finance Intern', company: 'FinanceHub', location: 'Austin, TX', status: 'closed', applicants: 52, posted: '2026-03-15', deadline: '2026-04-15' },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-200',
      closed: 'bg-gray-100 text-gray-700 border-gray-200',
      flagged: 'bg-red-100 text-red-700 border-red-200',
    };
    return styles[status as keyof typeof styles] || styles.active;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Manage Internships</h1>
          <p className="text-gray-600 mt-1">Monitor and moderate all internship postings</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1">{internships.length}</div>
            <div className="text-sm text-gray-600">Total Postings</div>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg p-6 border border-green-200">
            <div className="text-3xl font-bold text-green-700">
              {internships.filter(i => i.status === 'active').length}
            </div>
            <div className="text-sm text-green-700">Active</div>
          </div>
          <div className="bg-red-50 rounded-xl shadow-lg p-6 border border-red-200">
            <div className="text-3xl font-bold text-red-700">
              {internships.filter(i => i.status === 'flagged').length}
            </div>
            <div className="text-sm text-red-700">Flagged</div>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-lg p-6 border border-blue-200">
            <div className="text-3xl font-bold text-blue-700">
              {internships.reduce((sum, i) => sum + i.applicants, 0)}
            </div>
            <div className="text-sm text-blue-700">Total Applicants</div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by position, company, or location..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applicants</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Deadline</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {internships.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{job.position}</div>
                      <div className="text-sm text-gray-500">Posted {job.posted}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadge(job.status)}`}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-gray-900">{job.applicants}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {job.deadline}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Details">
                          <Eye className="w-5 h-5" />
                        </button>
                        {job.status === 'flagged' && (
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        )}
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Remove">
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
