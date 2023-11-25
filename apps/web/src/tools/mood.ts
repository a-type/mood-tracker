import { EntryMood } from '@mood-tracker/verdant';

export type MoodInfo = {
  min: number;
  max: number;
  latest: number;
};

export function addMood(current: MoodInfo, mood: EntryMood) {}
