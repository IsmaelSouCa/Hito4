export interface IBookRaw {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  stock: number;
  rating: number;
  covers: { small: string; large: string; };
  details: string;
}

export interface IBookClean {
  id: number;
  titulo: string;
  autor: string;
  precioFinal: number;
  imagen: string;
  categoria: string;
}