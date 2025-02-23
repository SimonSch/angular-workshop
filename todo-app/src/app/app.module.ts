import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoListFooterComponent} from "./todo-list-footer/todo-list-footer.component";
import {TodoDataService} from "./shared/services/todo-data.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./shared/route/app-routing.module";
import {TodosComponent} from "./todos/todos.component";
import {SessionService} from "./shared/auth/session.service";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ApiService} from "./shared/api/api.service";
import {AuthService} from "./shared/auth/auth.service";
import {TodoListHeaderComponent} from "./todo-list-header/todo-list-header.component";
import {TodoListItemComponent} from "./todo-list-item/todo-list-item.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    SignInComponent,
    TodosComponent,
    TodoListItemComponent,
    PageNotFoundComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    AuthService,
    SessionService,
    TodoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
