import { Book } from '../types';

const books: Book[] = [
  {
    id: '1',
    title: 'Le Seigneur des Anneaux',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    year: 1954,
    cover: 'https://covers.openlibrary.org/b/id/8743261-L.jpg',
    synopsis: 'Dans la Terre du Milieu, le hobbit Frodon doit détruire un anneau maléfique.',
  },
  {
    id: '2',
    title: "L'Étranger",
    author: 'Albert Camus',
    genre: 'Roman',
    year: 1942,
    cover: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    synopsis: "Meursault mène une vie simple jusqu'à ce qu'un événement dramatique bouleverse tout.",
  },
  {
    id: '3',
    title: "Harry Potter à l'école des sorciers",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    year: 1997,
    cover: 'https://covers.openlibrary.org/b/id/7984916-L.jpg',
    synopsis: 'Harry découvre qu’il est sorcier et entre à Poudlard.',
  },
  {
    id: '4',
    title: 'Le Petit Prince',
    author: 'Antoine de Saint-Exupéry',
    genre: 'Conte',
    year: 1943,
    cover: 'https://covers.openlibrary.org/b/id/8225261-L.jpg',
    synopsis: "Un récit poétique sur l'enfance et l'amitié.",
  },
];

export default books;