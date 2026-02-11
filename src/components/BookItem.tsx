import type { Books } from "../Types/Books"


type Props = {
    books : Books
}

const BookItem = ({books} : Props) => {

    return(
        <div>
            <div>
                <strong>{books.titulo}</strong>
            </div>
            <p>{books.autor}</p>
            <p>{books.descricao}</p>
        </div>
    )
}

export default BookItem;