import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit  {
  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  }
 
  
  pokeApi: string = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(
    private service: PokemonServiceService
  ) 
  {
    

  }


  ngOnInit(): void {
  this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types

          }
  
        },

        error: (err) => console.log('not found(404)')
      }
    )
  }
}
