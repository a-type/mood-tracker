import { EntryMood } from '@mood-tracker/verdant';

export interface MoodProps {
  value: EntryMood;
  className?: string;
}

export function Mood({ value, ...rest }: MoodProps) {
  return <span {...rest}>{emoji[value]}</span>;
}

const emoji: Record<EntryMood, string> = {
  worst: '😭',
  worse: '😕',
  same: '😐',
  better: '🙂',
  best: '😀',
};
