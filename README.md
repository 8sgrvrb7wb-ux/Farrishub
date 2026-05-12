# FarrisHub 🎮

**Educational Games Website with Safe Search Engine for Students**

FarrisHub is a comprehensive learning platform designed for school students. It combines interactive educational games with a safe, curated search engine to create a distraction-free learning environment.

## ✨ Features

### 🎮 Educational Games
- **Math Master** - Arithmetic and mathematical reasoning
- **Vocabulary Quest** - Word definitions and language skills
- **Science Trivia** - Scientific facts and knowledge
- **Geography Genius** - World geography and capitals

### 🔍 Safe Search Engine
- Curated educational resources only
- 6 subject categories: Math, Science, History, Geography, Coding, English
- Ad-free and distraction-free
- Safe for all school environments

### 💡 User Experience
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Instant scoring and feedback
- No external dependencies
- Easy-to-use interface

## 🚀 Quick Start

### Requirements
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (optional - can work offline)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/8sgrvrb7wb-ux/farrishub.git
cd farrishub
```

2. Open in browser:
```bash
# Option 1: Direct open
open index.html

# Option 2: Using Python (creates local server)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Using Node.js
npx http-server
```

## 📁 Project Structure

```
farrishub/
├── index.html          # Main website structure
├── styles.css          # Responsive design and animations
├── app.js              # Navigation and app logic
├── games.js            # Game data and game logic
├── search.js           # Search engine functionality
├── README.md           # This file
├── FEATURES.md         # Roadmap and planned features
└── .gitignore          # Git configuration
```

## 🎯 How to Use

### Playing Games
1. Click **"Play Games"** on the homepage
2. Select a game (Math, Vocabulary, Science, or Geography)
3. Answer 5 questions
4. View your score and feedback
5. Play again or exit

### Using Search
1. Click **"Search"** on the homepage
2. Enter search keywords or click a category button
3. Browse curated educational results
4. Click "Learn More" to access resources

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design, animations, gradients
- **Vanilla JavaScript** - No frameworks required
- **Pure Frontend** - No backend server needed

## 📊 Game Questions

### Math Master
- Basic arithmetic operations
- Percentages and divisions
- Multi-step problems

### Vocabulary Quest
- Word definitions
- Contextual usage
- Synonym understanding

### Science Trivia
- Chemistry and physics
- Biology and anatomy
- Space and astronomy

### Geography Genius
- World capitals
- Country locations
- Geographic features

## 🌐 Search Categories

1. **Math** - Khan Academy, Math is Fun, Wolfram Alpha
2. **Science** - NASA, Crash Course, PBS Learning
3. **History** - History.com, World History Encyclopedia
4. **Geography** - National Geographic, Google Earth
5. **Coding** - Codecademy, Code.org, Free Code Camp
6. **English** - Grammarly, Purdue OWL, SparkNotes

## 🎨 Design Features

- **Color Scheme**: Purple gradient theme (#667eea to #764ba2)
- **Typography**: Clean, readable fonts (Segoe UI)
- **Responsive**: Mobile-first design approach
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: High contrast, clear buttons

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Safety

- No data collection
- No user tracking
- No cookies
- No advertisements
- Safe for school networks
- Age-appropriate content only

## 🚀 Future Roadmap

See [FEATURES.md](FEATURES.md) for:
- User accounts and authentication
- Progress tracking and analytics
- Leaderboards and achievements
- Teacher dashboard
- More games
- Mobile app
- Real search API integration

## 👨‍💻 Development

### Adding a New Game

1. Add game data to `gamesData` in `games.js`:
```javascript
gameName: {
    title: '🎮 Game Title',
    description: 'Description',
    questions: [
        {
            question: 'Your question?',
            options: ['A', 'B', 'C', 'D'],
            correct: 0
        }
    ]
}
```

2. Add game card to `index.html`:
```html
<div class="game-card">
    <div class="game-icon">🎮</div>
    <h3>Game Name</h3>
    <p>Description</p>
    <button class="btn btn-small" onclick="startGame('gameName')">Play Now</button>
</div>
```

### Adding Search Categories

1. Add to `searchDatabase` in `search.js`:
```javascript
categoryName: [
    { title: 'Resource', description: 'Description', url: '#' }
]
```

2. Add category button to `index.html`

## 📝 License

Open source - feel free to use, modify, and share!

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions

## 🙏 Credits

FarrisHub was created as an educational platform for students.

---

**Made with ❤️ for education**

Happy learning! 🎓✨
