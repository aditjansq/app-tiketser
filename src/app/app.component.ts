import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
      <div class="bg-gradient-to-b from-blue-900 via-blue-950 to-black text-white min-h-screen">
      <app-header />
      <main class="pt-24 px-4">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class AppComponent {
  title = 'tktksr';

} 