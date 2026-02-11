
import FormularioLivro from './components/BookForm'
import './App.css'
import { useEffect, useState } from 'react'
import type { Books } from './Types/Books'
import BookList from './components/BookList'
import axios from 'axios'

const API_url = "https://crudcrud.com/api/8fee75e3d7df423c8de90954861e89b7/books"

function App() {


  const [adicionados, setAdicionados] = useState<Books[]>([])

  const adicionarLivros = (dados : Books) => {

    axios
    .post<Books>(API_url, dados)
    .then(reposta => setAdicionados(prev => [...prev, reposta.data]))
  }

  useEffect(() => {
    axios
    .get<Books[]>(API_url)
    .then(response => setAdicionados(response.data));
  },[])
  
  return (
    <>
      <FormularioLivro aoEnviar={adicionarLivros}/>
      <BookList books={adicionados}/>
    </>
  )
}

export default App
