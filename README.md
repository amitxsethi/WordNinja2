# WordNinja - Vocabulary Learning Game

A comprehensive React-based vocabulary learning application designed specifically for children aged 11 and up. WordNinja combines fun games, progress tracking, and badge rewards to make vocabulary learning engaging and effective.

## 🎯 Features

### Core Learning Features
- **Multiple Game Types**: Synonym, antonym, definition, and sentence completion challenges
- **Age-Appropriate Vocabulary**: Carefully curated words suitable for 11+ students
- **Sample Sentences**: Contextual learning with real-world examples
- **Difficulty Levels**: Easy, medium, and hard words to match learning pace

### Gamification Elements
- **Badge System**: 12 unique badges to earn through different achievements
- **Progress Tracking**: Detailed statistics and performance analytics
- **Streak Tracking**: Daily learning streaks to encourage consistency
- **Score System**: Points-based scoring with accuracy tracking

### Practice Modes
- **Flashcard Mode**: Interactive cards with definitions, synonyms, and antonyms
- **Quiz Mode**: Multiple choice questions for active learning
- **Focused Practice**: Target words you got wrong or find difficult
- **Mixed Challenges**: Random question types for comprehensive practice

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amitxsethi/WordNinja2.git
   cd WordNinja2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
```

## 🎮 How to Play

### Game Types

1. **Synonym Challenge**
   - Find words that mean the same thing
   - Multiple choice format with 4 options
   - 30-second timer per question

2. **Antonym Battle**
   - Find words that mean the opposite
   - Tests understanding of word relationships
   - Progressive difficulty levels

3. **Definition Master**
   - Match words with their meanings
   - Clear, age-appropriate definitions
   - Contextual learning approach

4. **Sentence Builder**
   - Complete sentences with the correct word
   - Real-world usage examples
   - Advanced vocabulary practice

5. **Mixed Challenge**
   - All question types combined
   - Tests comprehensive vocabulary knowledge
   - Variable difficulty levels

### Practice Modes

1. **Flashcard Mode**
   - Interactive word cards
   - Show/hide definitions
   - Synonyms and antonyms display
   - Sample sentence context

2. **Quiz Mode**
   - Multiple choice questions
   - Immediate feedback
   - Score tracking
   - Progress indicators

### Badge System

**Achievement Badges**
- First Steps: Complete your first game
- Speed Demon: Answer 5 questions in under 2 minutes
- Vocabulary Expert: Learn 50 words

**Score Badges**
- Word Warrior: Score 100 points in a single game
- Perfect Score: Get 100% accuracy in any game

**Streak Badges**
- Streak Master: Maintain a 7-day streak
- Consistent Learner: Play games for 10 consecutive days

**Special Badges**
- Synonym Master: Complete 5 synonym challenges with 90%+ accuracy
- Antonym Champion: Complete 5 antonym challenges with 90%+ accuracy
- Definition Guru: Complete 5 definition challenges with 90%+ accuracy
- Sentence Builder: Complete 5 sentence challenges with 90%+ accuracy
- Word Ninja Master: Earn all other badges

## 📊 Progress Tracking

### Statistics Dashboard
- Total score and accuracy percentage
- Games played and current streak
- Words learned vs. incorrect words
- Average response time
- Category-wise progress

### Performance Analytics
- Recent game history
- Accuracy trends over time
- Difficulty level performance
- Time-based improvements

### Learning Insights
- Words that need more practice
- Strongest and weakest categories
- Recommended practice areas
- Personalized learning tips

## 🛠️ Technical Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation
- **Build Tool**: Create React App with TypeScript template

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx     # Navigation component
│   └── GameSession.tsx # Game logic component
├── pages/              # Main page components
│   ├── Home.tsx       # Landing page
│   ├── VocabularyGame.tsx # Game selection
│   ├── Progress.tsx   # Progress tracking
│   ├── Badges.tsx     # Badge collection
│   └── Practice.tsx   # Practice modes
├── data/               # Static data
│   └── vocabulary.ts   # Word definitions and data
├── types/              # TypeScript type definitions
│   └── index.ts       # App-wide types
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── index.css           # Global styles with Tailwind
```

## 🎨 Design Features

### User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Color-Coded Elements**: Visual distinction for different game types
- **Progress Indicators**: Clear feedback on learning progress

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **High Contrast**: Readable text and color combinations
- **Responsive Typography**: Scalable text sizes

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

### Deploy to Netlify/Vercel
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons
- **Educational Community**: For vocabulary research and age-appropriate content

## 📞 Support

If you have any questions or need help with the application, please:

1. Check the [Issues](https://github.com/amitxsethi/WordNinja2/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🎯 Future Enhancements

- [ ] User accounts and progress persistence
- [ ] Multiplayer challenges
- [ ] Custom word lists
- [ ] Audio pronunciations
- [ ] Offline mode support
- [ ] Teacher dashboard
- [ ] Advanced analytics
- [ ] Mobile app version

---

**Happy Learning! 🎓✨** 