import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, RefreshCw, Check, X, Star } from 'lucide-react';
import { vocabularyData } from '../data/vocabulary';
import { Word } from '../types';

const Practice: React.FC = () => {
  const [selectedWords, setSelectedWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [practiceMode, setPracticeMode] = useState<'flashcards' | 'quiz'>('flashcards');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  // Mock incorrect words - in a real app, this would come from user progress
  const incorrectWords = vocabularyData.slice(0, 5);
  const difficultWords = vocabularyData.filter(word => word.difficulty === 'hard').slice(0, 3);
  const allPracticeWords = [...incorrectWords, ...difficultWords];

  const startPractice = (words: Word[]) => {
    setSelectedWords(words);
    setCurrentWordIndex(0);
    setShowDefinition(false);
    setScore(0);
    setTotalQuestions(words.length);
  };

  const nextWord = () => {
    if (currentWordIndex < selectedWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setShowDefinition(false);
    }
  };

  const previousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
      setShowDefinition(false);
    }
  };

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    nextWord();
  };

  const currentWord = selectedWords[currentWordIndex];

  if (selectedWords.length === 0) {
    return (
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Practice Mode
          </h1>
          <p className="text-xl text-gray-600">
            Focus on words you need to improve
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Incorrect Words */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center mb-4">
              <X className="w-6 h-6 text-red-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Words You Got Wrong</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Practice the words you missed in previous games
            </p>
            <div className="space-y-2 mb-4">
              {incorrectWords.map((word, index) => (
                <div key={word.id} className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
                  <span className="font-medium">{word.word}</span>
                  <span className="text-sm text-gray-500">{word.difficulty}</span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startPractice(incorrectWords)}
              className="btn-primary w-full"
            >
              Practice These Words
            </motion.button>
          </motion.div>

          {/* Difficult Words */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Difficult Words</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Challenge yourself with harder vocabulary
            </p>
            <div className="space-y-2 mb-4">
              {difficultWords.map((word, index) => (
                <div key={word.id} className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                  <span className="font-medium">{word.word}</span>
                  <span className="text-sm text-gray-500">{word.category}</span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startPractice(difficultWords)}
              className="btn-secondary w-full"
            >
              Practice These Words
            </motion.button>
          </motion.div>
        </div>

        {/* All Words Practice */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">All Words Practice</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Practice with all available vocabulary words
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setPracticeMode('flashcards');
                startPractice(allPracticeWords);
              }}
              className="btn-primary"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Flashcard Mode
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setPracticeMode('quiz');
                startPractice(allPracticeWords);
              }}
              className="btn-secondary"
            >
              <Target className="w-5 h-5 mr-2" />
              Quiz Mode
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedWords([])}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Back to Practice Menu
        </motion.button>
        
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            {currentWordIndex + 1} of {selectedWords.length}
          </div>
          {practiceMode === 'quiz' && (
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="font-bold">{score}/{totalQuestions}</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentWordIndex + 1) / selectedWords.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Word Card */}
      <motion.div
        key={currentWordIndex}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        className="card text-center"
      >
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{currentWord.word}</h2>
          <div className="flex justify-center space-x-2 mb-4">
            <span className="badge badge-gold">{currentWord.difficulty}</span>
            <span className="badge badge-silver">{currentWord.category}</span>
          </div>
        </div>

        {practiceMode === 'flashcards' ? (
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDefinition}
              className="btn-primary mb-4"
            >
              {showDefinition ? 'Hide Definition' : 'Show Definition'}
            </motion.button>

            {showDefinition && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Definition</h3>
                  <p className="text-gray-700">{currentWord.definition}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Synonyms</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentWord.synonyms.map((synonym, index) => (
                        <span key={index} className="badge badge-gold">{synonym}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Antonyms</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentWord.antonyms.map((antonym, index) => (
                        <span key={index} className="badge badge-bronze">{antonym}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Sample Sentence</h3>
                  <p className="text-gray-700 italic">"{currentWord.sampleSentence}"</p>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                What does "{currentWord.word}" mean?
              </h3>
              <div className="grid gap-3">
                {[
                  currentWord.definition,
                  'A completely different definition',
                  'Another incorrect definition',
                  'Yet another wrong definition'
                ].map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuizAnswer(option === currentWord.definition)}
                    className="p-4 text-left border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={previousWord}
            disabled={currentWordIndex === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextWord}
            disabled={currentWordIndex === selectedWords.length - 1}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </motion.button>
        </div>
      </motion.div>

      {/* Quiz Results */}
      {practiceMode === 'quiz' && currentWordIndex === selectedWords.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card text-center mt-6"
        >
          <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Practice Complete!</h3>
          <p className="text-xl text-gray-600 mb-4">
            You got {score} out of {totalQuestions} correct
          </p>
          <div className="text-3xl font-bold text-primary-600 mb-4">
            {Math.round((score / totalQuestions) * 100)}%
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedWords([])}
            className="btn-primary"
          >
            Back to Practice Menu
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Practice; 