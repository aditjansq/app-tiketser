export interface Event {
    id: number;
    name: string;
    description: string;
    image: string;
    location: string;
    venue: string;
    date: {
      day: string;
      month: string;
      year: string;
    };
    time: string;
    price: {
      regular: number;
      vip: number;
    };
  }
  
  export interface TicketOrder {
    regular: number;
    vip: number;
  }
  