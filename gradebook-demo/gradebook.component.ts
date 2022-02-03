import { Component, OnInit } from '@angular/core';

//LAST PART! Newly created angular class called User, import statement required see below.
import { User } from '../user';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})

export class GradebookComponent implements OnInit {
 
//Two way data binding
studName=""
prelim=0
midterm=0
final=0
average = (this.prelim + this.midterm +this.final)/3

//Using ngIf statement
isLogIn:boolean=true;
isLogOut:boolean=false;

 //Using simple list to demonstrate simple ngFor statement
 list = [1,2,3,4,5];

 //Using trackBy with the list below.
 studentArr: any[] = 
  [{ 
   "id": 1, 
   "name": "student1" }, 
   {"id": 2,
   "name": "student2"}, 
   {"id": 3,
   "name": "student3"},
   {"id": 4, 
   "name": "student4" 
   }]; 
   trackByData(index:number, studArr:any): number  //Using trackBy
   { 
    return studArr.id; 
   }

//another ngfor example
    staff = [
      { firstName: 'Joseph', lastName: 'Diaz', email: 'joseph.diaz@test.com', role: 'User' },
      { firstName: 'James', lastName: 'Reynolds', email: 'james.reynolds@test.com', role: 'Admin' },
      { firstName: 'Djoan', lastName: 'Jaworski', email: 'djoan.jaworski@test.com', role: 'Admin' },
      { firstName: 'Maria', lastName: 'Garcia', email: 'maria.garcia@test.com', role: 'User' },
      { firstName: 'Jay', lastName: 'Bernardo', email: 'jay.bernardo@test.com', role: 'User' }
  ];
  
 //LAST PART of the lesson
  users:User[]=[
    {userId:1, "userName":'User1'},
    {userId:2, "userName":'User2'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
