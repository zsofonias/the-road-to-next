import { initialTickets } from '@/data';
import { ITicket } from '../interfaces/ticket.interfcae';

export const getTickets = async (): Promise<ITicket[]> => {
  // throw new Error('Failed to fetch ticket');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
