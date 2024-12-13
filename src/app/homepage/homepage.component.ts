import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  preferences = {
    genre: '',
    language: '',
    year: ''
  };

  constructor(private movieService: MovieService,private router: Router) {}

  onSubmit() {
    if (this.preferences.genre && this.preferences.language && this.preferences.year) {
      this.movieService.postMovies(this.preferences).subscribe(
        (response) => {
          console.log('Movies fetched successfully:', response);
          // Handle the response as needed, e.g., display the movies
          this.router.navigate(['result'], {
            queryParams: {
              genre: this.preferences.genre,
              language: this.preferences.language,
              year: this.preferences.year,
            },
          });
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );
    } else {
      alert('Please fill out all fields!');
    }
  }

}
