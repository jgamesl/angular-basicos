import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[] =  ["Spiderman", "Hulk", "Thor", "Cosa"];
  heroeBorrado: string = "";
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
  

}
