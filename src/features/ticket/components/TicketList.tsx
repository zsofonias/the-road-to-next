import { getTickets } from '../queries/get-tickets';
import TicketItem from './TicketItem';

async function TicketList() {
  const tickets = await getTickets();
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
export default TicketList;
