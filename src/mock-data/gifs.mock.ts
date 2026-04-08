export interface Gif {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}

export const mockGifs: Gif[] = [
  {
    id: '1',
    title: "Superman's Cake",
    url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThyZXBwbHFtdHNpYnh4ZnN0aGswcWJydXNwdnpjaXV0eXNlYXp1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8BSJinJ8of9L0unCqW/giphy.gif',
    width: 300,
    height: 300,
  },
  {
    id: '2',
    title: 'Funny Cat',
    url: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
    width: 400,
    height: 250,
  },
  {
    id: '3',
    title: 'Happy BDay!',
    url: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG40N2cyZm1iZGM2aWlhbHF1bnZmdzkxZ29idTY3ZzZkbnowNDg4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xatKdEypHxBjzabUPV/giphy.gif',
    width: 280,
    height: 350,
  },
  {
    id: '4',
    title: 'Thumbs Up',
    url: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
    width: 300,
    height: 200,
  },
  {
    id: '5',
    title: 'Elmo is the best',
    url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG5zMmVsNDFzam56bmR6azl0bmFvbHQxdDczeDNzZTdxczhtejNrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUQ4rhUZJYiQsas6WD/giphy.gif',
    width: 300,
    height: 400,
  },
  {
    id: '6',
    title: 'Messi is the best',
    url: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThyZXBwbHFtdHNpYnh4ZnN0aGswcWJydXNwdnpjaXV0eXNlYXp1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8BSJinJ8of9L0unCqW/giphy.gif',
    width: 350,
    height: 280,
  },
];
