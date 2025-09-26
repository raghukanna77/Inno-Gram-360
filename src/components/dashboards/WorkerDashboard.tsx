import React, { useState } from 'react';
import { 
  CheckSquare, 
  Upload, 
  Trophy, 
  Star, 
  Camera,
  MapPin,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';
import { StatCard } from '../common/StatCard';
import { Modal } from '../common/Modal';
import { useLanguage } from '../../context/LanguageContext';
import { mockProjects, mockWorkerStats } from '../../data/mockData';

interface WorkerDashboardProps {
  activeTab: string;
}

export const WorkerDashboard: React.FC<WorkerDashboardProps> = ({ activeTab }) => {
  const { t } = useLanguage();
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const workerStats = mockWorkerStats[0]; // Assuming current worker is first in list

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('accountabilityScore')}
          value={`${workerStats.accountabilityScore}%`}
          icon={Star}
          color="green"
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Tasks Completed"
          value={workerStats.tasksCompleted}
          icon={CheckSquare}
          color="blue"
        />
        <StatCard
          title="Verified Uploads"
          value={`${workerStats.verifiedUploads}/${workerStats.totalUploads}`}
          icon={Upload}
          color="purple"
        />
        <StatCard
          title="Current Rank"
          value={`#${workerStats.rank}`}
          icon={Trophy}
          color="yellow"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setUploadModalOpen(true)}
            className="flex items-center justify-center space-x-2 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Upload className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-700">{t('uploadProof')}</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
            <CheckSquare className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-700">Mark Complete</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
            <Trophy className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-purple-700">View {t('leaderboard')}</span>
          </button>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('badges')} & Achievements</h3>
        <div className="flex space-x-4">
          {workerStats.badges.map((badge) => (
            <div 
              key={badge.id}
              className="flex flex-col items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <span className="text-3xl mb-2">{badge.icon}</span>
              <h4 className="font-medium text-gray-900">{badge.name}</h4>
              <p className="text-xs text-gray-600 text-center mt-1">{badge.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                Earned: {new Date(badge.earnedDate).toLocaleDateString()}
              </p>
            </div>
          ))}
          
          {/* Placeholder for next badge */}
          <div className="flex flex-col items-center p-4 bg-gray-50 border border-gray-200 rounded-lg border-dashed">
            <div className="w-8 h-8 bg-gray-300 rounded-full mb-2 flex items-center justify-center">
              <span className="text-gray-500 text-lg">?</span>
            </div>
            <h4 className="font-medium text-gray-500">Next Badge</h4>
            <p className="text-xs text-gray-400 text-center mt-1">5 more uploads needed</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyTasks = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('myTasks')}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Completion Rate:</span>
          <span className="text-lg font-bold text-green-600">92%</span>
        </div>
      </div>

      <div className="space-y-4">
        {mockProjects
          .filter(project => project.assignedWorker === 'Arjun Singh')
          .map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    project.status === 'completed' ? 'bg-green-100 text-green-600' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                    project.status === 'delayed' ? 'bg-red-100 text-red-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <CheckSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600">Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    project.status === 'delayed' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setUploadModalOpen(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Camera className="h-4 w-4" />
                  <span>Upload Proof</span>
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const renderUploadProof = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{t('uploadProof')}</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Project
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Community Water Supply System</option>
              <option>School Building Renovation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Photo/Video
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">PNG, JPG, MP4 up to 50MB</p>
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              />
            </div>
            {selectedFile && (
              <p className="mt-2 text-sm text-green-600">
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe the progress shown in this proof..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location (Auto-detected)
            </label>
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-md">
              <MapPin className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">
                Lat: 27.5706, Lng: 80.4951 (Rampur, UP)
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Upload Proof & Verify
          </button>
        </form>
      </div>
    </div>
  );

  const renderLeaderboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{t('leaderboard')}</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers This Month</h3>
        
        <div className="space-y-3">
          {mockWorkerStats
            .sort((a, b) => b.accountabilityScore - a.accountabilityScore)
            .map((stats, index) => (
              <div key={stats.id} className={`flex items-center justify-between p-4 rounded-lg ${
                stats.rank === 1 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    stats.rank === 1 ? 'bg-yellow-500 text-white' :
                    stats.rank === 2 ? 'bg-gray-400 text-white' :
                    stats.rank === 3 ? 'bg-orange-400 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    <span className="text-sm font-bold">#{stats.rank}</span>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900">
                      Worker #{stats.workerId} {stats.workerId === '3' ? '(You)' : ''}
                    </p>
                    <p className="text-sm text-gray-600">
                      {stats.tasksCompleted} tasks completed | {stats.verifiedUploads} verified uploads
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-900">{stats.accountabilityScore}%</p>
                    <p className="text-sm text-gray-600">Score</p>
                  </div>
                  
                  {stats.rank === 1 && (
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  )}
                </div>
              </div>
            ))}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <div>
              <h4 className="font-medium text-blue-900">Your Progress</h4>
              <p className="text-sm text-blue-700">
                Upload 3 more verified proofs to reach the next level!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUploadModal = () => (
    <Modal
      isOpen={uploadModalOpen}
      onClose={() => setUploadModalOpen(false)}
      title={t('uploadProof')}
      size="lg"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Project
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option>Community Water Supply System</option>
            <option>School Building Renovation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photo/Video
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="image/*,video/*"
              className="w-full"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the progress..."
          />
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => setUploadModalOpen(false)}
            className="flex-1 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            {t('cancel')}
          </button>
          <button
            onClick={() => setUploadModalOpen(false)}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {t('upload')}
          </button>
        </div>
      </div>
    </Modal>
  );

  switch (activeTab) {
    case 'overview':
      return (
        <>
          {renderOverview()}
          {renderUploadModal()}
        </>
      );
    case 'my-tasks':
      return (
        <>
          {renderMyTasks()}
          {renderUploadModal()}
        </>
      );
    case 'upload-proof':
      return renderUploadProof();
    case 'leaderboard':
      return renderLeaderboard();
    case 'projects':
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">{t('projects')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockProjects
              .filter(project => project.assignedWorker === 'Arjun Singh')
              .map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      );
    default:
      return (
        <>
          {renderOverview()}
          {renderUploadModal()}
        </>
      );
  }
};