import React, { useState } from 'react';
import { 
  Users, 
  FolderOpen, 
  CheckCircle, 
  IndianRupee, 
  TrendingUp, 
  MapPin,
  Download,
  FileText 
} from 'lucide-react';
import { StatCard } from '../common/StatCard';
import { ProgressChart } from '../charts/ProgressChart';
import { SimpleBarChart } from '../charts/SimpleBarChart';
import { useLanguage } from '../../context/LanguageContext';
import { mockDashboardStats, mockVillages, mockProjects } from '../../data/mockData';

interface GovernmentDashboardProps {
  activeTab: string;
}

export const GovernmentDashboard: React.FC<GovernmentDashboardProps> = ({ activeTab }) => {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState('all');

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title={t('totalVillages')}
          value={mockDashboardStats.totalVillages}
          icon={Users}
          color="blue"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title={t('totalProjects')}
          value={mockDashboardStats.totalProjects}
          icon={FolderOpen}
          color="green"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title={t('completedProjects')}
          value={mockDashboardStats.completedProjects}
          icon={CheckCircle}
          color="purple"
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Budget Utilization"
          value={`${Math.round((mockDashboardStats.budgetSpent / mockDashboardStats.budgetAllocated) * 100)}%`}
          icon={IndianRupee}
          color="yellow"
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressChart
          title="Project Status Overview"
          data={[
            { label: 'Completed', value: 8, total: 16, color: '#10B981' },
            { label: 'In Progress', value: 5, total: 16, color: '#3B82F6' },
            { label: 'Delayed', value: 2, total: 16, color: '#F59E0B' },
            { label: 'Not Started', value: 1, total: 16, color: '#EF4444' }
          ]}
        />
        
        <SimpleBarChart
          title="Village Completion Rates"
          data={mockVillages.map(village => ({
            label: village.name,
            value: village.completionRate,
            color: village.completionRate >= 80 ? '#10B981' : village.completionRate >= 60 ? '#F59E0B' : '#EF4444'
          }))}
          maxValue={100}
        />
      </div>

      {/* Budget Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{t('budgetOverview')}</h3>
          <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Allocated</p>
            <p className="text-2xl font-bold text-gray-900">
              ₹{(mockDashboardStats.budgetAllocated / 100000).toFixed(1)}L
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-blue-600">
              ₹{(mockDashboardStats.budgetSpent / 100000).toFixed(1)}L
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Remaining</p>
            <p className="text-2xl font-bold text-green-600">
              ₹{((mockDashboardStats.budgetAllocated - mockDashboardStats.budgetSpent) / 100000).toFixed(1)}L
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVillages = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('totalVillages')}</h2>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All States</option>
          <option value="up">Uttar Pradesh</option>
          <option value="wb">West Bengal</option>
          <option value="ts">Telangana</option>
          <option value="mh">Maharashtra</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVillages.map((village) => (
          <div key={village.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{village.name}</h3>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                village.completionRate >= 80 
                  ? 'bg-green-100 text-green-800' 
                  : village.completionRate >= 60 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {village.completionRate}%
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">State:</span>
                <span className="font-medium">{village.state}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">District:</span>
                <span className="font-medium">{village.district}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Population:</span>
                <span className="font-medium">{village.population.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Open Complaints:</span>
                <span className="font-medium text-red-600">{village.complaints}</span>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('performanceMetrics')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress Report</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium">January 2024 Report</span>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Download
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <span className="font-medium">December 2023 Report</span>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Indicators</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Project Success Rate</span>
              <span className="text-lg font-bold text-green-600">87%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Average Completion Time</span>
              <span className="text-lg font-bold text-blue-600">4.2 months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Complaint Resolution Rate</span>
              <span className="text-lg font-bold text-yellow-600">73%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Worker Satisfaction</span>
              <span className="text-lg font-bold text-purple-600">4.5/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResourceAllocation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('resourceAllocation')}</h2>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Optimize Allocation
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Allocation by Category</h3>
          <SimpleBarChart
            title=""
            data={[
              { label: 'Infrastructure', value: 45, color: '#3B82F6' },
              { label: 'Education', value: 20, color: '#10B981' },
              { label: 'Healthcare', value: 15, color: '#F59E0B' },
              { label: 'Agriculture', value: 12, color: '#8B5CF6' },
              { label: 'Others', value: 8, color: '#EF4444' }
            ]}
            maxValue={50}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Recommendations</h3>
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-1">Rampur</h4>
              <p className="text-sm text-yellow-700">
                Increase water infrastructure budget by 20%
              </p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-1">Kothapally</h4>
              <p className="text-sm text-blue-700">
                Allocate additional funds for road maintenance
              </p>
            </div>
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-1">Hiware Bazar</h4>
              <p className="text-sm text-green-700">
                Model village - maintain current allocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (activeTab) {
    case 'overview':
      return renderOverview();
    case 'villages':
      return renderVillages();
    case 'reports':
      return renderReports();
    case 'resource-allocation':
      return renderResourceAllocation();
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
                    {t(project.status === 'not-started' ? 'notStarted' : project.status === 'in-progress' ? 'inProgress' : project.status)}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                
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
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium">₹{(project.budget / 100000).toFixed(1)}L</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Deadline:</span>
                    <span className="font-medium">{new Date(project.deadline).toLocaleDateString()}</span>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return renderOverview();
  }
};