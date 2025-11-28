
import React from 'react';
import { PlusIcon } from './icons/PlusIcon';

interface HeaderProps {
  onOpenCreateModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCreateModal }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
          My<span className="text-sky-600">Websites</span>
        </h1>
        <button
          onClick={onOpenCreateModal}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          <PlusIcon className="h-5 w-5" />
          <span>Create New Site</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
