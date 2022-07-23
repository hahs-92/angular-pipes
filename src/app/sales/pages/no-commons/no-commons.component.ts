import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  //i18 plural
  clients = ['alex', 'jess', 'jose'];
  mapClients = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  //select i18
  name = 'alex';
  genre = 'male';
  mapInvitation = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeName() {
    this.name = 'jess';
    this.genre = 'female';
  }

  deletClient() {
    this.clients.shift();
  }
}
