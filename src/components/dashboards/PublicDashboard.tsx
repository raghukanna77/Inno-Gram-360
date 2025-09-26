import React, { useState } from 'react';
import { 
  MessageSquare, 
  Vote, 
  BarChart3, 
  Plus,
  MapPin,
  Camera,
  Phone,
  MessageCircle,
  ThumbsUp,
  Star
} from 'lucide-react';
import { StatCard } from '../common/StatCard';
import { Modal } from '../common/Modal';
import { ProgressChart } from '../charts/ProgressChart';
import { useLanguage } from '../../context/LanguageContext';
import { mockProjects, mockComplaints } from '../../data/mockData';

interface PublicDashboardProps {
  activeTab: string;
}

export const PublicDashboard: React.FC<PublicDashboardProps> = ({ activeTab }) => {
  const { t } = useLanguage();
  const [complaintModalOpen, setComplaintModalOpen] = useState(false);
  const [voteModalOpen, setVoteModalOpen] = useState(false);
  
  // Filter projects for current user's village (Rampur)
  const localProjects = mockProjects.slice(0, 3);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Local Projects"
          value={localProjects.length}
          icon={BarChart3}
          color="blue"
        />
        <StatCard
          title="My Complaints"
          value="2"
          icon={MessageSquare}
          color="yellow"
        />
        <StatCard
          title="Resolved Issues"
          value="5"
          icon={MessageCircle}
          color="green"
        />
        <StatCard
          title="Village Rating"
          value="4.2"
          icon={Star}
          color="purple"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            onClick={() => setComplaintModalOpen(true)}
            className="flex items-center justify-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
          >
            <Plus className="h-5 w-5 text-red-600" />
            <span className="font-medium text-red-700">{t('submitComplaint')}</span>
          </button>
          
          <button 
            onClick={() => setVoteModalOpen(true)}
            className="flex items-center justify-center space-x-2 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Vote className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-700">{t('communityVoting')}</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
            <Phone className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-700">USSD: *123#</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
            <MessageCircle className="h-5 w-5 text-purple-600" />
            <span className="font-medium text-purple-700">SMS: 9876543210</span>
          </button>
        </div>
      </div>

      {/* Project Progress */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rampur Village Progress</h3>
        <ProgressChart
          title=""
          data={[
            { label: 'Water Supply', value: 65, total: 100, color: '#3B82F6' },
            { label: 'School Renovation', value: 40, total: 100, color: '#F59E0B' },
            { label: 'Street Lighting', value: 100, total: 100, color: '#10B981' }
          ]}
        />
      </div>

      {/* Community Announcements */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('localNews')} & Announcements</h3>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="font-medium text-blue-900">Village Council Meeting</p>
            <p className="text-sm text-blue-700">Next meeting scheduled for Jan 20, 2024 at 6 PM</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="font-medium text-green-900">Water Supply Restored</p>
            <p className="text-sm text-green-700">Ward 2 water supply issue has been resolved</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg">
            <p className="font-medium text-yellow-900">Road Maintenance Notice</p>
            <p className="text-sm text-yellow-700">Main road repair work will begin next week</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('projectProgress')} - Rampur</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {localProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'completed' ? 'bg-green-100 text-green-800' :
                project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                project.status === 'delayed' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
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
                <span className="text-gray-600">Expected Completion:</span>
                <span className="font-medium">{new Date(project.deadline).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-200">
              <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">View on Map</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderComplaints = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('complaints')}</h2>
        <button 
          onClick={() => setComplaintModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>{t('submitComplaint')}</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative Ways to Report Issues</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">USSD</h4>
            <p className="text-sm text-gray-600">Dial *123# from any phone</p>
            <p className="text-xs text-gray-500 mt-1">Works without internet</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">SMS</h4>
            <p className="text-sm text-gray-600">Send to: 9876543210</p>
            <p className="text-xs text-gray-500 mt-1">Format: WATER 1 (issue + ward)</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Phone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900">IVR</h4>
            <p className="text-sm text-gray-600">Call: 1800-123-456</p>
            <p className="text-xs text-gray-500 mt-1">Available in local language</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {mockComplaints
          .filter(complaint => complaint.reportedBy === 'Sunita Devi')
          .map((complaint) => (
            <div key={complaint.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    complaint.priority === 'urgent' ? 'bg-red-100 text-red-600' :
                    complaint.priority === 'high' ? 'bg-orange-100 text-orange-600' :
                    complaint.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                    <p className="text-sm text-gray-600">#{complaint.id} | {complaint.category}</p>
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
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{complaint.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Reported: {new Date(complaint.reportedDate).toLocaleDateString()}</span>
                {complaint.assignedTo && (
                  <span>Assigned to: {complaint.assignedTo}</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const renderVoting = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t('communityVoting')}</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Polls</h3>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                Which project should be prioritized next?
              </h4>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="priority" value="health" className="text-blue-600" />
                    <span>Community Health Center</span>
                  </label>
                  <span className="text-sm text-gray-600">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '45%' }} />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="priority" value="sports" className="text-blue-600" />
                    <span>Sports Complex</span>
                  </label>
                  <span className="text-sm text-gray-600">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-green-600 rounded-full" style={{ width: '30%' }} />
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="priority" value="park" className="text-blue-600" />
                    <span>Children's Park</span>
                  </label>
                  <span className="text-sm text-gray-600">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '25%' }} />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">152 votes | Ends in 3 days</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Vote Now
                </button>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                Rate the recent road repair work
              </h4>
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-6 w-6 text-yellow-400 cursor-pointer hover:text-yellow-500" 
                    fill="currentColor"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Average: 4.2/5 (89 ratings)</span>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Submit Rating
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Satisfaction Survey</h3>
          <p className="text-gray-600 mb-4">
            Help us understand how satisfied you are with the development work in Rampur.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overall satisfaction with village development
              </label>
              <div className="flex items-center space-x-4">
                {['Very Poor', 'Poor', 'Average', 'Good', 'Excellent'].map((rating, index) => (
                  <label key={rating} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="satisfaction"
                      value={index + 1}
                      className="text-blue-600"
                    />
                    <span className="text-sm">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Submit Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocalNews = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">{t('localNews')} & Updates</h2>
      
      <div className="space-y-4">
        <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
              Development Update
            </span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Water Supply Project Reaches 65% Completion
          </h3>
          <p className="text-gray-700 mb-3">
            The community water supply system project has made significant progress with bore well 
            installation completed and distribution network 65% finished. The project is expected 
            to be completed by June 2024.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>12</span>
              </button>
              <span>3 comments</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Read more
            </button>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
              Success Story
            </span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            All Solar Street Lights Now Operational
          </h3>
          <p className="text-gray-700 mb-3">
            The solar street lighting project has been successfully completed with all 50 lights 
            installed and tested. The village now has 100% street lighting coverage.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>25</span>
              </button>
              <span>8 comments</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Read more
            </button>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
              Announcement
            </span>
            <span className="text-sm text-gray-500">3 days ago</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Village Council Meeting - January 20th
          </h3>
          <p className="text-gray-700 mb-3">
            The monthly village council meeting is scheduled for January 20th at 6:00 PM at the 
            community center. All villagers are invited to participate and discuss ongoing projects.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <button className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>8</span>
              </button>
              <span>2 comments</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Read more
            </button>
          </div>
        </article>
      </div>
    </div>
  );

  const renderComplaintModal = () => (
    <Modal
      isOpen={complaintModalOpen}
      onClose={() => setComplaintModalOpen(false)}
      title={t('submitComplaint')}
      size="lg"
    >
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Complaint Category
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option value="water">{t('water')}</option>
            <option value="electricity">{t('electricity')}</option>
            <option value="roads">{t('roads')}</option>
            <option value="sanitation">{t('sanitation')}</option>
            <option value="other">{t('other')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Brief description of the issue"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Detailed Description
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Provide detailed information about the issue..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Priority Level
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
            <option value="low">{t('low')}</option>
            <option value="medium">{t('medium')}</option>
            <option value="high">{t('high')}</option>
            <option value="urgent">{t('urgent')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Photo (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Click to upload photo</p>
            <input type="file" accept="image/*" className="hidden" />
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => setComplaintModalOpen(false)}
            className="flex-1 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            {t('cancel')}
          </button>
          <button
            type="submit"
            onClick={() => setComplaintModalOpen(false)}
            className="flex-1 py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            {t('submit')}
          </button>
        </div>
      </form>
    </Modal>
  );

  const renderVoteModal = () => (
    <Modal
      isOpen={voteModalOpen}
      onClose={() => setVoteModalOpen(false)}
      title={t('communityVoting')}
      size="md"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Which project should be prioritized next?
        </h3>
        
        <div className="space-y-3">
          <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <input type="radio" name="vote" value="health" className="text-blue-600" />
            <div>
              <p className="font-medium">Community Health Center</p>
              <p className="text-sm text-gray-600">Basic healthcare facility with pharmacy</p>
            </div>
          </label>
          
          <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <input type="radio" name="vote" value="sports" className="text-blue-600" />
            <div>
              <p className="font-medium">Sports Complex</p>
              <p className="text-sm text-gray-600">Multi-purpose sports facility for youth</p>
            </div>
          </label>
          
          <label className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
            <input type="radio" name="vote" value="park" className="text-blue-600" />
            <div>
              <p className="font-medium">Children's Park</p>
              <p className="text-sm text-gray-600">Safe playground with modern equipment</p>
            </div>
          </label>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            onClick={() => setVoteModalOpen(false)}
            className="flex-1 py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            {t('cancel')}
          </button>
          <button
            onClick={() => setVoteModalOpen(false)}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Cast Vote
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
          {renderComplaintModal()}
          {renderVoteModal()}
        </>
      );
    case 'projects':
      return renderProjects();
    case 'complaints':
      return (
        <>
          {renderComplaints()}
          {renderComplaintModal()}
        </>
      );
    case 'voting':
      return (
        <>
          {renderVoting()}
          {renderVoteModal()}
        </>
      );
    case 'local-news':
      return renderLocalNews();
    default:
      return (
        <>
          {renderOverview()}
          {renderComplaintModal()}
          {renderVoteModal()}
        </>
      );
  }
};