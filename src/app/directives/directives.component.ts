import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  books = [
    {
      'bookid': 101,
      'bookname': 'Sample Book1',
      'author': 'Sujatha',
      'bookstatus': 'Available',
      'category': 'Educations'
    },
    {
      'bookid': 102,
      'bookname': 'Sample Book2',
      'author': 'Peter',
      'bookstatus': 'Available',
      'category': 'Engineering'
    },
    {
      'bookid': 103,
      'bookname': 'Sample Book3',
      'author': 'Alex',
      'bookstatus': 'Not Available',
      'category': 'IT'
    },
    {
      'bookid': 104,
      'bookname': 'Sample Book4',
      'author': 'Nathan Astle',
      'bookstatus': 'Available',
      'category': 'Physics'
    },
    {
      'bookid': 105,
      'bookname': 'Sample Book5',
      'author': 'abc',
      'bookstatus': '',
      'category': 'Chemistry'
    },
    {
      'bookid': 106,
      'bookname': 'Sample Book6',
      'author': 'xyz',
      'bookstatus': '',
      'category': 'Mathamatics'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {

   
  }

  gotoNext() {
      this.router.navigate(['/contact']);
  }

}
