import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { LoginComponent } from './modules/general/auth/login/login.component';
import { SignupComponent } from './modules/general/auth/signup/signup.component';
import { BookListComponent } from './modules/application/book-list/book-list.component';
import { SingleBookComponent } from './modules/application/book-list/single-book/single-book.component';
import { BookFormComponent } from './modules/application/book-list/book-form/book-form.component';
import { HeaderComponent } from './modules/general/header/header.component';
import {AuthService} from "./services/auth.service";
import {BooksService} from "./services/books.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'auth/login', component: LoginComponent },
  {path: 'auth/signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  //{path: '**', component: NotFoundComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/new', component: BookFormComponent},
  {path: 'books/view/:id', component: SingleBookComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
