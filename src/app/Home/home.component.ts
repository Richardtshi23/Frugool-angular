import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http: HttpClient) {
    this.http.get('https://frugool-backend.onrender.com/api/products/CheckOnline')
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.error('Error:', err);
        },
        complete: () => {
          console.log('Request completed');
        }
      });
  }

}
