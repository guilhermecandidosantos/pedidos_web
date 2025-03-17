'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaTableColumns } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';

import { Menu } from './Menu';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
export function BodyAuthenticated({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [styleMenu, setStyleMenu] = useState<
    'fixed' | 'modal' | 'modal-overlay'
  >('fixed');
  const styleMenuHidden = ['animate-menu-hidden', 'left-[-100%]'];
  const styleMenuShowModal = ['animate-menu-show-modal', 'left-0'];
  const styleMenuShow = ['animate-menu-show', 'left-0'];
  const styleContentExtend = ['animate-content-extend', 'left-0', 'w-screen'];
  const styleContentDecrease = [
    'animate-content-decrease',
    'left-[18.75rem]',
    'w-[calc(100vw-18.75rem)]',
  ];
  const scaleUp = ['animate-scale-up', 'scale-[1]'];
  const scaleDown = ['animate-scale-down', 'scale-[0]'];

  function handleAlterStyleMenu() {
    const newStyle = styleMenu === 'fixed' ? 'modal' : 'fixed';

    setStyleMenu(newStyle);

    const menu = document.getElementById('menu');
    const content = document.getElementById('content');

    if (menu && content) {
      if (newStyle === 'modal') {
        menu.classList.remove(...styleMenuShow);
        menu.classList.remove(...styleMenuShowModal);
        content.classList.remove(...styleContentDecrease);
        menu.classList.add(...styleMenuHidden);
        content.classList.add(...styleContentExtend);
      } else {
        menu.classList.remove(...styleMenuHidden);
        content.classList.remove(...styleContentExtend);
        menu.classList.add(...styleMenuShow);
        content.classList.add(...styleContentDecrease);
      }
    }
  }

  function handleShowAndHiddenMenu() {
    const menu = document.getElementById('menu');
    const buttonShowModal = document.getElementById('showModal');
    const buttonHiddenModal = document.getElementById('hiddenModal');

    if (styleMenu === 'modal') {
      setStyleMenu('modal-overlay');
      if (menu) {
        menu.classList.remove(...styleMenuHidden);
        menu.classList.add(...styleMenuShowModal);
        if (buttonShowModal && buttonHiddenModal) {
          buttonShowModal.classList.remove(...scaleUp);
          buttonShowModal.classList.add(...scaleDown);
          buttonHiddenModal.classList.add(...scaleUp);
        }
      }
    } else if (styleMenu === 'modal-overlay') {
      setStyleMenu('modal');
      if (menu) {
        menu.classList.remove(...styleMenuShowModal);
        menu.classList.add(...styleMenuHidden);
        if (buttonHiddenModal && buttonShowModal) {
          buttonHiddenModal.classList.remove(...scaleUp);
          buttonHiddenModal.classList.add(...scaleDown);
          buttonShowModal.classList.add(...scaleUp);
        }
      }
    }
  }

  return (
    <body className={`${inter.variable} relative antialiased`}>
      <header className="bg-foreground fixed top-0 left-0 z-1 flex h-14 w-screen items-center pl-4 text-2xl text-base font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
        {(styleMenu === 'modal' || styleMenu === 'modal-overlay') && (
          <button
            aria-label="abrir e fechar menu"
            className="relative h-5 w-5 cursor-pointer border-0 bg-transparent"
            onClick={handleShowAndHiddenMenu}>
            <FaBars
              id="showModal"
              size={20}
              className="animate-scale-up absolute top-0 left-0 scale-[1]"
            />
            <FaArrowLeft
              id="hiddenModal"
              size={20}
              className="absolute top-0 left-0 scale-[0]"
            />
          </button>
        )}
        <Link href="/">
          <h1 className="px-8">CBP BRASIL</h1>
        </Link>
        <button
          aria-label="Alterar style do menu"
          className="cursor-pointer border-none bg-transparent"
          onClick={handleAlterStyleMenu}>
          <FaTableColumns size={20} />
        </button>
      </header>
      <div
        id="menu"
        data-state={styleMenu}
        className="bg-background fixed top-14 left-0 z-2 flex h-screen flex-row drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
        <nav className="h-screen w-[18.75rem] overflow-y-auto">
          <Menu />
        </nav>
      </div>

      {styleMenu === 'modal-overlay' && (
        <div
          onClick={handleShowAndHiddenMenu}
          className="animate-opacity-up fixed top-14 left-0 z-1 h-[calc(100vh-3.5rem)] w-screen bg-black/50"
        />
      )}

      <main
        id="content"
        className="fixed top-14 left-[18.75rem] h-[calc(100vh-3.5rem)] w-[calc(100vw-18.75rem)] overflow-y-auto px-4 py-2">
        {children}
      </main>
    </body>
  );
}
