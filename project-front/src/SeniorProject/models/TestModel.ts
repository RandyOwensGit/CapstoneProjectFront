// Represent each row for Test data
class TestModel {

   // test_table column mapping
   testName: string;
   title: string;
   readState: string;
   createdDate: string;

   // Constructor to initialize values
   constructor (name: string, title: string, readState: string, createdDate: string) {

      // initialize values -- ternary operator to format readState
      this.testName = name;
      this.title = title;
      this.readState = readState;
      this.createdDate = createdDate;

   }

}

// export
export default TestModel;