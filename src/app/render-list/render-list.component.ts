import { Component } from '@angular/core';
import { Celular } from '../Types/Celular';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {
  celulares: Celular[] = [
    {id: 1, name:'iphone', description: 'novo', soldOff: false},
    {id: 2, name:'motorloa', description: 'usado', soldOff: false},
    {id: 3, name:'iphone', description: 'usado', soldOff: false},
    {id: 4, name:'iphone', description: 'novo', soldOff: true},
  ]
}
