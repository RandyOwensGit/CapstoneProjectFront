import { useState } from "react";
import { SearchBooks } from "./SearchBooks";
import { SearchInfo } from "./SearchInfo";
import BookModel from "../../models/BookModel";
import { GetBooks } from "./GetBooks";
import { BookDisplay } from "./BookDisplay";
import { Container, Row } from "react-bootstrap";
import { UserAddBook } from "./UserAddBook";

/**
 * Main component for user searching and adding a book to their tracking
 * Uses SearchBooks, SearchInfo, GetBooks, BookDisplay
 * @returns component
 */

export const AddBook = () => {

   // user search -- items in search -- books fetched
   const [search, setSearch] = useState("");
   const [totalItems, setTotalItems] = useState(0);
   const [books, setBooks] = useState<BookModel[]>([]);

   const [displayAddPage, setDisplayAddPage] = useState(false);
   const [book, setBook] = useState<BookModel>();

   // When user presses enter run the search: API call, books array, build cards
   async function runSearch(search: string) {
      setSearch(search);

      // GetBooks Component handles searching Google Books API
      // returns array of BookModel Objects
      const foundBooks = await GetBooks(search);

      setBooks(foundBooks);
      setTotalItems(foundBooks.length);

   }

   // Rendering UserAddBooks component with selected book from BookDisplay loop
   async function userSelectedBook(book: BookModel) {
      // send values to database

      console.log("Inside userSelectBook() ---");
      console.log(book);

      setBook(book);
      setDisplayAddPage(true);

   }

   return (

      <div>
         { (displayAddPage)
            ? (book) 
               ? <UserAddBook book={book} />
               : false
            :
            <div id="home" className="page">
               <div className="container">

                  <SearchBooks callback={runSearch} />

                  { // If search is empty then dont render component
                     (search !== "" || totalItems === null)
                        ? <SearchInfo search={search} totalItems={totalItems} />
                        : null
                  }

                  {/* Loop over the books array and display them as a grid of cards */}
                  <Container>
                     <Row xs={5} className="align-items-center" style={{ marginTop: '20px' }}>
                        {  // Determine if books array is populated or not and use BookDisplay
                           (search.length > 0)
                              ? books.map(displayBook => <BookDisplay book={displayBook} callback={userSelectedBook} />)
                              : null
                        }
                     </Row>
                  </Container>

               </div>
            </div>
         }
      </div>

   )

}