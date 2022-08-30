import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BmoCard } from '../models/bmo-card.models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // Pour récupérer les données, j'ai besoin d'une module que je n'ai pas encore importé (et utilisé) dans mon application
  // C'est le Module HttpClient
  // Je dois l'importer dans : le app.module.ts
  constructor(private http: HttpClient) { }

  getBmoCards(): Observable<BmoCard[]> {
    return this.http.get<BmoCard[]>("assets/jsons/data.json");
  }
}
