import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
;

import { Course, Query, AllCoursesQuery } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  courses: Observable<Course[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    // we get a query operations
    this.courses = this.apollo.watchQuery<Query>({ query: AllCoursesQuery })
      .valueChanges.map(({data}) => data.allCourses);
  }
}
