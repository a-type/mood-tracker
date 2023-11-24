import { EntryMood } from '@mood-tracker/verdant';

export interface MoodProps {
  value: EntryMood;
}

export function Mood({ value }: MoodProps) {
  return <span>{emoji[value]}</span>;
}

const emoji: Record<EntryMood, string> = {
  worst: '😭',
  worse: '😕',
  same: '😐',
  better: '🙂',
  best: '😀',
};
