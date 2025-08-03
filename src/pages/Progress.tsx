import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Target, Calendar, Star, Award, Clock } from 'lucide-react';

const Progress: React.FC = () => {
  // Mock data - in a real app, this would come from a database
  const progressData = {
    totalScore: 1250,
    gamesPlayed: 15,
    correctAnswers: 89,
    totalAnswers: 120,
    currentStreak: 7,
    longestStreak: 12,
    accuracy: 74,
    averageTime: 18.5,
    wordsLearned: 45,
    wordsIncorrect: 8
  };

  const recentGames = [
    { date: '2024-01-15', type: 'Synonym Challenge', score: 80, accuracy: 80 },
    { date: '2024-01-14', type: 'Antonym Battle', score: 90, accuracy: 90 },
    { date: '2024-01-13', type: 'Definition Master', score: 70, accuracy: 70 },
    { date: '2024-01-12', type: 'Mixed Challenge', score: 85, accuracy: 85 },
    { date: '2024-01-11', type: 'Sentence Builder', score: 75, accuracy: 75 }
  ];

  const categoryProgress = [
    { category: 'Communication', progress: 85, words: 8 },
    { category: 'Character', progress: 92, words: 12 },
    { category: 'Technology', progress: 78, words: 5 },
    { category: 'Social', progress: 88, words: 6 },
    { category: 'Learning', progress: 95, words: 4 }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Your Progress
        </h1>
        <p className="text-xl text-gray-600">
          Track your vocabulary learning journey
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
      >
        <div className="card text-center">
          <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">{progressData.totalScore}</div>
          <div className="text-sm text-gray-600">Total Score</div>
        </div>
        <div className="card text-center">
          <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">{progressData.accuracy}%</div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>
        <div className="card text-center">
          <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">{progressData.currentStreak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        <div className="card text-center">
          <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">{progressData.gamesPlayed}</div>
          <div className="text-sm text-gray-600">Games Played</div>
        </div>
      </motion.div>

      {/* Detailed Stats */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Performance Chart */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
            Performance Overview
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Correct Answers</span>
                <span>{progressData.correctAnswers}/{progressData.totalAnswers}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(progressData.correctAnswers / progressData.totalAnswers) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Words Learned</span>
                <span>{progressData.wordsLearned}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(progressData.wordsLearned / 50) * 100}%` }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Average Time</span>
                <span>{progressData.averageTime}s</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(progressData.averageTime / 30) * 100}%` }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Progress */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
            Category Progress
          </h3>
          <div className="space-y-3">
            {categoryProgress.map((category, index) => (
              <div key={category.category}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{category.category}</span>
                  <span>{category.progress}% ({category.words} words)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-primary-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${category.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Games */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-orange-600" />
          Recent Games
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-600">Date</th>
                <th className="text-left py-2 text-gray-600">Game Type</th>
                <th className="text-left py-2 text-gray-600">Score</th>
                <th className="text-left py-2 text-gray-600">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {recentGames.map((game, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 text-gray-600">{game.date}</td>
                  <td className="py-3 font-medium">{game.type}</td>
                  <td className="py-3">
                    <span className="font-bold text-primary-600">{game.score}</span>
                  </td>
                  <td className="py-3">
                    <span className={`font-bold ${game.accuracy >= 80 ? 'text-green-600' : game.accuracy >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {game.accuracy}%
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Improvement Tips */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8"
      >
        <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tips for Improvement</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Practice Daily</h4>
                <p className="text-gray-600 text-sm">Maintain your streak by playing at least one game per day</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Focus on Weak Areas</h4>
                <p className="text-gray-600 text-sm">Use practice mode to improve words you struggle with</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Read Sample Sentences</h4>
                <p className="text-gray-600 text-sm">Understanding context helps with word retention</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Try Different Game Types</h4>
                <p className="text-gray-600 text-sm">Mix up your practice with various challenge types</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Progress; 