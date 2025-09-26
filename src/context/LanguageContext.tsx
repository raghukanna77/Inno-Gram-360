import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Common
    'login': 'Login',
    'logout': 'Logout',
    'dashboard': 'Dashboard',
    'profile': 'Profile',
    'settings': 'Settings',
    'search': 'Search',
    'filter': 'Filter',
    'export': 'Export',
    'upload': 'Upload',
    'submit': 'Submit',
    'cancel': 'Cancel',
    'save': 'Save',
    'edit': 'Edit',
    'delete': 'Delete',
    'view': 'View',
    'close': 'Close',
    'loading': 'Loading...',
    
    // Authentication
    'email': 'Email',
    'password': 'Password',
    'welcome': 'Welcome',
    'loginSuccess': 'Login successful',
    'loginError': 'Invalid credentials',
    
    // Government Dashboard
    'govDashboard': 'Government Dashboard',
    'totalVillages': 'Total Villages',
    'totalProjects': 'Total Projects',
    'completedProjects': 'Completed Projects',
    'budgetOverview': 'Budget Overview',
    'resourceAllocation': 'Resource Allocation',
    'performanceMetrics': 'Performance Metrics',
    
    // Authority Dashboard
    'authDashboard': 'Authority Dashboard',
    'dailyUpdates': 'Daily Updates',
    'escalations': 'Escalations',
    'workerAccountability': 'Worker Accountability',
    'pendingApprovals': 'Pending Approvals',
    
    // Worker Dashboard
    'workerDashboard': 'Worker Dashboard',
    'myTasks': 'My Tasks',
    'uploadProof': 'Upload Proof',
    'accountabilityScore': 'Accountability Score',
    'badges': 'Badges',
    'leaderboard': 'Leaderboard',
    
    // Public Dashboard
    'publicDashboard': 'Public Dashboard',
    'projectProgress': 'Project Progress',
    'submitComplaint': 'Submit Complaint',
    'communityVoting': 'Community Voting',
    'localNews': 'Local News',
    
    // Projects
    'projects': 'Projects',
    'projectName': 'Project Name',
    'status': 'Status',
    'progress': 'Progress',
    'budget': 'Budget',
    'deadline': 'Deadline',
    'inProgress': 'In Progress',
    'completed': 'Completed',
    'delayed': 'Delayed',
    'notStarted': 'Not Started',
    
    // Complaints
    'complaints': 'Complaints',
    'complaintTitle': 'Complaint Title',
    'category': 'Category',
    'priority': 'Priority',
    'reportedDate': 'Reported Date',
    'water': 'Water',
    'electricity': 'Electricity',
    'roads': 'Roads',
    'sanitation': 'Sanitation',
    'other': 'Other',
    
    // Status
    'open': 'Open',
    'resolved': 'Resolved',
    'closed': 'Closed',
    'low': 'Low',
    'medium': 'Medium',
    'high': 'High',
    'urgent': 'Urgent',
  },
  hi: {
    // Common
    'login': 'लॉगिन',
    'logout': 'लॉग आउट',
    'dashboard': 'डैशबोर्ड',
    'profile': 'प्रोफाइल',
    'settings': 'सेटिंग्स',
    'search': 'खोजें',
    'filter': 'फिल्टर',
    'export': 'निर्यात',
    'upload': 'अपलोड',
    'submit': 'जमा करें',
    'cancel': 'रद्द करें',
    'save': 'सेव करें',
    'edit': 'संपादित करें',
    'delete': 'हटाएं',
    'view': 'देखें',
    'close': 'बंद करें',
    'loading': 'लोड हो रहा है...',
    
    // Authentication
    'email': 'ईमेल',
    'password': 'पासवर्ड',
    'welcome': 'स्वागत',
    'loginSuccess': 'सफल लॉगिन',
    'loginError': 'गलत जानकारी',
    
    // Government Dashboard
    'govDashboard': 'सरकारी डैशबोर्ड',
    'totalVillages': 'कुल गाँव',
    'totalProjects': 'कुल परियोजनाएं',
    'completedProjects': 'पूर्ण परियोजनाएं',
    'budgetOverview': 'बजट अवलोकन',
    'resourceAllocation': 'संसाधन आवंटन',
    'performanceMetrics': 'प्रदर्शन मेट्रिक्स',
    
    // Authority Dashboard
    'authDashboard': 'प्राधिकरण डैशबोर्ड',
    'dailyUpdates': 'दैनिक अपडेट',
    'escalations': 'वृद्धि',
    'workerAccountability': 'कर्मचारी जवाबदेही',
    'pendingApprovals': 'लंबित अनुमोदन',
    
    // Worker Dashboard
    'workerDashboard': 'कार्यकर्ता डैशबोर्ड',
    'myTasks': 'मेरे कार्य',
    'uploadProof': 'प्रमाण अपलोड करें',
    'accountabilityScore': 'जवाबदेही स्कोर',
    'badges': 'बैज',
    'leaderboard': 'लीडरबोर्ड',
    
    // Public Dashboard
    'publicDashboard': 'सार्वजनिक डैशबोर्ड',
    'projectProgress': 'परियोजना प्रगति',
    'submitComplaint': 'शिकायत दर्ज करें',
    'communityVoting': 'सामुदायिक मतदान',
    'localNews': 'स्थानीय समाचार',
    
    // Projects
    'projects': 'परियोजनाएं',
    'projectName': 'परियोजना का नाम',
    'status': 'स्थिति',
    'progress': 'प्रगति',
    'budget': 'बजट',
    'deadline': 'समय सीमा',
    'inProgress': 'प्रगति में',
    'completed': 'पूर्ण',
    'delayed': 'विलंबित',
    'notStarted': 'शुरू नहीं हुई',
    
    // Complaints
    'complaints': 'शिकायतें',
    'complaintTitle': 'शिकायत का शीर्षक',
    'category': 'श्रेणी',
    'priority': 'प्राथमिकता',
    'reportedDate': 'रिपोर्ट की तारीख',
    'water': 'पानी',
    'electricity': 'बिजली',
    'roads': 'सड़कें',
    'sanitation': 'स्वच्छता',
    'other': 'अन्य',
    
    // Status
    'open': 'खुला',
    'resolved': 'हल',
    'closed': 'बंद',
    'low': 'कम',
    'medium': 'मध्यम',
    'high': 'उच्च',
    'urgent': 'तत्काल',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'hi';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'hi' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};