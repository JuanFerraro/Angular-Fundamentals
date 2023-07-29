import { Component } from '@angular/core';

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

  person = {
    name: 'Sebastian',
    age: 26,
    avatar: 'https://source.unsplash.com/random',
  }
  names: string[] = ['Juan', 'Sebastian', 'Barrios'];
  emojis = ['📚', '👾', '🍑', '🍒'];
  newEmoji = '';

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
