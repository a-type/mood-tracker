import { EntryCreator } from '@/components/entries/EntryCreator.jsx';
import { RecentEntries } from '@/components/entries/RecentEntries.jsx';

export interface HomePageProps {}

export function HomePage({}: HomePageProps) {
  return (
    <div>
      <EntryCreator />
      <RecentEntries />
    </div>
  );
}

export default HomePage;
