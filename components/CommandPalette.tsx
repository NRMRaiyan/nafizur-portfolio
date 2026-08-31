'use client';

import { Command, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const items = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!open) return null;
  const filtered = items.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="commandOverlay" onMouseDown={() => setOpen(false)}>
      <div className="commandBox" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Portfolio command palette">
        <div className="commandSearch">
          <Search size={18} />
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search portfolio..." />
          <button className="iconButton small" onClick={() => setOpen(false)} aria-label="Close command palette"><X size={16} /></button>
        </div>
        <div className="commandList">
          {filtered.map(([name, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{name}<span>↗</span></a>
          ))}
        </div>
        <div className="commandHint"><Command size={13} /> K to open · ESC to close</div>
      </div>
    </div>
  );
}
