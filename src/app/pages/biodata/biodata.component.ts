// import { CommonModule } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { EventService } from '../../services/event.service';

// @Component({
//   selector: 'app-biodata',
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './biodata.component.html',
//   styleUrl: './biodata.component.css'
// })
// export class BiodataComponent implements OnInit{
//   event: any;
//   tickets: any;
//   biodataForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private eventService: EventService
//   ) {
//     this.biodataForm = this.fb.group({
//       nama: ['', [
//         Validators.required,
//         Validators.pattern('^[a-zA-Z ]*$') // Hanya huruf dan spasi
//       ]],
//       noHp: ['', [
//         Validators.required,
//         Validators.pattern('^[0-9]{10,13}$') // 10-13 digit angka
//       ]],
//       email: ['', [
//         Validators.required,
//         Validators.pattern('^[a-zA-Z0-9._-]+@gmail\.com$') // Harus gmail.com
//       ]],
//       tglLahir: ['', Validators.required],
//       jenisKelamin: ['', Validators.required]
//     });
//   }

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       const eventId = Number(params['id']);
//       this.eventService.getEventById(eventId).subscribe(event => {
//         this.event = event;
//       });
//     });

//     this.route.queryParams.subscribe(params => {
//       this.tickets = {
//         regular: Number(params['regular']) || 0,
//         vip: Number(params['vip']) || 0
//       };
//     });
//   }

//   formatPrice(price: number): string {
//     return this.eventService.formatPrice(price);
//   }

//   calculateTotal(): number {
//     if (!this.event) return 0;
//     return (this.tickets.regular * this.event.price.regular) +
//            (this.tickets.vip * this.event.price.vip);
//   }

//   processBiodata() {
//     if (this.biodataForm.valid) {
//       const biodataData = {
//         event: this.event,
//         tickets: this.tickets,
//         userData: this.biodataForm.value,
//         total: this.calculateTotal()
//       };
//       console.log('Processing biodata:', biodataData);
      
//       const orderDetails = [];
//       if (this.tickets.regular > 0) {
//         orderDetails.push(`${this.tickets.regular} tiket REGULAR`);
//       }
//       if (this.tickets.vip > 0) {
//         orderDetails.push(`${this.tickets.vip} tiket VIP`);
//       }

//       alert(`Detail Pemesanan:
// Event: ${this.event.name}
// Tiket: ${orderDetails.join(' dan ')}
// Total: Rp ${this.formatPrice(this.calculateTotal())}
// Pembayaran akan diproses...`);
//     } else {
//       alert('Mohon lengkapi semua data terlebih dahulu');
//     }
//   }
// }