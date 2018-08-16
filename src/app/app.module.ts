import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { BookDiningComponent } from "./book-dining/book-dining.component";
import { BookDiningConfirmationComponent } from "./book-dining-confirmation/book-dining-confirmation.component";
import { BookResortComponent } from "./book-resort/book-resort.component";
import { BookResortConfirmationComponent } from "./book-resort-confirmation/book-resort-confirmation.component";
import { ViewItineraryComponent } from "./view-itinerary/view-itinerary.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: DemoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'BookResort', component: BookResortComponent },
  { path: 'BookDining', component: BookDiningComponent },
  { path: 'ViewItinerary', component: ViewItineraryComponent },
  { path: 'BookResortConfirmation/:id', component: BookResortConfirmationComponent },
  { path: 'BookDiningConfirmation/:id', component: BookDiningConfirmationComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    RegisterComponent,
  BookResortComponent, BookDiningComponent, ViewItineraryComponent, BookResortConfirmationComponent, BookDiningConfirmationComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(
      appRoutes), FormsModule, BrowserModule, ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [AppService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
