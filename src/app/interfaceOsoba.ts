export interface Osoba {
  imie: string;
  nazwisko: string;
  zdjecie: string;
  bezZdjecia: string;
  adres: string[];
  plec: Plec;
}

export enum Plec {
  kobieta = 1,
  mezczyzna,
  niezdefiniowana,
}
