import Navigation from '../../components/Navigation';
import { Building2, Mail, Phone, Globe, MapPin, Calendar, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function ApproveCompanies() {
  const pendingCompanies = [
    {
      id: 1,
      name: 'InnovateTech Solutions',
      email: 'hr@innovatetech.com',
      phone: '+1 555 100 2000',
      website: 'www.innovatetech.com',
      industry: 'Technology',
      location: 'Austin, TX',
      size: '201-1000',
      submitted: '2026-05-04',
      description: 'Leading provider of innovative technology solutions for businesses worldwide.',
    },
    {
      id: 2,
      name: 'GreenEnergy Corp',
      email: 'contact@greenenergy.com',
      phone: '+1 555 200 3000',
      website: 'www.greenenergy.com',
      industry: 'Energy',
      location: 'Portland, OR',
      size: '1000-5000',
      submitted: '2026-05-03',
      description: 'Sustainable energy solutions for a cleaner future.',
    },
    {
      id: 3,
      name: 'HealthPlus Medical',
      email: 'info@healthplus.com',
      phone: '+1 555 300 4000',
      website: 'www.healthplus.com',
      industry: 'Healthcare',
      location: 'Boston, MA',
      size: '5000+',
      submitted: '2026-05-02',
      description: 'Advanced healthcare services and medical technology innovation.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Approve Companies</h1>
          <p className="text-gray-600 mt-1">Review and approve company registrations</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl font-bold text-yellow-600 mb-1">{pendingCompanies.length}</div>
            <div className="text-sm text-gray-600">Pending Approval</div>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg p-6 border border-green-200">
            <div className="text-3xl font-bold text-green-700">487</div>
            <div className="text-sm text-green-700">Approved Companies</div>
          </div>
          <div className="bg-red-50 rounded-xl shadow-lg p-6 border border-red-200">
            <div className="text-3xl font-bold text-red-700">12</div>
            <div className="text-sm text-red-700">Rejected This Month</div>
          </div>
        </div>

        {/* Pending Companies */}
        <div className="space-y-6">
          {pendingCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-2xl">
                      {company.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{company.name}</h3>
                      <p className="text-blue-100">{company.industry}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                    Pending Review
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Email</div>
                      <div className="text-sm text-gray-900">{company.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Phone</div>
                      <div className="text-sm text-gray-900">{company.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Website</div>
                      <div className="text-sm text-gray-900">{company.website}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Location</div>
                      <div className="text-sm text-gray-900">{company.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Company Size</div>
                      <div className="text-sm text-gray-900">{company.size} employees</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-xs text-gray-500">Submitted</div>
                      <div className="text-sm text-gray-900">{company.submitted}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Company Description</h4>
                  <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{company.description}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Approve Company
                  </button>
                  <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Reject
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    View Full Details
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
