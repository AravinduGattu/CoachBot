import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microsoft',
  templateUrl: './microsoft.component.html',
  styleUrls: ['./microsoft.component.css']
})
export class MicrosoftComponent implements OnInit {

  public name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('Username');
  }

  back() {
    this.router.navigate(['/login']);
  }

}
