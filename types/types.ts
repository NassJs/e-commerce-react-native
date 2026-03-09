

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  genre: string;
  year: number;
}

interface BookCardProps {
  book: Book;
  onPress?: () => void;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  enStock: boolean;
  image: string;
}

export { Book, BookCardProps };
