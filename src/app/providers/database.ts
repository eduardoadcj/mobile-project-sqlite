import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Estado } from '../model/estado';

@Injectable()
export class DatabaseProvider{

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
      })
      .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS estado (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, sigla TEXT)']
    ])
      .then(() => console.log('tabelas criadas'))
      .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  public salvarEstado(estado: Estado) {
    this.getDB().executeSql('INSERT INTO estado(nome,sigla) VALUES (?,?)', estado)
      .then(() => alert('insert correto!'))
      .catch((err) => alert('insert deu errado!'));
  }

}
