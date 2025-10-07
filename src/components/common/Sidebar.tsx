import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  UserCheck,
  Building,
  MessageSquare
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { userProfile } = useAuth();
  const role = userProfile?.role || 'public';

  const getNavigationItems = () => {
    const baseItems = [
      { icon: LayoutDashboard, label: 'Dashboard', href: '#dashboard', active: true },
    ];

    switch (role) {
      case 'government':
        return [
          ...baseItems,
          { icon: BarChart3, label: 'Analytics', href: '#analytics' },
          { icon: Users, label: 'Citizens', href: '#citizens' },
          { icon: Building, label: 'Departments', href: '#departments' },
          { icon: FileText, label: 'Policies', href: '#policies' },
          { icon: UserCheck, label: 'Officials', href: '#officials' },
          { icon: Settings, label: 'System Settings', href: '#settings' },
        ];

      case 'authority':
        return [
          ...baseItems,
          { icon: AlertTriangle, label: 'Issues', href: '#issues' },
          { icon: Users, label: 'Field Workers', href: '#workers' },
          { icon: BarChart3, label: 'Reports', href: '#reports' },
          { icon: CheckCircle, label: 'Approvals', href: '#approvals' },
          { icon: MessageSquare, label: 'Communications', href: '#communications' },
        ];

      case 'worker':
        return [
          ...baseItems,
          { icon: MapPin, label: 'Field Locations', href: '#locations' },
          { icon: AlertTriangle, label: 'Assigned Issues', href: '#assigned' },
          { icon: Clock, label: 'Task Timeline', href: '#timeline' },
          { icon: CheckCircle, label: 'Completed Work', href: '#completed' },
          { icon: FileText, label: 'Reports', href: '#reports' },
        ];

      case 'public':
      default:
        return [
          ...baseItems,
          { icon: AlertTriangle, label: 'Report Issue', href: '#report' },
          { icon: Clock, label: 'My Requests', href: '#requests' },
          { icon: FileText, label: 'Documents', href: '#documents' },
          { icon: MessageSquare, label: 'Feedback', href: '#feedback' },
          { icon: BarChart3, label: 'Track Progress', href: '#track' },
        ];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <aside className="fixed left-0 top-16 w-64 h-full bg-white shadow-sm border-r border-gray-200 z-40">
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Role-specific quick actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Quick Actions
          </h3>
          <div className="space-y-2">
            {role === 'public' && (
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700">
                <AlertTriangle size={16} />
                <span>Emergency Report</span>
              </button>
            )}
            {role === 'worker' && (
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                <CheckCircle size={16} />
                <span>Mark Complete</span>
              </button>
            )}
            {role === 'authority' && (
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <UserCheck size={16} />
                <span>Assign Task</span>
              </button>
            )}
            {role === 'government' && (
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
                <BarChart3 size={16} />
                <span>Generate Report</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </aside>
  );
};