import React from 'react';

export default function StatusBadge({ status, label }) {
  const styles = {
    Delivered: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    Demo: 'bg-[#35D9D0]/15 text-[#35D9D0] border-[#35D9D0]/40',
    'In development': 'bg-amber-500/15 text-amber-300 border-amber-500/40',
    Prototype: 'bg-[#8B5CF6]/15 text-[#C4B5FD] border-[#8B5CF6]/40'
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${styles[status] || styles.Prototype}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label || status}
    </span>
  );
}
