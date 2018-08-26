import { Course } from './course';
export const COURSE: Course = {
		name : "Calc",
    goalMark : 90,
    currentMark: 0,
		assignments: [
      {
				name:"Quizzes",
				weight: 0.2,
				isLocked: false,
				mark: 80,
        		isDone: false
      },
		  {
				name:"MidTerm",
				weight: 0.4,
				isLocked: false,
				isDone: false,      
				mark: 80
			},
			{
				name:"Final",
				weight: 0.4,
				isLocked: false,
				isDone: false,
				mark: 65
			}
    ]
};
