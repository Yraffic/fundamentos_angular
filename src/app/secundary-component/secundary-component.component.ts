import { Component } from '@angular/core';

@Component({
  selector: 'app-secundary-component',
  templateUrl: './secundary-component.component.html',
  styleUrls: ['./secundary-component.component.css']
})
export class SecundaryComponentComponent {
  nome = 'yuri raffic'
  dataNascimento = "2000-07-09"
  urlImg = '/assets/code.png'

  mostrarDataDeNascimento(){
    alert(`a data é ${this.dataNascimento}`)
  }
}
