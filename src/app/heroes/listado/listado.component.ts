import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['SPIDERMAN', 'IRONMAN', 'HULK', 'BATMAN', 'THOR']
  heroeDelete: string = ''


  borrarHeroe():void{
    this.heroeDelete = this.heroes.shift() || '';
  }
}
