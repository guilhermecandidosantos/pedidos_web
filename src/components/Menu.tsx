import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa6';
import { FaUserGroup } from 'react-icons/fa6';

import { TriggerMenu } from './TriggerMenu';

export function Menu() {
  return (
    <Accordion.Root type="single" collapsible className="px-4">
      <Accordion.Item value="administrator" className="mt-2 overflow-hidden">
        <Accordion.Header>
          <TriggerMenu>Administração</TriggerMenu>
        </Accordion.Header>
        <Accordion.Content className="data-[state='open']:animate-slideDown data-[state='closed']:animate-slideUp flex flex-col pl-8">
          <Link
            href="/user/list"
            className="text-text-800 flex items-center gap-2">
            <FaUser size={18} />
            Usuários
          </Link>
          <Link
            href="/create-group"
            className="text-text-800 flex items-center gap-2">
            <FaUserGroup size={18} />
            Grupos
          </Link>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
