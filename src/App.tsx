
import FormularioLivro from './components/BookForm'
import './App.css'
import { useEffect, useState } from 'react'
import type { Books } from './Types/Books'
import BookList from './components/BookList'
import {getBooks, addBook, deleteBook, updateBook} from './API_REST/servicos'


function App() {

  const [adicionados, setAdicionados] = useState<Books[]>([])
  const [carregar, setCarregar] = useState(true)

  const carregarLivros = async () => {
    try {
      const data = await getBooks();
      setAdicionados(data);
    } catch (err) {
      console.error("Erro ao carregar livros:", err);
    } finally {
      setCarregar(false);
    }
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  const adicionarLivros = async (dados: Books) => {
    try {
      const novoLivro = await addBook(dados);
      setAdicionados(prev => [...prev, novoLivro]);
    } catch (err) {
      console.error("Erro ao adicionar livro:", err);
    }
  };

  const removerLivro = async (_id: string) => {
    try {
      await deleteBook(_id);
      setAdicionados(prev => prev.filter(book => book._id !== _id));
    } catch (err) {
      console.error("Erro ao remover livro:", err);
    }
  };

  const toggleLivro = async (_id: string) => {
    const livroAtual = adicionados.find(b => b._id === _id);
    if (!livroAtual) return;
    const atualizado: Books = {
      ...livroAtual,
      lido: !livroAtual.lido
    };
    try {
      await updateBook(atualizado);

      setAdicionados(prev =>
        prev.map(b => (b._id === _id ? atualizado : b))
      );
    } catch (err) {
      console.error("Erro ao atualizar livro:", err);
    }
  };

  if (carregar) {
    return <p>Carregando livros...</p>;
  }

  
  return (
    <>
      <FormularioLivro aoEnviar={adicionarLivros}/>
      <BookList 
        books={adicionados}
        onToggle={toggleLivro}
        onRemove={removerLivro}
      />
    </>
  )
}

export default App
