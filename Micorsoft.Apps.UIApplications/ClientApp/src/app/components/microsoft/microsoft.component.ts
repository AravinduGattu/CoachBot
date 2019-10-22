import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/login']);
  }

}
