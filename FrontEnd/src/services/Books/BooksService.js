import axios from 'axios'

const Books_BASE_REST_API_URL = 'https://library-management-system-latest.onrender.com/api/v1/books';

// const Books_BASE_REST_API_URL = 'http://localhost:8080/api/v1/books';


class BooksService{

    getAllBooks(){
        return axios.get(Books_BASE_REST_API_URL)
    }

    createBooks(Books){
        return axios.post(Books_BASE_REST_API_URL, Books)
    }

    getBooksById(BooksId){
        return axios.get(Books_BASE_REST_API_URL + '/edit-book/' + BooksId);
    }

    updateBooks(BooksId, Books){
        return axios.put(Books_BASE_REST_API_URL + '/' +BooksId, Books);
    }

    deleteBooks(BooksId){
        return axios.delete(Books_BASE_REST_API_URL + '/' + BooksId);
    }

    up(BooksId){
        return axios.put(Books_BASE_REST_API_URL + '/mbooks/' + BooksId);
    }
}

export default new BooksService();