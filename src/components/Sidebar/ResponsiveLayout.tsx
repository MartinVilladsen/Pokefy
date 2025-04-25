'use client';

import { useState, ReactNode } from 'react';
import { Icon } from '@iconify/react';

interface Props {
  children: ReactNode;
}

export default function SidebarClientWrapper({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        className="lg:hidden fixed top-4 left-4 z-30 text-white bg-zinc-800 p-2 rounded-md"
        onClick={() => setIsOpen((v) => !v)}
      >
        <Icon icon={isOpen ? 'carbon:close' : 'carbon:menu'} className="w-6 h-6" />
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-20 transform transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:translate-x-0`}
      >
        {children}
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-25 z-20"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
