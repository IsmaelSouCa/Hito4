import type { IBookRaw, IBookClean } from '../types/book.types';
import type { ICard, IScreen } from '../types/components.types';
import { RAW_BOOKS } from './mockBooks';

/**
 * Adapta los datos limpios al formato genérico ICard.
 */
function transformData(data: IBookRaw[]): IBookClean[] {
  // TODO: Implementar mapeo y cálculo de IVA (21%)
  return data.map((book): IBookClean => ({
    id: book.id,
    titulo: book.title,
    autor: book.author,
    precioFinal: parseFloat((book.price * (1 + 0.21)).toFixed(2)),
    imagen: book.covers.large,
    categoria: book.genre,
  }));
}

/**
 * Transforma IBookClean en componentes ICard[]
 */
export function adaptToComponents(books: IBookClean[]): ICard[] {
  // TODO: Implementar mapeo a ICard
    return books.map((book): ICard => ({
        id: book.id,
        title: book.titulo,
        description: `${book.autor} | ${book.categoria} | ${book.precioFinal.toFixed(2)}€`,
        image: book.imagen,
    }));
}

/**
 * Función principal exportada para el componente App.
 */
export function getLibraryPage(): IScreen {
  // TODO: Orquestar transformData -> adaptToComponents
  const cleanBooks = transformData(RAW_BOOKS);
  //Adaptar libros a componentes ICard
  const cards = adaptToComponents(cleanBooks);
  return {
    id: "library",
    version: "1.0",
    title: "Biblioteca",
    body:[
      {
        type: 'HERO',
        props: {
            img: "https://static.vecteezy.com/system/resources/thumbnails/008/957/568/small/blurred-bookshelf-many-old-books-in-a-book-shop-or-library-photo.jpg",
            title: "Bienvenido a la Biblioteca Virtual"
        }
      },
      {
        type: 'GRID',
        props: {
            title: 'Catálogo',
            space: 'lg',
            columns: 4,
            elements: cards
        }
      }
    ]
  };
}