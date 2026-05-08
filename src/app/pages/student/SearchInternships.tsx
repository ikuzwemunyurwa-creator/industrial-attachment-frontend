import Navigation from '../../components/Navigation';
import { Link } from 'react-router';
import { Search, MapPin, Calendar, Building2, Clock, Briefcase, DollarSign, Filter, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function SearchInternships() {
  const [showFilters, setShowFilters] = useState(false);

  const internships = [
    {
      id: 1,
      company: 'Google',
      logo: 'G',
      position: 'Software Engineering Intern',
      location: 'Mountain View, CA',
      type: 'Full-time',
      duration: '3 months',
      posted: '2 days ago',
      deadline: '2026-05-20',
      salary: '$5,000/month',
      description: 'Join our engineering team to work on cutting-edge projects...',
    },
    {
      id: 2,
      company: 'Microsoft',
      logo: 'M',
      position: 'Data Science Intern',
      location: 'Seattle, WA',
      type: 'Full-time',
      duration: '4 months',
      posted: '1 week ago',
      deadline: '2026-05-25',
      salary: '$4,800/month',
      description: 'Analyze data and build ML models for our cloud platform...',
    },
    {
      id: 3,
      company: 'Amazon',
      logo: 'A',
      position: 'Cloud Computing Intern',
      location: 'Austin, TX',
      type: 'Full-time',
      duration: '6 months',
      posted: '3 days ago',
      deadline: '2026-05-18',
      salary: '$4,500/month',
      description: 'Work with AWS services and infrastructure automation...',
    },
    {
      id: 4,
      company: 'Meta',
      logo: 'M',
      position: 'Frontend Developer Intern',
      location: 'Menlo Park, CA',
      type: 'Full-time',
      duration: '3 months',
      posted: '5 days ago',
      deadline: '2026-05-22',
      salary: '$5,200/month',
      description: 'Build user interfaces for millions of users worldwide...',
    },
    {
      id: 5,
      company: 'Apple',
      logo: 'A',
      position: 'iOS Development Intern',
      location: 'Cupertino, CA',
      type: 'Full-time',
      duration: '4 months',
      posted: '1 week ago',
      deadline: '2026-05-30',
      salary: '$5,500/month',
      description: 'Develop features for iOS apps used by millions...',
    },
    {
      id: 6,
      company: 'Tesla',
      logo: 'T',
      position: 'Electrical Engineering Intern',
      location: 'Palo Alto, CA',
      type: 'Full-time',
      duration: '6 months',
      posted: '4 days ago',
      deadline: '2026-05-28',
      salary: '$4,000/month',
      description: 'Work on next-generation electric vehicle technology...',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="student" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Internship</h1>
          <p className="text-gray-600 mt-1">Browse {internships.length} available opportunities</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by position, company, or keyword..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              Search
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="grid md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option>All Locations</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Field</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option>All Fields</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option>Any Duration</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                  <option>All Types</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Remote</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="grid gap-6">
          {internships.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    {job.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.position}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                    </div>
                    <Link to={`/student/internship/${job.id}`}>
                      <button className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                        View Details
                      </button>
                    </Link>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {job.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      {job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      Deadline: {job.deadline}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-500">Posted {job.posted}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
