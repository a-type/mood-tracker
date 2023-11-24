import { Mood } from '@/components/entries/Mood.jsx';
import { hooks } from '@/store.js';
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
    <div>
      <h2>How are you feeling today?</h2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          style={{
            background: currentMood === 'worst' ? 'lightblue' : 'white',
          }}
          onClick={() => onMoodChange('worst')}
        >
          <Mood value="worst" />
        </button>
        <button
          style={{
            background: currentMood === 'worse' ? 'lightblue' : 'white',
          }}
          onClick={() => onMoodChange('worse')}
        >
          <Mood value="worse" />
        </button>
        <button
          style={{ background: currentMood === 'same' ? 'lightblue' : 'white' }}
          onClick={() => onMoodChange('same')}
        >
          <Mood value="same" />
        </button>
        <button
          style={{
            background: currentMood === 'better' ? 'lightblue' : 'white',
          }}
          onClick={() => onMoodChange('better')}
        >
          <Mood value="better" />
        </button>
        <button
          style={{ background: currentMood === 'best' ? 'lightblue' : 'white' }}
          onClick={() => onMoodChange('best')}
        >
          <Mood value="best" />
        </button>
      </div>
    </div>
  );
}
