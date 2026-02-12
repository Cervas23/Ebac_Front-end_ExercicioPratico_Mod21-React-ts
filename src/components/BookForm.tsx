import { useState } from "react";
import styles from './BookForm.module.css'
import type { NewBook } from "../Types/Books";


type Props = {
    aoEnviar: (book: NewBook) => void;
}

const FormularioLivro = ({ aoEnviar } : Props) => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [lido, setLido] = useState(false);

    const enviar = (e: React.SyntheticEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!titulo || !autor || !descricao) return;
        aoEnviar({ titulo, autor, descricao, lido })
        setTitulo("");
        setAutor("");
        setDescricao("");
        setLido(false);
    }

    return(
        <form className={styles.form} onSubmit={enviar}>
            <h2>Qual livro deseja adicionar?</h2>
            <input className={styles.titulo}
                type="text"
                placeholder="Título do livro"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}

            />
            <input className={styles.autor} 
                type="text"
                placeholder="Autor do livro"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />
            <textarea className={styles.descricao}
                placeholder="Descrição do livro"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
            <label className={styles.checkboxContainer}>
                <input
                    type="checkbox"
                    checked={lido}
                    onChange={(e) => setLido(e.target.checked)}
                />
                Já foi lido
            </label>
            <button type="submit">Salvar</button>
        </form>
    )
}

export default FormularioLivro;