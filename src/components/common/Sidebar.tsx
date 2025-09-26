import React from 'react';
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  AlertCircle, 
  Upload, 
  Trophy,
  MessageSquare,
  Vote,
  Home,
  Settings,
  FileText,
  CheckSquare,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  roles: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 'overview',
    label: 'dashboard',
    icon: <Home className="h-5 w-5" />,
    roles: ['government', 'authority', 'worker', 'public']
  },
  {
    id: 'projects',
    label: 'projects',
    icon: <FolderOpen className="h-5 w-5" />,
    roles: ['government', 'authority', 'worker', 'public']
  },
  {
    id: 'villages',
    label: 'totalVillages',
    icon: <Users className="h-5 w-5" />,
    roles: ['government']
  },
  {
    id: 'reports',
    label: 'performanceMetrics',
    icon: <FileText className="h-5 w-5" />,
    roles: ['government']
  },
  {
    id: 'resource-allocation',
    label: 'resourceAllocation',
    icon: <TrendingUp className="h-5 w-5" />,
    roles: ['government']
  },
  {
    id: 'escalations',
    label: 'escalations',
    icon: <AlertCircle className="h-5 w-5" />,
    roles: ['authority']
  },
  {
    id: 'worker-management',
    label: 'workerAccountability',
    icon: <Users className="h-5 w-5" />,
    roles: ['authority']
  },
  {
    id: 'approvals',
    label: 'pendingApprovals',
    icon: <CheckSquare className="h-5 w-5" />,
    roles: ['authority']
  },
  {
    id: 'my-tasks',
    label: 'myTasks',
    icon: <CheckSquare className="h-5 w-5" />,
    roles: ['worker']
  },
  {
    id: 'upload-proof',
    label: 'uploadProof',
    icon: <Upload className="h-5 w-5" />,
    roles: ['worker']
  },
  {
    id: 'leaderboard',
    label: 'leaderboard',
    icon: <Trophy className="h-5 w-5" />,
    roles: ['worker']
  },
  {
    id: 'complaints',
    label: 'complaints',
    icon: <MessageSquare className="h-5 w-5" />,
    roles: ['public', 'authority']
  },
  {
    id: 'voting',
    label: 'communityVoting',
    icon: <Vote className="h-5 w-5" />,
    roles: ['public']
  },
  {
    id: 'local-news',
    label: 'localNews',
    icon: <BarChart3 className="h-5 w-5" />,
    roles: ['public']
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user?.role || '')
  );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        {filteredMenuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
              activeTab === item.id
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {item.icon}
            <span className="font-medium">{t(item.label)}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};