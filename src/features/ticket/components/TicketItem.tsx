// import clsx from 'clsx';
import Link from 'next/link';
import { ticketPath } from '@/paths';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import { ITicket } from '../interfaces/ticket.interfcae';
import { TICKET_ICONS } from '../constants/ticket-icon.constant';

interface TicketItemProps {
  ticket: ITicket;
}

function TicketItem({ ticket }: TicketItemProps) {
  return (
    <Card className="w-full max-w-[420px]">
      <CardHeader>
        <CardTitle className="flex gap-x-2">
          <span>{TICKET_ICONS[ticket.status]}</span>
          <span className="truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span
          // className={clsx('text-sm text-slate-500 truncate', {
          //   'line-through': ticket.status === 'DONE',
          // })}
          className="line-clamp-3 whitespace-break-spaces"
        >
          {ticket.content}
        </span>
      </CardContent>
      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
}
export default TicketItem;
