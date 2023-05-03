import { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { getCourseInfoFromId, getStudentsListFromCourseId } from "./TestingService";
import { Student } from "./TestingInterfaces";

export const TestingDisplay = () => {

   // students list on course
   const [studentsList, setStudentsList] = useState<Student[]>([]);

   // Button Clicked
   async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
      event.preventDefault();

      const courseId = event.currentTarget.courseId.value;

      const courseData = getCourseInfoFromId(courseId);

      const courseStudentsList = getStudentsListFromCourseId(courseId);

   }

   return (

      <div className="d-flex justify-content-center" style={{ marginTop: "50px" }}>

         {/* Button To Obtain Course*/}
         <Form onSubmit={onSubmit} >
            <Form.Group>
               <Form.Control
                  placeholder="Find Course by Id"
                  type="number"
                  id="courseId"
                  aria-describedby="courseId"
               />
            </Form.Group>

            <Button
               variant="primary"
               type="submit"
               style={{ width: '30rem', marginTop: '1rem' }}
            >
               Find Course
            </Button>
         </Form>


         {/* Display Course Details when button click */}



         {/* List of Students when button clicked */}



      </div>

   )

}