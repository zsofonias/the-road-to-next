import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';

import { LucideKanban } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';

function Header() {
  return (
    <nav
      className="supports-backdrop-blur:bg-backgroud/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between
        "
    >
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <LucideKanban />
            <h1 className="text-lg font-semibold">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div>
        {/* <Button asChild variant="outline"> */}
        <Link
          href={ticketsPath()}
          className={buttonVariants({
            variant: 'default',
          })}
        >
          Tickets
        </Link>
        {/* </Button> */}
      </div>
    </nav>
  );
}
export default Header;
