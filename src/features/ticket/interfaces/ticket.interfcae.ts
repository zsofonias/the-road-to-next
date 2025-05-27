export enum TicketStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'IN_PROGRESS',
  HOLD = 'HOLD',
}

export interface ITicket {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
}
