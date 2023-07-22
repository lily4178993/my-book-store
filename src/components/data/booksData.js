import { v4 as uuidv4 } from "uuid";

const booksData = [
    {
        id: uuidv4(),
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        category: 'Action',
        CurrentChapter: 'Chapter 17',
        percentageCompletion: '65%',
    },
    {
        id: uuidv4(),
        title: 'Dune',
        author: 'Frank Herbert',
        category: 'Science Fiction',
        CurrentChapter: 'Chapter 3: "A Lesson Learned"',
        percentageCompletion: '8%',
    },
    {
        id: uuidv4(),
        title: 'Capital in the Twenty-First Century',
        author: 'Suzanne Collins',
        category: 'Economy',
        CurrentChapter: 'Introduction',
        percentageCompletion: '0%',
    },
  ];

  export default booksData;