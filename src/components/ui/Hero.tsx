import type { IHero } from '../../types/components.types';

export function Hero({ img, title }: IHero) {
  return (
    <div
      className="relative w-full h-72 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative text-white text-4xl font-bold text-center drop-shadow-lg px-4">
        {title}
      </h1>
    </div>
  );
}