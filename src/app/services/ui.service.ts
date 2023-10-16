import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private abierto: boolean = false
  private emite$ : BehaviorSubject<boolean>;
  
  constructor(){
    this.emite$ = new BehaviorSubject(this.abierto);
  }

  change(){
    this.abierto = !this.abierto
    this.emite$.next(this.abierto)
  }
  
  getData$(): Observable<boolean>{
    return this.emite$.asObservable();
  }
}
