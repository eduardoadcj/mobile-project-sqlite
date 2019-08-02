import { Component } from '@angular/core';
import { DatabaseProvider } from '../providers/database';
import { Estado } from '../model/estado';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private db: DatabaseProvider) {
    estado: Estado = new Estado();
    estado.nome = "são paulo";
    estado.sigla = "SP";
    db.createDatabase();
    db.salvarEstado(estado);
  }

}
