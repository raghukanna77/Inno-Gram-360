# Smart Adharsh (Inno-Gram-360)

A comprehensive digital platform for efficient governance and public service management built with React TypeScript for web deployment.

## Features

- **Multi-role Dashboard**: Separate interfaces for Government, Authority, Worker, and Public users
- **Real-time Analytics**: Progress tracking and performance metrics with Firebase integration
- **Multi-language Support**: Accessible in multiple languages using React context
- **Secure Authentication**: Role-based access control with Firebase Auth
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for beautiful, consistent design
- **Real-time Updates**: Live data synchronization across user sessions

## Technologies Used

### Frontend
- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful, customizable icons

### Backend & Database
- **Firebase**: Backend-as-a-Service with Firestore NoSQL database
- **Firebase Auth**: Authentication and user management
- **Firebase Firestore**: Real-time NoSQL database
- **Firebase Storage**: File storage and management
- **Firebase Analytics**: User behavior tracking

### Build Tools & Development
- **Create React App**: Zero-configuration React toolchain
- **ESLint**: Code linting and quality checks
- **PostCSS**: CSS processing with Autoprefixer

### State Management
- **React Context**: Built-in state management for auth and language
- **Custom Hooks**: Reusable logic components

### Development & Deployment
- **GitHub**: Version control and collaboration
- **Firebase Hosting**: Fast and secure web hosting
- **GitHub Actions**: CI/CD pipeline (optional)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git for version control
- Firebase project for backend services

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/raghukanna77/Inno-Gram-360.git
   cd Inno-Gram-360
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```bash
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Firebase Setup

This is a **web application** using Firebase Web SDK, not Android or iOS.

### Web Configuration Steps:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (`innogram-360`)
3. Click "Add app" → Web app (</> icon)
4. Register your app and copy the config
5. Update your `.env` file with the configuration values
6. Enable Authentication in Firebase Console
7. Enable Firestore Database
8. Set up security rules as needed

### Firebase Features Used:
- **Authentication**: Email/password login and registration
- **Firestore**: Real-time NoSQL database for user profiles and data
- **Storage**: File uploads and document storage
- **Analytics**: User behavior tracking (production only)

## Available Scripts

- `npm start` - Runs the app in development mode with hot reload
- `npm build` - Builds the app for production deployment
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   │   ├── LoginForm.tsx
│   │   ├── SignUpForm.tsx
│   │   └── AuthWrapper.tsx
│   ├── charts/         # Data visualization components
│   │   ├── ProgressChart.tsx
│   │   └── SimpleBarChart.tsx
│   ├── common/         # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatCard.tsx
│   ├── dashboards/     # Role-specific dashboards
│   │   ├── AuthorityDashboard.tsx
│   │   ├── GovernmentDashboard.tsx
│   │   ├── PublicDashboard.tsx
│   │   └── WorkerDashboard.tsx
│   └── layouts/        # Layout components
│       └── DashboardLayout.tsx
├── context/            # React context providers
│   ├── AuthContext.tsx
│   └── LanguageContext.tsx
├── lib/               # Firebase configuration
│   └── firebase.ts
├── data/              # Mock data and constants
│   └── mockData.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── index.css          # Global styles with Tailwind
```

## Team Collaboration

### Branch Structure
- **main**: Production-ready code, protected branch
- **kannan**: Kannan's development branch
- **miruthula**: Miruthula's development branch
- **nikitha**: Nikitha's development branch
- **olive**: Olive's development branch
- **britto**: Britto's development branch

### Development Workflow
1. Clone the repository and switch to your branch
2. Run `npm install` to install dependencies
3. Set up your `.env` file with Firebase configuration
4. Make your changes and test thoroughly
5. Create pull requests for code review
6. Merge to main after approval

### Branch Responsibilities
- **Kannan**: Authentication & User Management
- **Miruthula**: Dashboard UI Components
- **Nikitha**: Data Analytics & Charts
- **Olive**: Government Services Integration
- **Britto**: Worker & Authority Features

## Security Features

- Role-based authentication and authorization
- Secure API communication with Firebase
- Environment variable protection
- Firestore security rules
- Input validation and sanitization
- HTTPS enforcement in production

## Deployment

### Firebase Hosting (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase hosting
firebase init hosting

# Build the app
npm run build

# Deploy to Firebase
firebase deploy
```

### Alternative Hosting Options
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop build folder or GitHub integration
- **Custom Server**: Serve the built files from `/build` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Project Lead**: Kannan Sivakumar
- **Repository**: [Inno-Gram-360](https://github.com/raghukanna77/Inno-Gram-360)
- **Team**: Kannan, Miruthula, Nikitha, Olive, Britto

---

*Built with ❤️ using React & TypeScript with Firebase for efficient governance and public service management.*
