import { Village, Project, Complaint, WorkerStats, DashboardStats } from '../types';

export const mockVillages: Village[] = [
  {
    id: '1',
    name: 'Rampur',
    state: 'Uttar Pradesh',
    district: 'Sitapur',
    population: 2500,
    projects: [],
    complaints: 12,
    completionRate: 75,
  },
  {
    id: '2',
    name: 'Krishnanagar',
    state: 'West Bengal',
    district: 'Nadia',
    population: 3200,
    projects: [],
    complaints: 8,
    completionRate: 82,
  },
  {
    id: '3',
    name: 'Kothapally',
    state: 'Telangana',
    district: 'Warangal',
    population: 1800,
    projects: [],
    complaints: 15,
    completionRate: 68,
  },
  {
    id: '4',
    name: 'Hiware Bazar',
    state: 'Maharashtra',
    district: 'Ahmednagar',
    population: 1250,
    projects: [],
    complaints: 5,
    completionRate: 95,
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Community Water Supply System',
    description: 'Installation of bore wells and water distribution network',
    status: 'in-progress',
    progress: 65,
    budget: 500000,
    spent: 325000,
    startDate: '2024-01-15',
    deadline: '2024-06-15',
    assignedWorker: 'Arjun Singh',
    location: { lat: 27.5706, lng: 80.4951 },
    proofs: []
  },
  {
    id: '2',
    name: 'Solar Street Lighting',
    description: 'Installation of 50 solar street lights across the village',
    status: 'completed',
    progress: 100,
    budget: 200000,
    spent: 185000,
    startDate: '2023-11-01',
    deadline: '2024-01-31',
    assignedWorker: 'Rajesh Kumar',
    location: { lat: 27.5706, lng: 80.4951 },
    proofs: []
  },
  {
    id: '3',
    name: 'School Building Renovation',
    description: 'Complete renovation of primary school building',
    status: 'delayed',
    progress: 40,
    budget: 800000,
    spent: 320000,
    startDate: '2024-02-01',
    deadline: '2024-05-31',
    assignedWorker: 'Priya Sharma',
    location: { lat: 27.5706, lng: 80.4951 },
    proofs: []
  },
  {
    id: '4',
    name: 'Digital Literacy Center',
    description: 'Setting up computer lab and training facility',
    status: 'not-started',
    progress: 0,
    budget: 300000,
    spent: 0,
    startDate: '2024-04-01',
    deadline: '2024-08-31',
    location: { lat: 27.5706, lng: 80.4951 },
    proofs: []
  }
];

export const mockComplaints: Complaint[] = [
  {
    id: '1',
    title: 'Water Supply Disruption',
    description: 'No water supply for the past 3 days in Ward 2',
    category: 'water',
    status: 'in-progress',
    priority: 'urgent',
    reportedBy: 'Sunita Devi',
    reportedDate: '2024-01-10',
    village: 'Rampur',
    location: { lat: 27.5706, lng: 80.4951 },
    assignedTo: 'Arjun Singh'
  },
  {
    id: '2',
    title: 'Street Light Not Working',
    description: 'Multiple street lights are not functioning on Main Road',
    category: 'electricity',
    status: 'open',
    priority: 'medium',
    reportedBy: 'Ram Kumar',
    reportedDate: '2024-01-08',
    village: 'Rampur'
  },
  {
    id: '3',
    title: 'Road Pothole Issue',
    description: 'Large potholes making transportation difficult',
    category: 'roads',
    status: 'resolved',
    priority: 'high',
    reportedBy: 'Meera Singh',
    reportedDate: '2024-01-05',
    village: 'Rampur',
    assignedTo: 'Local PWD'
  },
  {
    id: '4',
    title: 'Garbage Collection Problem',
    description: 'Irregular garbage collection causing sanitation issues',
    category: 'sanitation',
    status: 'open',
    priority: 'high',
    reportedBy: 'Ramesh Gupta',
    reportedDate: '2024-01-12',
    village: 'Rampur'
  }
];

export const mockWorkerStats: WorkerStats[] = [
  {
    id: '1',
    workerId: '3',
    totalUploads: 45,
    verifiedUploads: 42,
    accountabilityScore: 93,
    badges: [
      { id: '1', name: 'Quality Work', description: 'Uploaded 40+ verified proofs', icon: '🏆', earnedDate: '2024-01-01' },
      { id: '2', name: 'Timely Delivery', description: 'Completed 10 projects on time', icon: '⏰', earnedDate: '2024-01-15' }
    ],
    rank: 1,
    tasksCompleted: 12,
    tasksOverdue: 1
  },
  {
    id: '2',
    workerId: '4',
    totalUploads: 38,
    verifiedUploads: 35,
    accountabilityScore: 89,
    badges: [
      { id: '3', name: 'Community Hero', description: 'High community satisfaction', icon: '🌟', earnedDate: '2024-01-20' }
    ],
    rank: 2,
    tasksCompleted: 10,
    tasksOverdue: 0
  }
];

export const mockDashboardStats: DashboardStats = {
  totalVillages: 4,
  totalProjects: 16,
  completedProjects: 8,
  totalComplaints: 24,
  resolvedComplaints: 15,
  totalWorkers: 12,
  budgetAllocated: 5000000,
  budgetSpent: 3250000
};