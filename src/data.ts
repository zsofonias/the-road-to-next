import {
  ITicket,
  TicketStatus,
} from './features/ticket/interfaces/ticket.interfcae';

export const initialTickets: ITicket[] = [
  {
    id: '1',
    title: 'Ticket 1',
    content: 'Ticket 1 content',
    // status: 'OPEN' as const,
    status: TicketStatus.OPEN,
  },
  {
    id: '2',
    title: 'Ticket 2',
    content: 'Ticket 2 content',
    // status: 'DONE' as const,
    status: TicketStatus.DONE,
  },
  {
    id: '3',
    title: 'Ticket 3',
    content: 'Ticket 3 content',
    // status: 'HOLD' as const,
    status: TicketStatus.HOLD,
  },
  {
    id: '4',
    title: 'Ticket 4',
    content: 'Ticket 4 content',
    // status: 'OPEN' as const,
    status: TicketStatus.OPEN,
  },
  {
    id: '5',
    title: 'Ticket 5',
    content: 'Ticket 5 content',
    // status: 'IN_PROGRESS' as const,
    status: TicketStatus.IN_PROGRESS,
  },
];
