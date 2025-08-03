export interface Word {
  id: string;
  word: string;
  definition: string;
  synonyms: string[];
  antonyms: string[];
  sampleSentence: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface UserProgress {
  userId: string;
  wordsLearned: string[];
  wordsIncorrect: string[];
  totalScore: number;
  badges: Badge[];
  currentStreak: number;
  longestStreak: number;
  gamesPlayed: number;
  correctAnswers: number;
  totalAnswers: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
  type: 'achievement' | 'streak' | 'score' | 'special';
}

export interface GameSession {
  id: string;
  gameType: 'synonym' | 'antonym' | 'definition' | 'sentence';
  words: Word[];
  currentWordIndex: number;
  score: number;
  startTime: Date;
  endTime?: Date;
}

export interface GameResult {
  wordId: string;
  correct: boolean;
  userAnswer: string;
  correctAnswer: string;
  timeSpent: number;
}

export type GameType = 'synonym' | 'antonym' | 'definition' | 'sentence' | 'mixed';

export interface LeaderboardEntry {
  userId: string;
  username: string;
  score: number;
  badges: number;
  streak: number;
} 