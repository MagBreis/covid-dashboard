import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados =[
    ['Junho',33],
    ['julho',68],
    ['Agosto',49],
    ['Setembro',15]

  ];

  constructor() { }
  obterDados():Observable<any>{
    return  new Observable(observable =>{
    observable.next(this.dados);
    observable.complete();

  })

  }


}
