import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Target, BookOpen, Award, Star } from 'lucide-react';
import { GameType } from '../types';
import { getRandomWords } from '../data/vocabulary';
import GameSession from '../components/GameSession';

const VocabularyGame: React.FC = () => {
  const [selectedGameType, setSelectedGameType] = useState<GameType | null>(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const gameTypes = [
    {
      type: 'synonym' as GameType,
      title: 'Synonym Challenge',
      description: 'Find words that mean the same thing',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      difficulty: 'Medium'
    },
    {
      type: 'antonym' as GameType,
      title: 'Antonym Battle',
      description: 'Find words that mean the opposite',
      icon: Target,
      color: 'from-red-500 to-red-600',
      difficulty: 'Medium'
    },
    {
      type: 'definition' as GameType,
      title: 'Definition Master',
      description: 'Match words with their meanings',
      icon: Award,
      color: 'from-green-500 to-green-600',
      difficulty: 'Easy'
    },
    {
      type: 'sentence' as GameType,
      title: 'Sentence Builder',
      description: 'Complete sentences with the right word',
      icon: Star,
      color: 'from-purple-500 to-purple-600',
      difficulty: 'Hard'
    },
    {
      type: 'mixed' as GameType,
      title: 'Mixed Challenge',
      description: 'All types of questions mixed together',
      icon: Play,
      color: 'from-orange-500 to-orange-600',
      difficulty: 'Variable'
    }
  ];

  const startGame = (gameType: GameType) => {
    setSelectedGameType(gameType);
    setIsGameStarted(true);
  };

  const endGame = () => {
    setIsGameStarted(false);
    setSelectedGameType(null);
  };

  if (isGameStarted && selectedGameType) {
    return (
      <GameSession
        gameType={selectedGameType}
        words={getRandomWords(10)}
        onGameEnd={endGame}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Your Challenge
        </h1>
        <p className="text-xl text-gray-600">
          Select a game type and start building your vocabulary!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameTypes.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.div
              key={game.type}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => startGame(game.type)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${game.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {game.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {game.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Difficulty: {game.difficulty}
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-primary-600"
                >
                  <Play className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Game Instructions */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            How to Play
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Choose a Game</h4>
              <p className="text-gray-600 text-sm">
                Pick from synonym, antonym, definition, or sentence challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Answer Questions</h4>
              <p className="text-gray-600 text-sm">
                Read carefully and select the best answer from the options
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Earn Points</h4>
              <p className="text-gray-600 text-sm">
                Get points for correct answers and earn badges for your progress
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VocabularyGame; 