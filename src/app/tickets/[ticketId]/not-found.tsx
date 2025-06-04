import Link from 'next/link';
import { ticketsPath } from '@/paths';

import Placeholder from '@/components/Placeholder';
import { Button } from '@/components/ui/button';

function NotFound() {
  return (
    <Placeholder
      label="Ticket not found."
      button={
        <Button className="mt-4" asChild variant="outline">
          <Link href={ticketsPath()}>Go back to tickets</Link>
        </Button>
      }
    />
  );
}
export default NotFound;
