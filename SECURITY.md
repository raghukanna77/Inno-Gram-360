# Security Guidelines

## Repository Access Control

### Current Setup
- Repository: `https://github.com/raghukanna77/Inno-Gram-360`
- Main branch: Protected for production code
- Team branches: Individual development branches
- Project template: React TypeScript with Vite

### Team Access Levels
- **Admin**: raghukanna77 (repository owner)
- **Write Access**: Kannan, Miruthula, Nikitha, Olive, Britto
- **Read Access**: As configured by repository visibility

### To Change Repository Visibility:

1. Go to repository settings: `https://github.com/raghukanna77/Inno-Gram-360/settings`
2. Scroll to "Danger Zone"
3. Click "Change repository visibility"
4. Choose "Private" or "Public"

### Security Best Practices
- Never commit sensitive data (API keys, passwords)
- Use environment variables for secrets
- Keep dependencies updated
- Review pull requests before merging
- Use branch protection rules

### Environment Variables
Add to `.env` (never commit this file):
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_key
```

### Development Configuration
- Main config stored in `.main/` directory
- Template: React TypeScript with modern tooling
- Framework: React 18 with TypeScript support
