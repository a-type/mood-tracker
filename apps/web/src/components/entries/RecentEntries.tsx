import { Mood } from '@/components/entries/Mood.jsx';
import { hooks } from '@/store.js';
import { InfiniteLoadTrigger } from '@a-type/ui/components/infiniteLoadTrigger';
import { Spinner } from '@a-type/ui/components/spinner';
import { Entry } from '@mood-tracker/verdant';
import classnames from 'classnames';
import { useRef } from 'react';

export function RecentEntries() {
  const [entries, tools] = hooks.useAllEntriesInfinite({
    key: 'recentEntries',
    pageSize: 10,
    index: {
      where: 'date',
      order: 'desc',
    },
  });

  return (
    <ul className="list-none m-0 p-0 flex flex-col gap-6 w-full">
      {entries.map((entry) => (
        <RecentEntry entry={entry} key={entry.get('date')} />
      ))}
      {tools.hasMore && (
        <InfiniteLoadTrigger className="mt-8" onVisible={tools.loadMore}>
          <Spinner />
        </InfiniteLoadTrigger>
      )}
    </ul>
  );
}

function RecentEntry({ entry }: { entry: Entry }) {
  const { date, mood } = hooks.useWatch(entry);
  return (
    <li className="list-none relative w-full min-h-[32px]">
      <div
        className={classnames(
          'absolute flex flex-col gap-2 transform translate-x-[-50%] text-center',
          {
            'left-[9%]': mood === 'worst',
            'left-[29%]': mood === 'worse',
            'left-[50%]': mood === 'same',
            'left-[71%]': mood === 'better',
            'left-[91%]': mood === 'best',
          },
        )}
      >
        <Mood value={mood} />
        <span className="text-xs text-gray-500">
          {new Date(parseInt(date, 10)).toLocaleDateString()}
        </span>
      </div>
    </li>
  );
}

function ShowMore({ onVisible }: { onVisible: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
}
