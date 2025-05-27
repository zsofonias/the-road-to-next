import Link from 'next/link';

import { ticketsPath } from '@/paths';
import Heading from '@/components/Heading';

function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home" description="Your home place to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to tickets
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
