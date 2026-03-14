export const GAME_WIDTH = 800;
export const GAME_HEIGHT = 600;

export const WINNING_SCORE = 2000; // Increased for more fun
export const POINTS_PER_KILL = 20;

export const ROCKET_SPEED_MIN = 0.6;
export const ROCKET_SPEED_MAX = 1.8;
export const ROCKET_SPAWN_RATE = 0.02; 

export const INTERCEPTOR_SPEED = 7;
export const EXPLOSION_MAX_RADIUS = 45;
export const EXPLOSION_SPEED = 0.015; 

export const COLORS = {
  bg: '#FFF9F2', // Warm paper color
  ink: '#4A4A4A', // Sketch pencil color
  accent: '#FF6B6B', // Vibrant red
  note: '#4ECDC4', // Musical teal
  paint: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#1A535C', '#FF9F1C'], // Rainbow palette
  enemy: '#2F3061', // Dark grey/blue boredom
};

export const BATTERY_CONFIGS = [
  { id: 0, x: 100, y: 540, maxAmmo: 25 }, // Left Guitar
  { id: 1, x: 400, y: 540, maxAmmo: 50 }, // Center Grand Stage
  { id: 2, x: 700, y: 540, maxAmmo: 25 }, // Right Guitar
];

export const CITY_CONFIGS = [
  { id: 0, x: 200, y: 560 }, // Art Studio 1
  { id: 1, x: 300, y: 560 }, // Art Studio 2
  { id: 2, x: 500, y: 560 }, // Art Studio 3
  { id: 3, x: 600, y: 560 }, // Art Studio 4
];

export const TRANSLATIONS = {
  en: {
    title: 'Musical Paint Defense',
    start: 'Start Drawing!',
    restart: 'Create Again',
    win: 'Masterpiece Created!',
    lose: 'Boredom Won...',
    score: 'Inspiration',
    ammo: 'Notes',
    target: 'Target: 2000',
    instructions: 'Tap to launch Musical Notes! Protect the Art Studios from the Grey Boredom!',
    combo: 'COMBO!',
    perfect: 'PERFECT HARMONY!',
  },
  zh: {
    title: '音乐绘画大作战',
    start: '开始创作！',
    restart: '再画一次',
    win: '完美杰作！',
    lose: '灵感蓄力完毕，下局超神',
    score: '灵感值',
    ammo: '音符',
    target: '目标: 2000',
    instructions: '点击发射音符！保护艺术工作室不被灰色无聊墨滴破坏！',
    combo: '连击！',
    perfect: '完美和弦！',
  },
};
