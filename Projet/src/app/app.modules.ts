import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Make sure to import RouterModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [

    // ... other components declarations
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppComponent,
    // Add RouterModule to the imports array with forRoot
    // ... other modules imports
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }


