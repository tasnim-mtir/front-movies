import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  preferences: any = {};
  movies: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.preferences.genre = params['genre'];
      this.preferences.language = params['language'];
      this.preferences.year = params['year'];

      this.fetchMovies();
    });
  }

  fetchMovies() {
    this.movieService.getMovies(this.preferences).subscribe(
      (movies) => {
        this.movies = movies; 
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}


