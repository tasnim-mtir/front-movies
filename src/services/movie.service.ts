import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://back-movies-hmkv.onrender.com/movies'; 

  constructor(private http: HttpClient) {}

  getMovies(preferences: { genre?: string; language?: string; year?: string }): Observable<any> {
    let params = new HttpParams();
    if (preferences.genre) params = params.set('genre', preferences.genre);
    if (preferences.language) params = params.set('language', preferences.language);
    if (preferences.year) params = params.set('year', preferences.year);

    return this.http.get(this.apiUrl, { params });
  }

  // Fetch and save movies based on preferences (POST request)
  postMovies(preferences: { genre: string; language: string; year: string }): Observable<any> {
    return this.http.post(this.apiUrl, preferences);
  }
}
