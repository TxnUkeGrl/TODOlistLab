import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TODOinterface } from './todointerface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTODOapp';

  todolist: TODOinterface[] = [
    {
    task:'complete Angular lab',
    completed: false
    },
    {
    task: 'complete resume',
    completed: true
    },
  ];

  getTODOlist(): TODOinterface[]
  {
    let result: TODOinterface[] = [];
    this.todolist.forEach((item: TODOinterface) => {
      result.push(item);
    });    
    return result;
  }

  completeTask(task: string): void
  {//this refers to the class it is within
    this.todolist.forEach(element => {
      if(element.task == task){
        element.completed = true;
      }
    });
  }

  addTask(task: string): void{
    let newTask: TODOinterface = {
      task: task,
      completed: false
    };

    this.todolist.push(newTask);
  }
}
