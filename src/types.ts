export type Point = { x: number; y: number };

export interface Entity {
  id: string;
  x: number;
  y: number;
}

export interface Rocket extends Entity {
  targetX: number;
  targetY: number;
  speed: number;
  progress: number; // 0 to 1
  variation: number;
}

export interface Interceptor extends Entity {
  targetX: number;
  targetY: number;
  startX: number;
  startY: number;
  speed: number;
  progress: number; // 0 to 1
}

export interface Explosion extends Entity {
  radius: number;
  maxRadius: number;
  expanding: boolean;
  life: number; // 0 to 1
}

export interface Battery {
  id: number;
  x: number;
  y: number;
  ammo: number;
  maxAmmo: number;
  destroyed: boolean;
}

export interface City {
  id: number;
  x: number;
  y: number;
  destroyed: boolean;
}

export type GameStatus = 'START' | 'PLAYING' | 'WON' | 'LOST';

export type Language = 'en' | 'zh';
