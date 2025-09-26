import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  Users, 
  TrendingUp,
  AlertCircle,
  User,
  Calendar
} from 'lucide-react';
import { StatCard } from '../common/StatCard';
import { useLanguage } from '../../context/LanguageContext';
import { mockProjects, mockComplaints, mockWorkerStats } from '../../data/mockData';

interface AuthorityDashboardProps {
  activeTab: string;
}

export const AuthorityDashboard: React.FC<AuthorityDashboardProps> = ({ activeTab }) => {
  const { t } = useLanguage();

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('dailyUpdates')}
          value="12"
          icon={Clock}
          color="blue"
        />
        <StatCard
          title={t('escalations')}
          value="3"
          icon={AlertTriangle}
          color="red"
        />
        <StatCard
          title={t('pendingApprovals')}
          value="8"
          icon={CheckCircle}
          color="yellow"
        />
        <StatCard
          title="Active Workers"
          value={mockWorkerStats.length}
          icon={Users}
          color="green"
        />
      </div>

      {/* Recent Updates */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('dailyUpdates')}</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-200 rounded-full">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Water Supply System - Progress Update</p>
                <p className="text-sm text-gray-600">Rampur - 75% completion reported by Arjun Singh</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-200 rounded-full">
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Solar Lighting Project Completed</p>
                <p className="text-sm text-gray-600">Krishnanagar - All 50 lights installed and tested</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">4 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-200 rounded-full">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">School Renovation Delayed</p>
                <p className="text-sm text-gray-600">Rampur - Material shortage causing 2-week delay</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">6 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEscalations = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('escalations')}</h2>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option>All Priority</option>
            <option>Urgent</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {/* Delayed Projects */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">Delayed Projects</h3>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded-full">Urgent</span>
          </div>
          
          <div className="space-y-3">
            {mockProjects
              .filter(project => project.status === 'delayed')
              .map(project => (
                <div key={project.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{project.name}</p>
                    <p className="text-sm text-gray-600">
                      Progress: {project.progress}% | Deadline: {new Date(project.deadline).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Intervene
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* AI Flagged Proofs */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-200">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-900">AI Verification Flags</h3>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Review Required</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Suspicious Progress Photo - School Renovation</p>
                <p className="text-sm text-gray-600">
                  AI Confidence: 72% | Uploaded by: Priya Sharma | Date: Today
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                  Approve
                </button>
                <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* High Priority Complaints */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-orange-900">Urgent Complaints</h3>
          </div>
          
          <div className="space-y-3">
            {mockComplaints
              .filter(complaint => complaint.priority === 'urgent' && complaint.status !== 'resolved')
              .map(complaint => (
                <div key={complaint.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{complaint.title}</p>
                    <p className="text-sm text-gray-600">
                      {complaint.village} | Reported: {new Date(complaint.reportedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                    Assign
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderWorkerManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('workerAccountability')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockWorkerStats.map((stats) => (
          <div key={stats.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Worker #{stats.workerId}</h3>
                <p className="text-sm text-gray-600">Rank #{stats.rank} | Score: {stats.accountabilityScore}%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Verified Uploads</p>
                <p className="text-lg font-bold text-green-600">
                  {stats.verifiedUploads}/{stats.totalUploads}
                </p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Tasks Completed</p>
                <p className="text-lg font-bold text-blue-600">{stats.tasksCompleted}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Accountability Score</span>
              <span className="text-sm font-medium">{stats.accountabilityScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${stats.accountabilityScore}%` }}
              />
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-sm text-gray-600">Badges:</span>
              {stats.badges.map((badge) => (
                <span
                  key={badge.id}
                  className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                  title={badge.description}
                >
                  {badge.icon} {badge.name}
                </span>
              ))}
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                View Profile
              </button>
              <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Assign Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderApprovals = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('pendingApprovals')}</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Milestone Approvals</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Water Supply System - Phase 2</p>
                  <p className="text-sm text-gray-600">Submitted by: Arjun Singh | 2 days ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  Reject
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Review
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Digital Literacy Center Setup</p>
                  <p className="text-sm text-gray-600">Submitted by: Rajesh Kumar | 1 day ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  Reject
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Review
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Approvals</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Additional Materials - School Renovation</p>
                <p className="text-sm text-gray-600">Amount: ₹75,000 | Requested by: Priya Sharma</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'overview':
      return renderOverview();
    case 'escalations':
      return renderEscalations();
    case 'worker-management':
      return renderWorkerManagement();
    case 'approvals':
      return renderApprovals();
    case 'projects':
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">{t('projects')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'in-progress'
                      ? 'bg-blue-100 text-blue-800'
                      : project.status === 'delayed'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Assigned:</span>
                    <span className="font-medium">{project.assignedWorker || 'Unassigned'}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Monitor Progress
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    case 'complaints':
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">{t('complaints')}</h2>
          <div className="space-y-4">
            {mockComplaints.map((complaint) => (
              <div key={complaint.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      complaint.priority === 'urgent' ? 'bg-red-100 text-red-600' :
                      complaint.priority === 'high' ? 'bg-orange-100 text-orange-600' :
                      complaint.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                      <p className="text-sm text-gray-600">{complaint.village} | {complaint.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      complaint.status === 'resolved' ? 'bg-green-100 text-green-800' :
                      complaint.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {complaint.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      complaint.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                      complaint.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                      complaint.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {complaint.priority}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{complaint.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Reported by: {complaint.reportedBy} on {new Date(complaint.reportedDate).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-2">
                    {complaint.status === 'open' && (
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Assign Worker
                      </button>
                    )}
                    <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return renderOverview();
  }
};