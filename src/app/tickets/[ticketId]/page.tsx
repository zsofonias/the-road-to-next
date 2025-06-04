import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ticketsPath } from '@/paths';
import { getTicket } from '@/features/ticket/queries/get-ticket';

import Placeholder from '@/components/Placeholder';
import TicketItem from '@/features/ticket/components/TicketItem';
import { Button } from '@/components/ui/button';

interface ITicketPageProps {
  params: Promise<{
    ticketId: string;
  }>;
}

async function TicketPage({ params }: ITicketPageProps) {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);
  if (!ticket) {
    notFound();
    // return (
    //   <Placeholder
    //     label="Ticket not found."
    //     button={
    //       <Button className="mt-4" asChild variant="outline">
    //         <Link href={ticketsPath()}>Go back to tickets</Link>
    //       </Button>
    //     }
    //   />
    // );
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}

export default TicketPage;
