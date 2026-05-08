import Navigation from '../../components/Navigation';
import { Building2, Mail, Phone, Globe, MapPin, FileText, Edit, Save, Users } from 'lucide-react';
import { useState } from 'react';

export default function CompanyProfile() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="company" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Company Profile</h1>
            <p className="text-gray-600 mt-1">Manage your company information</p>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
          >
            {editing ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
            {editing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center text-blue-600 text-4xl font-bold">
                TC
              </div>
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-1">TechCorp Inc.</h2>
                <p className="text-blue-100 text-lg">Leading Technology Solutions Provider</p>
                <p className="text-blue-200 text-sm mt-2">✓ Verified Company • Member since 2024</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  defaultValue="TechCorp Inc."
                  disabled={!editing}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    editing ? 'bg-gray-50' : 'bg-gray-100'
                  }`}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    defaultValue="hr@techcorp.com"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    defaultValue="+1 555 123 4567"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Website</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    defaultValue="https://www.techcorp.com"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    defaultValue="Technology"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  >
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Size</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    defaultValue="1000-5000"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  >
                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000-5000</option>
                    <option>5000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="San Francisco, California, USA"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Description</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  rows={6}
                  defaultValue="TechCorp Inc. is a leading technology solutions provider specializing in cloud computing, artificial intelligence, and software development. Founded in 2010, we've grown to become one of the most innovative companies in the tech industry, serving clients worldwide with cutting-edge solutions."
                  disabled={!editing}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    editing ? 'bg-gray-50' : 'bg-gray-100'
                  }`}
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Company Statistics</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">8</div>
                  <div className="text-sm text-blue-600">Active Internships</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">156</div>
                  <div className="text-sm text-purple-600">Total Applicants</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-2xl font-bold text-green-700">2.4k</div>
                  <div className="text-sm text-green-600">Profile Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
