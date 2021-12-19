import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() service: any = {}
  @Input('index') i: number = 0;
  @Output('enviardatos') clickCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
   avisar(){
    console.log('click hijo');
    this.clickCard.emit('mensaje al padre desde el hijo');
   }

}
