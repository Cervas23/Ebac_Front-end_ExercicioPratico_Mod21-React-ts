import type { Books } from '../Types/Books'
import axios from 'axios'


const API_url = "https://crudcrud.com/api/67534d03aadb46f6af6dc77c2012d802/books"


export const getBooks = async () : Promise<Books[]> => {
  const response = await axios.get<Books[]>(API_url);
  return response.data;
} 

export const addBook = async (book : Books) : Promise<Books> => {
  const response = await axios.post<Books>(API_url, book);
  return response.data;
}

export const deleteBook = async (_id: string) : Promise<void> => {
    await axios.delete(`${API_url}/${_id}`);
}

export const updateBook = async (book: Books): Promise<void> => {
  const { _id, ...data } = book;
  await axios.put(`${API_url}/${_id}`, data);
}