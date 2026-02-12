import Toggle from "../assets/toggle";
import type { Books } from "../Types/Books"
import styles from './BookItem.module.css'

type Props = {
    books : Books;
    onToggle: (_id: string) => void;
    onRemove: (_id: string) => void;
}

const BookItem = ({books, onRemove, onToggle} : Props) => {

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <strong className={books.lido ? styles.lido : styles.title}>
                            {books.titulo}
                        </strong>
                        <p className={styles.autor}>
                            {books.autor}
                        </p>
                    </div>
                    <p>{books.descricao}</p>
                </div>
                <Toggle
                    checked={books.lido}
                    onChange={() => onToggle(books._id)}
                />
                <button
                className={styles.remove}
                onClick={() => onRemove(books._id)}
                >
                    Remover
                </button>
            </div>
        </div>
    )
}

export default BookItem;