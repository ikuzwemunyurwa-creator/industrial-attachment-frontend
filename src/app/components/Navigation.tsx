import { Link, useLocation } from 'react-router';
import { Briefcase, LayoutDashboard, Search, FileText, User, LogOut, Building2, Users, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  role: 'student' | 'company' | 'admin';
}

export default function Navigation({ role }: NavigationProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const studentLinks = [
    { path: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/student/search', label: 'Find Internships', icon: Search },
    { path: '/student/applications', label: 'My Applications', icon: FileText },
    { path: '/student/profile', label: 'Profile', icon: User },
  ];

  const companyLinks = [
    { path: '/company/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/company/post', label: 'Post Internship', icon: FileText },
    { path: '/company/manage', label: 'Manage Internships', icon: Building2 },
    { path: '/company/profile', label: 'Profile', icon: User },
  ];

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/users', label: 'Manage Users', icon: Users },
    { path: '/admin/companies', label: 'Approve Companies', icon: Building2 },
    { path: '/admin/internships', label: 'Manage Internships', icon: FileText },
    { path: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const links = role === 'student' ? studentLinks : role === 'company' ? companyLinks : adminLinks;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InternConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            <Link to="/login">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-red-600 transition-colors w-full">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
