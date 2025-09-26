# Smart Adharsh (Inno-Gram-360)

A comprehensive digital platform for efficient governance and public service management built with Flutter for cross-platform deployment.

## Features

- **Multi-role Dashboard**: Separate interfaces for Government, Authority, Worker, and Public users
- **Real-time Analytics**: Progress tracking and performance metrics with Firebase integration
- **Multi-language Support**: Accessible in multiple languages using Flutter Intl
- **Secure Authentication**: Role-based access control with Firebase Auth
- **Cross-platform**: Single codebase for Android, iOS, Web, and Desktop
- **AI-powered**: Document scanning, text recognition, and anomaly detection
- **Blockchain Integration**: Smart contracts and IPFS for secure document storage
- **Voice Features**: Speech-to-text for accessibility and reporting

## Tech Stack

### App Framework & Frontend
- **Flutter**: Cross-platform development for Android, iOS, Web, and Desktop
- **Dart**: Primary programming language for Flutter applications
- **Riverpod/Provider/Bloc**: State management for scalable interactions
- **Flutter Intl/Easy Localization**: Multi-language support and internationalization

### Backend & Database
- **Firebase**: Real-time database, authentication, cloud functions, and messaging
- **Firestore/Realtime Database**: Secure NoSQL cloud data storage
- **Firebase Authentication**: Email/OTP/social login for users and officials
- **Cloud Functions**: Serverless backend logic without server management
- **REST API with Node.js/Express**: Advanced backend logic and integrations

### AI & Machine Learning Integration
- **Firebase ML Kit**: On-device document scanning, text recognition, and classification
- **TensorFlow Lite**: Custom machine learning models for on-device inference
- **Natural Language API**: Sentiment analysis and text processing
- **Computer Vision**: Anomaly detection and document verification

### Blockchain & Security
- **web3dart Package**: Ethereum/Polygon smart contract integration
- **IPFS Integration**: Immutable, tamper-proof document storage
- **AES-256 Encryption**: Data protection using Dart's crypto packages
- **TLS/HTTPS**: Secured network traffic and API communication
- **OAuth 2.0**: Multi-factor and role-based authentication

### Communication & Accessibility
- **Twilio/WhatsApp API**: SMS and WhatsApp notifications via HTTPS calls
- **flutter_tts**: Text-to-speech functionality
- **speech_to_text**: Voice reporting and accessibility features
- **Real-time Messaging**: Firebase Cloud Messaging for notifications

### Cloud & DevOps
- **GitHub Actions**: CI/CD for automated builds and deployment
- **Firebase Hosting**: Web app deployment and hosting
- **Google Cloud Functions/AWS Lambda**: Serverless backend functions
- **Play Store/App Store**: Mobile app distribution
- **Docker**: Containerized server logic for hybrid setups

## Why Flutter?

- **Single Codebase**: Develop once, deploy everywhere (Android, iOS, Web, Desktop)
- **Rapid Development**: Fast UI development with hot reload
- **Native Performance**: Compiled to native ARM code for mobile platforms
- **Firebase Integration**: Seamless integration with Google's backend services
- **Cost Effective**: Reduced development and maintenance costs
- **Perfect for Rural Solutions**: Offline-first capabilities and mobile-friendly design

## Getting Started

### Prerequisites

- Flutter SDK (latest stable version)
- Dart SDK (bundled with Flutter)
- Android Studio/VS Code with Flutter plugins
- Firebase CLI for backend setup
- Git for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/raghukanna77/Inno-Gram-360.git
   cd Inno-Gram-360
   ```

2. **Install Flutter dependencies:**
   ```bash
   flutter pub get
   ```

3. **Set up Firebase configuration:**
   ```bash
   # Add your Firebase configuration files:
   # - android/app/google-services.json (Android)
   # - ios/Runner/GoogleService-Info.plist (iOS)
   # - web/firebase-config.js (Web)