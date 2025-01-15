import { Injectable } from '@angular/core';  
import { Event } from '../interfaces/event.interface';  
import { BehaviorSubject, Observable, of } from 'rxjs';  
import { HttpClient } from '@angular/common/http';  
import { catchError } from 'rxjs/operators';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class EventService {  
  private apiUrl = 'http://localhost:5000/api/events'; // URL API  
  private selectedEventSubject = new BehaviorSubject<Event | null>(null);  
  selectedEvent$ = this.selectedEventSubject.asObservable();  
  
  constructor(private http: HttpClient) {}  
  
  // Mendapatkan semua acara dari API  
  getAllEvents(): Observable<Event[]> {  
    return this.http.get<Event[]>(this.apiUrl).pipe(  
      catchError((error) => {  
        console.error('Error fetching events:', error);  
        return of([]); // Kembalikan observable kosong jika terjadi kesalahan  
      })  
    );  
  }  
  
  // Mendapatkan acara berdasarkan ID  
  getEventById(id: number): Observable<Event | null> {  
    return this.http.get<Event>(`${this.apiUrl}/${id}`).pipe( // Mengambil acara berdasarkan ID  
      catchError((error) => {  
        console.error('Error fetching event by ID:', error);  
        return of(null); // Kembalikan observable yang mengeluarkan null jika terjadi kesalahan  
      })  
    );  
  }  
  
  // Format harga  
  formatPrice(price: number): string {  
    return new Intl.NumberFormat('id-ID').format(price);  
  }  
}  
