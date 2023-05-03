import { Student } from "./TestingInterfaces";

const external = "https://senior-project-back.onrender.com/api/";
const internal = "http://localhost:8080/api/";

export const getCourseInfoFromId = async (courseId: number) => {

   // API Call for Course details
   const courseResponse = await fetch(
      '' + external + 'courses/' + courseId, {
      method: 'GET',
      headers: {
         "Accept": "application/json",
         "content-type": "application/json",
      },
   });

   console.log("Course Response:");
   console.log(courseResponse);

   // turn response into json
   const courseResponseJson = await courseResponse.json();
   console.log("Course Formatted Response:");
   console.log(courseResponseJson);

   const data = {
      courseName: courseResponseJson.courseName,
      courseHours: courseResponseJson.courseHours,
   }

   return data;
}

export const getStudentsListFromCourseId = async (courseId: number) => {
   // API Call for Students Array
   const studentsOnCourseResponse = await fetch(
      '' + external + 'courses/' + courseId + '/students', {
      method: 'GET',
      headers: {
         "Accept": "application/json",
         "content-type": "application/json",
      },
   });

   console.log("Course Response:");
   console.log(studentsOnCourseResponse);

   // turn response into json
   const data = await studentsOnCourseResponse.json();
   console.log("Course Formatted Response:");
   console.log(data);

   const students: Student[] = [];

   data._embedded.students.map((values: Student) => {
      students.push(values as Student);
   });

   console.log("Array PUSHED:");
   console.log("Array PUSHED:");
   console.log(students);

   return students;

}
