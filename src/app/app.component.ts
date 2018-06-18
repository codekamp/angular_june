import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  caption = 'Hello World';

  courseRating: number = 3;
  teacherRating: number = 1;

  constructor() {
    // setInterval(() => {
    //   this.caption = this.caption + ' ' + this.caption;
    // }, 2000);
  }

  saveFeedback() {
    console.log("courseRating", this.courseRating);
    console.log("teachRating", this.teacherRating);
  }

  updateCourseRating(newRating: number) {
    this.courseRating = newRating;

    console.log("new courseRating", newRating);
  }


  updateTeacherRating(newRating: number) {
    this.teacherRating = newRating;

    console.log("new teacherRating", newRating);
  }
}


// code can be divided into two camps:
// 1. Business logic - core of you software that process input to generate output
// 2. Application logic - How to take input from user and show output to user


// Model-View-Controller - MVC

// Model Classes - contains business logic. Have nothing to do with Htm/css. Should
// only take input and based on that give output. Models are reusable.
// Models should not know anything about controller and views


// View Classes - Responsible for taking input from user and giving output to user
// views are highly reusable.
// views should not know anything about controller and model


// Control classes - connect model and views. They know about both views and models


// Component classes falls in both view and controller camps.
// Dumb components are views. Smart components are controller.
// Dumb component is a component which depends only on input for taking in data
// and output of emitting out events.

// https://material.angular.io/
