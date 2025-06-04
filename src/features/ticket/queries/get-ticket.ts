import { initialTickets } from '@/data';
import { ITicket } from '../interfaces/ticket.interfcae';

export const getTicket = async (ticketId: string): Promise<ITicket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  return new Promise((resolve) => {
    resolve(ticket || null);
  });
};
