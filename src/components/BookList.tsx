import type { Books } from "../Types/Books"
import BookItem from "./BookItem"


type Props = {
    books : Books[];
}

const BookList = ({books} : Props) => {

    if(books.length === 0)
        return <p>Nenhum livro foi adicionado ainda!</p>

    return(
        <div>
            {
                books.map(item => (<BookItem key={item._id} books={item}/>))
            }
        </div>
    )
}

export default BookList;