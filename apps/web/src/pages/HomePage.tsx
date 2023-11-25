import { EntryCreator } from '@/components/entries/EntryCreator.jsx';
import { RecentEntries } from '@/components/entries/RecentEntries.jsx';
import { PageContent } from '@a-type/ui/components/layouts';

export interface HomePageProps {}

const innerProps = { className: 'items-center md:max-w-[300px]' };

export function HomePage({}: HomePageProps) {
  return (
    <PageContent innerProps={innerProps} className="items-center">
      <div className="flex flex-col gap-6">
        <EntryCreator />
        <RecentEntries />
      </div>
    </PageContent>
  );
}

export default HomePage;
