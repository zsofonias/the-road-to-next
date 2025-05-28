export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  HOLD = 'HOLD',
}

export interface ITicket {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
  // status: 'OPEN' | 'IN_PROGRESS' | 'DONE' | 'HOLD';
}
