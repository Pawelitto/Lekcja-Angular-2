import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Osoba, Plec } from './interfaceOsoba';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  powitanie: string = 'Witaj';
  osoba: Osoba = {
    imie: 'Tadeusz',
    nazwisko: 'Nowak',
    zdjecie: 'obraz_1.jpg',
    bezZdjecia: 'nophoto.png',
    adres: ['Piękna 16', '40-003', 'Katowice', 'śląskie', 'Polska'],
    plec: Plec.mezczyzna,
  };
  kolor: string = 'yellow';
  jak: string = 'center';
  aktywna: boolean = true;
  pokazZdjecie: boolean = true;
  zmienKolor() {
    this.kolor = this.kolor === 'yellow' ? 'green' : 'yellow';
  }
}
