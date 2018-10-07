import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiMockService } from '../shared/api/api-mock.service';
import { TodoDataService } from '../shared/services/todo-data.service';
import { ApiService } from '../shared/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import {AuthService} from "../shared/auth/auth.service";
import {SessionService} from "../shared/auth/session.service";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [RouterTestingModule],
      providers: [
        AuthService,
        SessionService,
        TodoDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: new Observable((observer) => {
              observer.next({todos: []})
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
