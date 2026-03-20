import type { IGrid } from '../../types/components.types';
import { Card } from './Card';

export function Grid({ title, space, columns, elements }: IGrid) {
  return (
    <>
    <section className="px-6 py-8">
      <h2 className="text-xl text-black text-center font-bold mb-6">{title}</h2>
      <div
        className={`grid ${space === 'lg' ? 'gap-8' : space === 'md' ? 'gap-4' : 'gap-2'}`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {elements.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
    </>
  );
}