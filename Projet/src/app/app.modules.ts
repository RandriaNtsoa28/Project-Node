import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Make sure to import RouterModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // ... other components declarations
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // Add RouterModule to the imports array with forRoot
    // ... other modules imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


