import Navigation from '../../components/Navigation';
import { Link, useParams } from 'react-router';

import { MapPin, Calendar, Clock, DollarSign, Building2, Users, Briefcase, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

export default function InternshipDetails() {
  const { id } = useParams();

  const internship = {
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
    description: `We are looking for talented software engineering interns to join our team for the summer. You'll work on real projects that impact millions of users worldwide.

This internship offers hands-on experience with cutting-edge technologies, mentorship from industry experts, and the opportunity to contribute to products used by billions.`,
    responsibilities: [
      'Design and develop software features',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
      'Debug and optimize applications',
    ],
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Strong programming skills in Java, Python, or C++',
      'Understanding of data structures and algorithms',
      'Good communication and teamwork skills',
      'Previous internship experience is a plus',
    ],
    benefits: [
      'Competitive salary',
      'Housing stipend',
      'Free meals and snacks',
      'Mentorship program',
      'Networking opportunities',
      'Potential for full-time offer',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="student" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/student/search" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-3xl flex-shrink-0">
                {internship.logo}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{internship.position}</h1>
                <div className="flex items-center gap-2 text-blue-100 text-lg mb-4">
                  <Building2 className="w-5 h-5" />
                  {internship.company}
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {internship.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    {internship.salary}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Deadline: {internship.deadline}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Internship</h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">{internship.description}</p>
            </section>

            {/* Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {internship.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {internship.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {internship.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Apply Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Ready to Apply?</h3>
                  <p className="text-gray-600">Submit your application before {internship.deadline}</p>
                </div>
                <Link to={`/student/apply/${internship.id}`}>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
