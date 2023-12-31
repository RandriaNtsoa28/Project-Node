// ...other imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    // ... other components

  ],
  imports: [
    // ... other modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AppComponent,
    // ... other modules
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
