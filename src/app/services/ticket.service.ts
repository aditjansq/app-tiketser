import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Ticket {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  price: number;
  image: string;
  description: string;
  type: 'regular' | 'vip';
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [
    {
      id: 1,
      name: 'Konser Coldplay',
      location: 'Palembang, Kambang Iwak',
      date: '2025-01-02',
      time: '15:00',
      price: 3500000,
      image: 'https://via.placeholder.com/400x200',
      description: 'Lorem ipsum dolor sit amet...',
      type: 'regular'
    }
  ];

  private selectedTicketSubject = new BehaviorSubject<Ticket | null>(null);
  selectedTicket$ = this.selectedTicketSubject.asObservable();

  getTickets() {
    return this.tickets;
  }

  getTicketById(id: number) {
    return this.tickets.find(ticket => ticket.id === id);
  }

  setSelectedTicket(ticket: Ticket) {
    this.selectedTicketSubject.next(ticket);
  }
}