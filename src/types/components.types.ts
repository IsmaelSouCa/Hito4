export interface ICard {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

export interface IHero {
  img: string;
  title: string;
}

export interface IGrid {
  title: string;
  space: 'sm' | 'md' | 'lg';
  columns: number;
  elements: ICard[]; 
}

export type IComponent = 
  | { type: 'HERO'; props: IHero }
  | { type: 'GRID'; props: IGrid }
  | { type: 'CARD'; props: ICard };

export interface IScreen {
  id: string;
  version: string;
  title: string;
  body: IComponent[]; 
}