import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Building2,
} from 'lucide-react';

interface InternshipForm {
  positionTitle: string;
  location: string;
  department: string;
  duration: string;
  salary: string;
  type: string;
  startDate: string;
  applicationDeadline: string;
  description: string;
  responsibilities: string;
  requirements: string;
  benefits: string;
}

export default function PostInternship() {
  const navigate = useNavigate();

  const [form, setForm] = useState<InternshipForm>({
    positionTitle: '',
    location: '',
    department: '',
    duration: '',
    salary: '',
    type: '',
    startDate: '',
    applicationDeadline: '',
    description: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Handle changes
  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(form);

      setSuccess('Internship posted successfully');

      navigate('/company/manage');
    } catch (err) {
      setError('Failed to post internship');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation role="company" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Post New Internship
          </h1>

          <p className="text-gray-600 mt-1">
            Fill in the details to create a new internship opportunity
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Position */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Position Title
              </label>

              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  name="positionTitle"
                  value={form.positionTitle}
                  onChange={handleChange}
                  placeholder="Software Engineering Intern"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                />
              </div>
            </div>

            {/* Location + Department */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Kigali Rwanda"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>

                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <select
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                  >
                    <option value="">Select Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Duration Salary Type */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Duration
                </label>

                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="duration"
                    value={form.duration}
                    onChange={handleChange}
                    placeholder="3 months"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Salary
                </label>

                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="salary"
                    value={form.salary}
                    onChange={handleChange}
                    placeholder="$300/month"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type
                </label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                >
                  <option value="">Select Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg"
              />

              <input
                type="date"
                name="applicationDeadline"
                value={form.applicationDeadline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Description */}
            <textarea
              rows={4}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Internship description..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg"
            />

            {/* Responsibilities */}
            <textarea
              rows={4}
              name="responsibilities"
              value={form.responsibilities}
              onChange={handleChange}
              placeholder="Responsibilities..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg"
            />

            {/* Requirements */}
            <textarea
              rows={4}
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              placeholder="Requirements..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg"
            />

            {/* Benefits */}
            <textarea
              rows={3}
              name="benefits"
              value={form.benefits}
              onChange={handleChange}
              placeholder="Benefits..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg"
            />

            {/* Errors */}
            {error && (
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                {success}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Link to="/company/dashboard" className="flex-1">
                <button
                  type="button"
                  className="w-full py-3 border-2 border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg"
              >
                {loading ? 'Posting...' : 'Post Internship'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}