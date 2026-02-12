import type { Books } from "../Types/Books"
import BookItem from "./BookItem"


type Props = {
    books : Books[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
}

const BookList = ({books, onToggle, onRemove } : Props) => {

    if(books.length === 0)
        return <p>Nenhum livro foi adicionado ainda!</p>

    return(
        <div>
            {
                books.map(item => (
                    <BookItem 
                        key={item._id} 
                        books={item} 
                        onToggle={onToggle}
                        onRemove={onRemove} 
                    />
                ))
            }
        </div>
    )
}

export default BookList;