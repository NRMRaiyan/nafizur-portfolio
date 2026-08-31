import { ReactNode } from 'react';

export function Section({ id, index, label, title, children }: { id: string; index: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="sectionMeta"><span>{index}</span><span>{label}</span></div>
      <div className="sectionHeading"><h2>{title}</h2><span className="hairline" /></div>
      {children}
    </section>
  );
}
