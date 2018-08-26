import { Assn } from './assn';

export class Course{
  goalMark: number = 100;
  currentMark: number = 0;
  name: string = 'myCourse';
  assignments: Assn[] = [
    new Assn(),
    new Assn(),
    new Assn(),
  ];
}
