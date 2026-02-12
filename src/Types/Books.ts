export type Books = {
    _id: string,
    titulo: string;
    autor: string;
    descricao: string;
    lido: boolean;
} 

export type NewBook = {
    titulo: string;
    autor: string;
    descricao: string;
    lido: boolean;
};