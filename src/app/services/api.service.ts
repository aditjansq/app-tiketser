import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class ApiService {  
  private apiUrl = 'mongodb+srv://aditjansaboss:4aWBdJMTXTFZxLtx@cluster0.ywzcz.mongodb.net/DB_tiket?ssl=true&authSource=admin'; // Ganti dengan URL API Anda  
  
  constructor(private http: HttpClient) { }  
  
  // Mendapatkan detail event berdasarkan ID  
  getEventDetails(eventId: string): Observable<any> {  
    return this.http.get(`${this.apiUrl}/events/${eventId}`);  
  }  
  
  // Memproses pembayaran  
  processPayment(data: any): Observable<any> {  
    const headers = new HttpHeaders({  
      'Content-Type': 'application/json'  
    });  
    return this.http.post(`${this.apiUrl}/payment`, data, { headers });  
  }  
}  
