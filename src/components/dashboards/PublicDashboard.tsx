import React from 'react';
import { StatCard } from '../common/StatCard';
import { AlertTriangle, FileText, Clock, CheckCircle, MapPin, MessageSquare } from 'lucide-react';

export const PublicDashboard: React.FC = () => {
  const stats = [
    { title: 'My Requests', value: '3', icon: FileText, color: 'blue' as const },
    { title: 'In Progress', value: '2', icon: Clock, color: 'yellow' as const },
    { title: 'Resolved', value: '8', icon: CheckCircle, color: 'green' as const },
    { title: 'Response Time', value: '2.3 days', icon: Clock, color: 'purple' as const },
  ];

  const myRequests = [
    { id: 1, title: 'Street light not working', status: 'In Progress', date: '2 days ago', priority: 'Medium' },
    { id: 2, title: 'Water quality complaint', status: 'Under Review', date: '5 days ago', priority: 'High' },
    { id: 3, title: 'Road pothole repair', status: 'Resolved', date: '1 week ago', priority: 'Medium' },
  ];

  const quickActions = [
    { title: 'Report New Issue', icon: AlertTriangle, color: 'bg-red-500', description: 'Report a problem in your area' },
    { title: 'Track Request', icon: MapPin, color: 'bg-blue-500', description: 'Check status of your requests' },
    { title: 'Provide Feedback', icon: MessageSquare, color: 'bg-green-500', description: 'Share your experience' },
    { title: 'View Documents', icon: FileText, color: 'bg-purple-500', description: 'Access official documents' },
  ];

  const communityUpdates = [
    { title: 'New park opening in Sector 5', date: '2 days ago', type: 'announcement' },
    { title: 'Water supply maintenance scheduled', date: '3 days ago', type: 'maintenance' },
    { title: 'Community meeting next week', date: '5 days ago', type: 'event' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
        <p className="text-gray-600">Track your requests and stay updated with community services</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                <action.icon className="text-white" size={24} />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{action.title}</h4>
              <p className="text-sm text-gray-500 text-center">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* My Requests and Community Updates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Requests */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Requests</h3>
          <div className="space-y-4">
            {myRequests.map((request) => (
              <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{request.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{request.date}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      request.status === 'Resolved' 
                        ? 'bg-green-100 text-green-800'
                        : request.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.status}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      request.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {request.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Updates */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Updates</h3>
          <div className="space-y-4">
            {communityUpdates.map((update, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{update.title}</p>
                  <p className="text-xs text-gray-500">{update.date}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all updates →
          </button>
        </div>
      </div>
    </div>
  );
};