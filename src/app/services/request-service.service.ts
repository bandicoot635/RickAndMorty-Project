import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personaje } from '../components/main.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getPersonajes(page: number) {

    return this.http.get<Personaje>(`${this.baseUrl}/?page=${page}`)
  }
}
