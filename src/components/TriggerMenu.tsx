'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';
import { FaHouseChimney } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

export function TriggerMenu({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [stateItem, setStateItem] = useState<'open' | 'closed'>('closed');

  function handleAlterStateItemMenu() {
    const newState = stateItem === 'open' ? 'closed' : 'open';
    const scaleUp = ['animate-scale-up', 'scale-[1]'];
    const scaleDown = ['animate-scale-down', 'scale-[0]'];

    setStateItem(newState);
    if (newState === 'closed') {
      document.getElementById('plus')?.classList.remove(...scaleDown);
      document.getElementById('minus')?.classList.remove(...scaleUp);
      document.getElementById('plus')?.classList.add(...scaleUp);
      document.getElementById('minus')?.classList.add(...scaleDown);
    } else {
      document.getElementById('plus')?.classList.remove(...scaleUp);
      document.getElementById('minus')?.classList.remove(...scaleDown);
      document.getElementById('minus')?.classList.add(...scaleUp);
      document.getElementById('plus')?.classList.add(...scaleDown);
    }
  }

  return (
    <Accordion.Trigger asChild>
      <button
        className="relative flex w-full cursor-pointer items-center gap-4"
        data-state={stateItem}
        onClick={handleAlterStateItemMenu}>
        <FaHouseChimney size={20} className="text-[#301B56]" />
        <span className="text-2 font-bold text-black">{children}</span>

        <FaPlus
          id="plus"
          data-state={stateItem}
          size={18}
          className="date-[state='closed']:animate-scale-up absolute top-1 right-0 scale-[1]"
        />
        <FaMinus
          id="minus"
          data-state={stateItem}
          size={18}
          className="absolute top-1 right-0 scale-[0]"
        />
      </button>
    </Accordion.Trigger>
  );
}
