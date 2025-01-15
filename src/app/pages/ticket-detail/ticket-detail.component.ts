import { CommonModule } from '@angular/common';  
import { Component, OnInit } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';  
import { EventService } from '../../services/event.service';  
import { Event, TicketOrder } from '../../interfaces/event.interface';  
  
@Component({  
  selector: 'app-ticket-detail',  
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './ticket-detail.component.html',  
  styleUrls: ['./ticket-detail.component.css'] // Perbaiki 'styleUrl' menjadi 'styleUrls'  
})  
export class TicketDetailComponent implements OnInit {  
  event: Event | null = null;  
  activeContent: 'description' | 'ticket' = 'description';  
  tickets: TicketOrder = {  
    regular: 0,  
    vip: 0  
  };  
  
  constructor(  
    private route: ActivatedRoute,  
    private eventService: EventService,  
    private router: Router  
  ) {}  
  
  ngOnInit() {  
    this.route.params.subscribe(params => {  
      const id = Number(params['id']);  
      this.eventService.getEventById(id).subscribe(event => {  
        this.event = event;  
      });  
    });  
  }  
  
  showContent(contentType: 'description' | 'ticket') {  
    this.activeContent = contentType;  
  }  
  
  formatPrice(price: number): string {  
    return this.eventService.formatPrice(price);  
  }  
  
  updateQuantity(type: keyof TicketOrder, change: number) {  
    const newQuantity = this.tickets[type] + change;  
    if (newQuantity >= 0) {  
      this.tickets[type] = newQuantity;  
    }  
  }  
  
  calculateTotal(): number {  
    if (!this.event) return 0;  
    return (this.tickets.regular * this.event.price.regular) +  
           (this.tickets.vip * this.event.price.vip);  
  }  
  
  orderTickets() {  
    if (!this.event) return;  
  
    const orderDetails = [];  
    if (this.tickets.regular > 0) {  
      orderDetails.push(`${this.tickets.regular} tiket REGULAR`);  
    }  
    if (this.tickets.vip > 0) {  
      orderDetails.push(`${this.tickets.vip} tiket VIP`);  
    }  
      
    // Navigate to payment page with tickets as query params  
    this.router.navigate(['/biodata', this.event.id], {  
      queryParams: {  
        regular: this.tickets.regular,  
        vip: this.tickets.vip  
      }  
    });  
  }  
}  
