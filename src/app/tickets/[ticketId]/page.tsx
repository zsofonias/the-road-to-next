import Placeholder from '@/components/Placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/paths';
import Link from 'next/link';

interface TicketPageProps {
  params: {
    ticketId: string;
  };
}

async function TicketPage({ params }: TicketPageProps) {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
  if (!ticket)
    return (
      <Placeholder
        label="Ticket not found."
        button={
          <Button className="mt-4" asChild variant={'outline'}>
            <Link href={ticketsPath()}>Go back to tickets</Link>
          </Button>
        }
      />
    );
  return (
    <div className="mt-4">
      <h2 className="text-2xl">{ticket.title}</h2>
      <div className="text-sm">{ticket.content}</div>
    </div>
  );
}

export default TicketPage;
