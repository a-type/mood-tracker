import { Mood } from '@/components/entries/Mood.jsx';
import { hooks } from '@/store.js';
import { Button } from '@a-type/ui/components/button';
import { H2 } from '@a-type/ui/components/typography';
import { EntryMood, getTodayKey } from '@mood-tracker/verdant';

export interface EntryCreatorProps {}

export function EntryCreator({}: EntryCreatorProps) {
  const today = getTodayKey();
  const todayEntry = hooks.useEntry(today);
  const client = hooks.useClient();

  const onMoodChange = (mood: EntryMood) => {
    if (todayEntry) {
      todayEntry.set('mood', mood);
    } else {
      client.entries.put({
        date: today,
        mood,
      });
    }
  };

  hooks.useWatch(todayEntry);
  const currentMood = todayEntry?.get('mood');

  return (
    <div className="w-full flex flex-col">
      <H2>How are you feeling today?</H2>
      <div className="flex flex-row justify-between">
        <EntryButton
          value="worst"
          currentMood={currentMood}
          onClick={onMoodChange}
        />
        <EntryButton
          value="worse"
          currentMood={currentMood}
          onClick={onMoodChange}
        />
        <EntryButton
          value="same"
          currentMood={currentMood}
          onClick={onMoodChange}
        />
        <EntryButton
          value="better"
          currentMood={currentMood}
          onClick={onMoodChange}
        />
        <EntryButton
          value="best"
          currentMood={currentMood}
          onClick={onMoodChange}
        />
      </div>
    </div>
  );
}

export interface EntryButtonProps {
  value: EntryMood;
  currentMood?: EntryMood;
  onClick: (value: EntryMood) => void;
}

export function EntryButton({
  value,
  currentMood,
  onClick,
  ...rest
}: EntryButtonProps) {
  return (
    <Button
      size="icon"
      color={currentMood === value ? 'primary' : 'ghost'}
      toggled={currentMood === value}
      onClick={() => onClick(value)}
      className="text-lg"
      {...rest}
    >
      <Mood value={value} />
    </Button>
  );
}
