export interface Student {
   firstName: string,
   lastName: string,
   age?: number,
   courseId: number
}

export interface Course {
   courseName: string,
   courseHours: number,
   students: Array<Student>
}

