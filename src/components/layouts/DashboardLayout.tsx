import React, { useState } from 'react';
import { Header } from '../common/Header';
import { Sidebar } from '../common/Sidebar';
import { GovernmentDashboard } from '../dashboards/GovernmentDashboard';
import { AuthorityDashboard } from '../dashboards/AuthorityDashboard';
import { WorkerDashboard } from '../dashboards/WorkerDashboard';
import { PublicDashboard } from '../dashboards/PublicDashboard';
import { useAuth } from '../../context/AuthContext';

export const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'government':
        return <GovernmentDashboard activeTab={activeTab} />;
      case 'authority':
        return <AuthorityDashboard activeTab={activeTab} />;
      case 'worker':
        return <WorkerDashboard activeTab={activeTab} />;
      case 'public':
        return <PublicDashboard activeTab={activeTab} />;
      default:
        return <div>Role not recognized</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-8">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};