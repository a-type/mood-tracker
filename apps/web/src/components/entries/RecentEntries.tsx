import { Mood } from '@/components/entries/Mood.jsx';
import { hooks } from '@/store.js';
import { Entry } from '@mood-tracker/verdant';

export function RecentEntries() {
  const [entries] = hooks.useAllEntriesInfinite({
    key: 'recentEntries',
    pageSize: 5,
    index: {
      where: 'date',
      order: 'desc',
    },
  });

  return (
    <ul>
      {entries.map((entry) => (
        <RecentEntry entry={entry} key={entry.get('date')} />
      ))}
    </ul>
  );
}

function RecentEntry({ entry }: { entry: Entry }) {
  const { date, mood } = hooks.useWatch(entry);
  return (
    <li>
      {new Date(parseInt(date)).toLocaleDateString()} | <Mood value={mood} />
    </li>
  );
}
