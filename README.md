# Recovery Connect - Vanilla HTML/CSS/JavaScript Version

A comprehensive recovery support web application built with pure HTML, CSS, and JavaScript (no frameworks).

## Features

- **Landing Page**: Welcoming homepage with feature overview
- **Authentication**: Login and registration pages
- **Dashboard**: Personalized dashboard with daily inspiration, progress tracking, and quick support access
- **Resources Library**: Tabbed interface with helplines, articles, and coping strategies
- **Support Chat**: Real-time messaging interface with counselors
- **Progress Tracking**: Visual progress tracking with milestones
- **Community**: Placeholder for community features (coming soon)
- **Settings**: Account management and logout functionality

## File Structure

```
vanilla/
├── index.html          # Landing page
├── login.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # Main dashboard
├── resources.html      # Resources library with tabs
├── support.html        # Chat/support interface
├── progress.html       # Progress tracking page
├── community.html      # Community page (placeholder)
├── settings.html       # Settings page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── app.js          # Main JavaScript file
├── images/             # Image assets
└── README.md           # This file
```

## How to Use

1. **Open the application**: Simply open `index.html` in a web browser
2. **Login**: Use any username and password to login (demo mode)
3. **Navigate**: Use the sidebar navigation to explore different sections
4. **Logout**: Click "Settings" → "Sign Out" to logout

## Technical Details

- **No build process required**: Just open HTML files in a browser
- **LocalStorage**: Used for authentication state and user data
- **Responsive Design**: Mobile-friendly layout
- **Modern CSS**: Uses CSS variables for theming
- **Vanilla JavaScript**: No dependencies or frameworks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Demo Credentials

Any username and password combination will work in demo mode.

## Features Overview

### Authentication
- Simple login/register forms
- LocalStorage-based session management
- Protected routes (redirects to login if not authenticated)

### Dashboard
- Welcome message with user's name
- Daily inspirational quotes
- Progress tracking with visual progress bar
- Quick support buttons (call and chat)
- Local events section

### Resources
- **Helplines Tab**: Crisis hotlines and support numbers
- **Articles Tab**: Educational articles about recovery
- **Coping Strategies Tab**: Practical coping techniques

### Support/Chat
- Conversation list with search
- Real-time messaging interface
- Message history
- User and counselor message styling

### Progress
- Current sobriety milestone tracking
- Visual progress bar (75 days / 100 days goal)
- Completed milestones (30 days, 60 days)
- Upcoming milestone (90 days)

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary: #00bcd4;
  --primary-dark: #0097a7;
  --background: #fafafa;
  /* ... more variables */
}
```

### Mock Data
Edit data in `js/app.js`:
- `users`: User profiles
- `dailyQuotes`: Inspirational quotes
- `helplines`: Crisis hotline information
- `articles`: Educational articles
- `conversations`: Chat conversations
- `chatMessages`: Chat message history

## License

This is a demo application for educational purposes.
