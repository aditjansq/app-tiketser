import { Component, OnInit } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Router } from '@angular/router';  
import { CommonModule } from '@angular/common'; // Impor CommonModule  
import { HttpClientModule } from '@angular/common/http'; // Impor HttpClientModule  
  
@Component({  
  selector: 'app-home',  
  standalone: true, // Menandakan bahwa ini adalah komponen standalone  
  imports: [CommonModule, HttpClientModule], // Tambahkan CommonModule dan HttpClientModule ke dalam imports  
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.css']  
})  
export class HomeComponent implements OnInit {  
  events: any[] = []; // Inisialisasi array events  
  
  constructor(private http: HttpClient, private router: Router) {}  
  
  ngOnInit(): void {  
    this.fetchEvents(); // Panggil fungsi untuk mengambil data acara  
  }  
  
  fetchEvents(): void {  
    this.http.get<any[]>('http://localhost:5000/api/events') // Mengambil data dari API Anda  
      .subscribe(data => {  
        this.events = data; // Assign data yang diambil ke events  
      }, error => {  
        console.error('Error fetching events:', error); // Tangani error  
      });  
  }  
  
  formatPrice(price: number): string {  
    return new Intl.NumberFormat('id-ID').format(price); // Format harga  
  }  
  
  navigateToDetail(eventId: number): void {  
    this.router.navigate(['/tickets', eventId]); // Navigasi ke detail tiket  
  }  
}  
