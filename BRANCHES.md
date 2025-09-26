# Branch Management Guide

## Available Branches

- **main** - Production-ready code, protected branch
- **kannan** - Kannan's development branch
- **miruthula** - Miruthula's development branch  
- **nikitha** - Nikitha's development branch
- **olive** - Olive's development branch
- **britto** - Britto's development branch

## Workflow for Team Members

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/raghukanna77/Inno-Gram-360.git
cd Inno-Gram-360

# Switch to your branch
git checkout kannan          # For Kannan
git checkout miruthula       # For Miruthula
git checkout nikitha         # For Nikitha
git checkout olive           # For Olive
git checkout britto          # For Britto

# Install dependencies
npm install
```

### Daily Development Workflow
```bash
# Start your work day - sync with main
git checkout main
git pull origin main
git checkout your-branch-name
git merge main

# Make your changes and commit
git add .
git commit -m "Feature: description of changes"

# Push your changes
git push origin your-branch-name
```

### Creating Pull Requests
1. Push your branch to GitHub
2. Go to GitHub repository
3. Click "Compare & pull request"
4. Set base branch to `main`
5. Add description of changes
6. Request review from team members
7. Merge after approval

## Branch Responsibilities

- **Kannan**: Authentication & User Management
- **Miruthula**: Dashboard UI Components
- **Nikitha**: Data Analytics & Charts
- **Olive**: Government Services Integration
- **Britto**: Worker & Authority Features

## Rules
- Never push directly to `main`
- Always create pull requests for merging
- Test your code before pushing
- Keep commits small and focused
- Use descriptive commit messages
