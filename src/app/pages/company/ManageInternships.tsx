import Navigation from '../../components/Navigation';
import { Link } from 'react-router';
import { MapPin, Calendar, Users, Eye, Edit, Trash2, MoreVertical } from 'lucide-react';

export default function ManageInternships() {
  const internships = [
    { id: 1, position: 'Software Engineering Intern', location: 'San Francisco, CA', status: 'active', applicants: 45, views: 320, posted: '2026-04-28', deadline: '2026-05-20' },
    { id: 2, position: 'Product Design Intern', location: 'Remote', status: 'active', applicants: 28, views: 215, posted: '2026-04-25', deadline: '2026-05-18' },
    { id: 3, position: 'Data Science Intern', location: 'New York, NY', status: 'active', applicants: 35, views: 280, posted: '2026-04-22', deadline: '2026-05-22' },
    { id: 4, position: 'Marketing Intern', location: 'Chicago, IL', status: 'closed', applicants: 52, views: 410, posted: '2026-03-15', deadline: '2026-04-15' },
    { id: 5, position: 'Finance Intern', location: 'Austin, TX', status: 'draft', applicants: 0, views: 0, posted: '2026-05-05', deadline: '2026-05-30' },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'bg-green-100 text-green-700 border-green-200',
      closed: 'bg-gray-100 text-gray-700 border-gray-200',
      draft: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    };
    return styles[status as keyof typeof styles] || styles.draft;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="company" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Internships</h1>
            <p className="text-gray-600 mt-1">View and edit your internship postings</p>
          </div>
          <Link to="/company/post">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all">
              Post New
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {internships.filter(i => i.status === 'active').length}
            </div>
            <div className="text-sm text-gray-600">Active Postings</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {internships.reduce((sum, i) => sum + i.applicants, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Applicants</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {internships.reduce((sum, i) => sum + i.views, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applicants</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Views</th>
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
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-purple-600" />
                        <span className="font-semibold text-gray-900">{job.views}</span>
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
                        <Link to={`/company/applicants/${job.id}`}>
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Applicants">
                            <Users className="w-5 h-5" />
                          </button>
                        </Link>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Edit">
                          <Edit className="w-5 h-5" />
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
