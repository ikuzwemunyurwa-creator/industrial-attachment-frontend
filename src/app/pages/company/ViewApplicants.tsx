import Navigation from '../../components/Navigation';
import { Link, useParams } from 'react-router';
import { ArrowLeft, User, GraduationCap, Mail, Phone, FileText, CheckCircle, XCircle, Download } from 'lucide-react';

export default function ViewApplicants() {
  const { id } = useParams();

  const applicants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 234 567 8901',
      university: 'MIT',
      field: 'Computer Science',
      gpa: '3.9',
      appliedDate: '2026-05-04',
      status: 'pending',
      coverLetter: 'I am extremely interested in this position...',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      phone: '+1 234 567 8902',
      university: 'Stanford University',
      field: 'Computer Science',
      gpa: '3.8',
      appliedDate: '2026-05-04',
      status: 'pending',
      coverLetter: 'With a strong background in software development...',
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      phone: '+1 234 567 8903',
      university: 'UC Berkeley',
      field: 'Data Science',
      gpa: '3.85',
      appliedDate: '2026-05-03',
      status: 'reviewed',
      coverLetter: 'As a data science student passionate about...',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.w@example.com',
      phone: '+1 234 567 8904',
      university: 'Carnegie Mellon',
      field: 'Software Engineering',
      gpa: '3.92',
      appliedDate: '2026-05-03',
      status: 'accepted',
      coverLetter: 'I have been following your company for years...',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      reviewed: 'bg-blue-100 text-blue-700 border-blue-200',
      accepted: 'bg-green-100 text-green-700 border-green-200',
      rejected: 'bg-red-100 text-red-700 border-red-200',
    };
    return styles[status as keyof typeof styles] || styles.pending;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="company" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/company/manage" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Manage Internships
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Applicants</h1>
          <p className="text-gray-600 mt-1">Software Engineering Intern - {applicants.length} applicants</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="text-2xl font-bold text-gray-900">{applicants.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="bg-yellow-50 rounded-xl shadow-lg p-4 border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-700">
              {applicants.filter(a => a.status === 'pending').length}
            </div>
            <div className="text-sm text-yellow-700">Pending</div>
          </div>
          <div className="bg-blue-50 rounded-xl shadow-lg p-4 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700">
              {applicants.filter(a => a.status === 'reviewed').length}
            </div>
            <div className="text-sm text-blue-700">Reviewed</div>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg p-4 border border-green-200">
            <div className="text-2xl font-bold text-green-700">
              {applicants.filter(a => a.status === 'accepted').length}
            </div>
            <div className="text-sm text-green-700">Accepted</div>
          </div>
        </div>

        {/* Applicants List */}
        <div className="space-y-6">
          {applicants.map((applicant) => (
            <div key={applicant.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                      {applicant.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{applicant.name}</h3>
                      <p className="text-blue-100">{applicant.university}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusBadge(applicant.status)}`}>
                    {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="text-sm text-gray-900">{applicant.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Phone</div>
                      <div className="text-sm text-gray-900">{applicant.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Field</div>
                      <div className="text-sm text-gray-900">{applicant.field}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">GPA</div>
                      <div className="text-sm text-gray-900">{applicant.gpa}/4.0</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Cover Letter</h4>
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{applicant.coverLetter}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </button>
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Accept
                  </button>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
