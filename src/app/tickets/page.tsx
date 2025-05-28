import { Suspense } from 'react';

import Heading from '@/components/Heading';
import TicketList from '@/features/ticket/components/TicketList';
import Spinner from '@/components/Spinner';

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
}
