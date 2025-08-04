import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, Check, X, Trophy } from 'lucide-react';
import { Word, GameResult, GameType } from '../types';

interface GameSessionProps {
  gameType: GameType;
  words: Word[];
  onGameEnd: () => void;
}

interface Question {
  word: Word;
  question: string;
  correctAnswer: string;
  options: string[];
  displayOptions: string[];
  type: 'synonym' | 'antonym' | 'definition' | 'sentence';
}

const GameSession: React.FC<GameSessionProps> = ({ gameType, words, onGameEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Helper functions
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getRandomSynonyms = (synonyms: string[], count: number): string[] => {
    const allSynonyms = ['Similar', 'Alike', 'Same', 'Equivalent', 'Comparable'];
    return shuffleArray(allSynonyms).slice(0, count);
  };

  const getRandomAntonyms = (antonyms: string[], count: number): string[] => {
    const allAntonyms = ['Opposite', 'Different', 'Contrary', 'Reverse', 'Inverse'];
    return shuffleArray(allAntonyms).slice(0, count);
  };

  const getRandomDefinitions = (count: number): string[] => {
    const definitions = [
      'A person who is very good at something',
      'To work together with others',
      'Having a strong desire to succeed',
      'Being honest and truthful'
    ];
    return shuffleArray(definitions).slice(0, count);
  };

  const getRandomWords = (count: number): string[] => {
    const words = ['Happy', 'Smart', 'Brave', 'Kind', 'Strong'];
    return shuffleArray(words).slice(0, count);
  };

  // Helper function to normalize text for consistent capitalization
  const normalizeText = (text: string): string => {
    return text.toLowerCase().trim();
  };

  const generateQuestions = (words: Word[], type: GameType): Question[] => {
    return words.map(word => {
      switch (type) {
        case 'synonym':
          const correctSynonym = word.synonyms[0];
          const synonymOptions = [correctSynonym, ...getRandomSynonyms(word.synonyms, 3)];
          const shuffledSynonymOptions = shuffleArray(synonymOptions);
          return {
            word,
            question: `What is a synonym for "${word.word}"?`,
            correctAnswer: normalizeText(correctSynonym),
            options: shuffledSynonymOptions.map(opt => normalizeText(opt)),
            displayOptions: shuffledSynonymOptions,
            type: 'synonym'
          };
        case 'antonym':
          const correctAntonym = word.antonyms[0];
          const antonymOptions = [correctAntonym, ...getRandomAntonyms(word.antonyms, 3)];
          const shuffledAntonymOptions = shuffleArray(antonymOptions);
          return {
            word,
            question: `What is an antonym for "${word.word}"?`,
            correctAnswer: normalizeText(correctAntonym),
            options: shuffledAntonymOptions.map(opt => normalizeText(opt)),
            displayOptions: shuffledAntonymOptions,
            type: 'antonym'
          };
        case 'definition':
          const correctDefinition = word.definition;
          const definitionOptions = [correctDefinition, ...getRandomDefinitions(3)];
          const shuffledDefinitionOptions = shuffleArray(definitionOptions);
          return {
            word,
            question: `What does "${word.word}" mean?`,
            correctAnswer: normalizeText(correctDefinition),
            options: shuffledDefinitionOptions.map(opt => normalizeText(opt)),
            displayOptions: shuffledDefinitionOptions,
            type: 'definition'
          };
        case 'sentence':
          const correctWord = word.word;
          const wordOptions = [correctWord, ...getRandomWords(3)];
          const shuffledWordOptions = shuffleArray(wordOptions);
          return {
            word,
            question: `Complete the sentence: "${word.sampleSentence.replace(word.word, '_____')}"`,
            correctAnswer: normalizeText(correctWord),
            options: shuffledWordOptions.map(opt => normalizeText(opt)),
            displayOptions: shuffledWordOptions,
            type: 'sentence'
          };
        case 'mixed':
          const types = ['synonym', 'antonym', 'definition', 'sentence'] as const;
          const randomType = types[Math.floor(Math.random() * types.length)];
          return generateQuestions([word], randomType)[0];
        default:
          return generateQuestions([word], 'definition')[0];
      }
    });
  };

  const questions = useMemo(() => generateQuestions(words, gameType), [words, gameType]);

  const handleAnswer = useCallback((answer: string | null) => {
    if (isAnswered) return;

    const currentQuestion = questions[currentQuestionIndex];
    const normalizedAnswer = answer ? normalizeText(answer) : null;
    const isCorrect = normalizedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 10);
    }

    const result: GameResult = {
      wordId: currentQuestion.word.id,
      correct: isCorrect,
      userAnswer: answer || 'Time\'s up!',
      correctAnswer: currentQuestion.correctAnswer,
      timeSpent: 30 - timeLeft
    };

    setGameResults([...gameResults, result]);
    setIsAnswered(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setTimeLeft(30);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResults(true);
      }
    }, 2000);
  }, [currentQuestionIndex, gameResults, isAnswered, questions, score, timeLeft]);

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswer(null);
    }
  }, [timeLeft, isAnswered, handleAnswer]);

  const currentQuestion = questions[currentQuestionIndex];

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="card text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Game Complete!</h2>
          <div className="text-6xl font-bold text-primary-600 mb-4">{score}</div>
          <p className="text-xl text-gray-600 mb-6">Total Score</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card bg-green-50 border-green-200">
              <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {gameResults.filter(r => r.correct).length}
              </div>
              <p className="text-green-700">Correct Answers</p>
            </div>
            <div className="card bg-red-50 border-red-200">
              <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-600">
                {gameResults.filter(r => !r.correct).length}
              </div>
              <p className="text-red-700">Incorrect Answers</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGameEnd}
              className="btn-primary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Games
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="btn-secondary"
            >
              Play Again
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onGameEnd}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Exit Game
        </motion.button>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-lg">{score}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-red-500" />
            <span className="font-bold text-lg">{timeLeft}s</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        className="card mb-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {currentQuestion.question}
        </h2>
        
        <div className="grid gap-4">
          {currentQuestion.displayOptions.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => !isAnswered && handleAnswer(option)}
              disabled={isAnswered}
              className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                isAnswered
                  ? normalizeText(option) === currentQuestion.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : normalizeText(option) === normalizeText(selectedAnswer || '')
                    ? 'border-red-500 bg-red-50 text-red-800'
                    : 'border-gray-200 bg-gray-50 text-gray-600'
                  : normalizeText(option) === normalizeText(selectedAnswer || '')
                  ? 'border-primary-500 bg-primary-50 text-primary-800'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {isAnswered && normalizeText(option) === currentQuestion.correctAnswer && (
                  <Check className="w-5 h-5 text-green-600" />
                )}
                {isAnswered && normalizeText(option) === normalizeText(selectedAnswer || '') && normalizeText(option) !== currentQuestion.correctAnswer && (
                  <X className="w-5 h-5 text-red-600" />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Timer Animation */}
      <div className="flex justify-center">
        <motion.div
          className="w-16 h-16 border-4 border-primary-600 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: timeLeft, ease: "linear" }}
        >
          <span className="text-lg font-bold text-primary-600">{timeLeft}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default GameSession; 