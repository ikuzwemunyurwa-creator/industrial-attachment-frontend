import Navigation from '../../components/Navigation';
import { User, Mail, Phone, GraduationCap, BookOpen, MapPin, Calendar, Edit, Save } from 'lucide-react';
import { useState } from 'react';

export default function StudentProfile() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="student" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-1">Manage your personal information</p>
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
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 text-4xl font-bold">
                JD
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                <p className="text-blue-100">Computer Science Student</p>
                <p className="text-blue-200 text-sm mt-2">Member since January 2026</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="John Doe"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    defaultValue="+1 234 567 8900"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    defaultValue="2003-06-15"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">University</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    defaultValue="Massachusetts Institute of Technology"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Field of Study</label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    defaultValue="Computer Science"
                    disabled={!editing}
                    className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      editing ? 'bg-gray-50' : 'bg-gray-100'
                    }`}
                  >
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Business</option>
                    <option>Medicine</option>
                    <option>Arts</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  defaultValue="Cambridge, Massachusetts, USA"
                  disabled={!editing}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    editing ? 'bg-gray-50' : 'bg-gray-100'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
              <textarea
                rows={4}
                defaultValue="Passionate computer science student with a focus on artificial intelligence and machine learning. Seeking internship opportunities to apply theoretical knowledge in real-world projects."
                disabled={!editing}
                className={`w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  editing ? 'bg-gray-50' : 'bg-gray-100'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Skills</label>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'React', 'Machine Learning', 'Data Structures', 'Algorithms'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
                {editing && (
                  <button className="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-600 rounded-full text-sm font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors">
                    + Add Skill
                  </button>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Statistics</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">12</div>
                  <div className="text-sm text-blue-600">Applications Sent</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="text-2xl font-bold text-green-700">2</div>
                  <div className="text-sm text-green-600">Offers Received</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">85%</div>
                  <div className="text-sm text-purple-600">Profile Completeness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
