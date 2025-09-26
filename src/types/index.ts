export interface User {
  id: string;
  name: string;
  email: string;
  role: 'government' | 'authority' | 'worker' | 'public';
  village?: string;
  avatar?: string;
}

export interface Village {
  id: string;
  name: string;
  state: string;
  district: string;
  population: number;
  projects: Project[];
  complaints: number;
  completionRate: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'delayed';
  progress: number;
  budget: number;
  spent: number;
  startDate: string;
  deadline: string;
  assignedWorker?: string;
  location: {
    lat: number;
    lng: number;
  };
  proofs: Proof[];
}

export interface Proof {
  id: string;
  projectId: string;
  workerId: string;
  fileName: string;
  fileType: 'image' | 'video';
  uploadDate: string;
  location: {
    lat: number;
    lng: number;
  };
  aiVerified: boolean;
  blockchainHash?: string;
  description: string;
}

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: 'water' | 'electricity' | 'roads' | 'sanitation' | 'other';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  reportedBy: string;
  reportedDate: string;
  village: string;
  location?: {
    lat: number;
    lng: number;
  };
  photos?: string[];
  assignedTo?: string;
}

export interface WorkerStats {
  id: string;
  workerId: string;
  totalUploads: number;
  verifiedUploads: number;
  accountabilityScore: number;
  badges: Badge[];
  rank: number;
  tasksCompleted: number;
  tasksOverdue: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
}

export interface DashboardStats {
  totalVillages: number;
  totalProjects: number;
  completedProjects: number;
  totalComplaints: number;
  resolvedComplaints: number;
  totalWorkers: number;
  budgetAllocated: number;
  budgetSpent: number;
}