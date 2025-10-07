import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Header } from '../common/Header';
import { Sidebar } from '../common/Sidebar';
import { GovernmentDashboard } from '../dashboards/GovernmentDashboard';
import { AuthorityDashboard } from '../dashboards/AuthorityDashboard';
import { WorkerDashboard } from '../dashboards/WorkerDashboard';
import { PublicDashboard } from '../dashboards/PublicDashboard';

export const DashboardLayout: React.FC = () => {
  const { user, userProfile } = useAuth();

  const renderDashboard = () => {
    const role = userProfile?.role || 'public';
    
    switch (role) {
      case 'government':
        return <GovernmentDashboard />;
      case 'authority':
        return <AuthorityDashboard />;
      case 'worker':
        return <WorkerDashboard />;
      case 'public':
      default:
        return <PublicDashboard />;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Please log in to access the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-6">
          <div className="max-w-7xl mx-auto">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </div>
  );
};