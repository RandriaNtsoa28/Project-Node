// Import the new component
// @ts-ignore
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Add a route for the new component
const routes: Routes = [
  { path: 'edit-lesson', component: LessonEditFormComponent },
  // ...other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
