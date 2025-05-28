import clsx from 'clsx';
import Link from 'next/link';
import { ticketPath } from '@/paths';

import { ITicket } from '../interfaces/ticket.interfcae';
import { TICKET_ICONS } from '../constants/ticket-icon.constant';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LucideSquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ITicketItemProps {
  ticket: ITicket;
  isDetail?: boolean;
}

function TicketItem({ ticket, isDetail }: ITicketItemProps) {
  const detailSbutton = (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketPath(ticket.id)} className="text-sm">
        <LucideSquareArrowOutUpRight />
      </Link>
    </Button>
  );

  return (
    <div
      className={clsx('w-full  flex gap-x-1', {
        'max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card className="w-full">
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
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailSbutton}</div>
      )}
    </div>
  );
}
export default TicketItem;
