import { Component } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Juan';
  age = 26;
  img = 'https://source.unsplash.com/random'
  btnDisabled = true;

  /* Person Objt */
  person = {
    name: 'Sebastian',
    age: 26,
    avatar: 'https://source.unsplash.com/random',
  }

  /* Array Utils */
  names: string[] = ['Juan', 'Sebastian', 'Barrios'];
  emojis = ['📚', '👾', '🍑', '🍒'];
  newEmoji = '';

  /* Products Array */
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]

  toggleButton(){
    /* Tomamos el estado y lo negamos */
    this.btnDisabled = !this.btnDisabled;
  }

  increseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addEmoji(){
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  deleteEmoji(index: number){
    this.emojis.splice(index, 1);
  }

}
