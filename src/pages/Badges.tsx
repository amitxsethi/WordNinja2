import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Award, Zap, BookOpen, Calendar, TrendingUp, Crown, Medal, Check } from 'lucide-react';

const Badges: React.FC = () => {
  // Mock badge data
  const badges = [
    {
      id: '1',
      name: 'First Steps',
      description: 'Complete your first game',
      icon: Star,
      earned: true,
      earnedAt: '2024-01-10',
      type: 'achievement',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: '2',
      name: 'Word Warrior',
      description: 'Score 100 points in a single game',
      icon: Trophy,
      earned: true,
      earnedAt: '2024-01-12',
      type: 'score',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: '3',
      name: 'Streak Master',
      description: 'Maintain a 7-day streak',
      icon: Calendar,
      earned: true,
      earnedAt: '2024-01-15',
      type: 'streak',
      color: 'from-green-400 to-green-600'
    },
    {
      id: '4',
      name: 'Speed Demon',
      description: 'Answer 5 questions in under 2 minutes',
      icon: Zap,
      earned: false,
      type: 'achievement',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: '5',
      name: 'Perfect Score',
      description: 'Get 100% accuracy in any game',
      icon: Target,
      earned: false,
      type: 'score',
      color: 'from-red-400 to-red-600'
    },
    {
      id: '6',
      name: 'Vocabulary Expert',
      description: 'Learn 50 words',
      icon: BookOpen,
      earned: false,
      type: 'achievement',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: '7',
      name: 'Consistent Learner',
      description: 'Play games for 10 consecutive days',
      icon: TrendingUp,
      earned: false,
      type: 'streak',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: '8',
      name: 'Synonym Master',
      description: 'Complete 5 synonym challenges with 90%+ accuracy',
      icon: Award,
      earned: false,
      type: 'special',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: '9',
      name: 'Antonym Champion',
      description: 'Complete 5 antonym challenges with 90%+ accuracy',
      icon: Medal,
      earned: false,
      type: 'special',
      color: 'from-teal-400 to-teal-600'
    },
    {
      id: '10',
      name: 'Definition Guru',
      description: 'Complete 5 definition challenges with 90%+ accuracy',
      icon: Crown,
      earned: false,
      type: 'special',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      id: '11',
      name: 'Sentence Builder',
      description: 'Complete 5 sentence challenges with 90%+ accuracy',
      icon: BookOpen,
      earned: false,
      type: 'special',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      id: '12',
      name: 'Word Ninja Master',
      description: 'Earn all other badges',
      icon: Crown,
      earned: false,
      type: 'special',
      color: 'from-amber-400 to-amber-600'
    }
  ];

  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Your Badges
        </h1>
        <p className="text-xl text-gray-600">
          Track your achievements and unlock new rewards
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-3 gap-6 mb-8"
      >
        <div className="card text-center">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">{earnedBadges.length}</div>
          <div className="text-sm text-gray-600">Earned Badges</div>
        </div>
        <div className="card text-center">
          <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">{availableBadges.length}</div>
          <div className="text-sm text-gray-600">Available Badges</div>
        </div>
        <div className="card text-center">
          <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-gray-800">
            {Math.round((earnedBadges.length / badges.length) * 100)}%
          </div>
          <div className="text-sm text-gray-600">Completion</div>
        </div>
      </motion.div>

      {/* Earned Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="w-6 h-6 mr-2 text-yellow-500" />
          Earned Badges ({earnedBadges.length})
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {earnedBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${badge.color} opacity-10 rounded-full -mr-10 -mt-10`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {badge.name}
                </h3>
                <p className="text-gray-600 text-center mb-3">
                  {badge.description}
                </p>
                <div className="text-center">
                  <span className="badge badge-gold">
                    Earned {badge.earnedAt}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Available Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Target className="w-6 h-6 mr-2 text-blue-500" />
          Available Badges ({availableBadges.length})
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card relative overflow-hidden opacity-60"
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${badge.color} opacity-5 rounded-full -mr-10 -mt-10`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-lg flex items-center justify-center mx-auto mb-4 opacity-50`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {badge.name}
                </h3>
                <p className="text-gray-600 text-center mb-3">
                  {badge.description}
                </p>
                <div className="text-center">
                  <span className="badge bg-gray-100 text-gray-600">
                    Locked
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Badge Categories */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12"
      >
        <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Badge Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Achievement Badges
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Earned by completing specific milestones and challenges
              </p>
              <div className="space-y-1">
                {badges.filter(b => b.type === 'achievement').map(badge => (
                  <div key={badge.id} className="flex items-center justify-between text-sm">
                    <span className={badge.earned ? 'text-gray-800' : 'text-gray-500'}>
                      {badge.name}
                    </span>
                    {badge.earned && <Check className="w-4 h-4 text-green-500" />}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Trophy className="w-4 h-4 mr-2 text-blue-500" />
                Special Badges
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Unique badges for mastering specific game types
              </p>
              <div className="space-y-1">
                {badges.filter(b => b.type === 'special').map(badge => (
                  <div key={badge.id} className="flex items-center justify-between text-sm">
                    <span className={badge.earned ? 'text-gray-800' : 'text-gray-500'}>
                      {badge.name}
                    </span>
                    {badge.earned && <Check className="w-4 h-4 text-green-500" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Badges; 