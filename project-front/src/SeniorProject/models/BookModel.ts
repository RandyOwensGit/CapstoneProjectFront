/**
 * Object to hold API gets from Google API
 * 
 * @returns component
 */

class BookModel {

   // test_table column mapping
   title: string;
   subTitle: string;
   image: string;
   description: string;
   pageCount: number;
   author: string[];

   // Constructor to initialize values
   constructor (title: string, subTitle: string, image: string, description: string, pageCount: number, author: string[]) {

      // initialize values -- ternary operator to format readState
      this.title = title;
      this.subTitle = subTitle;
      this.image = image;
      this.description = description;
      this.pageCount = pageCount;
      this.author =  author;

   }


}

// export
export default BookModel;