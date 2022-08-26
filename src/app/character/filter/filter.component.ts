import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedPlaceOfBirth: string = "All"

  @Output() //下記のイベントエミッターを親要素に公開する
  filterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>()

  onfilterRadioButtonChanged() { //イベントは関数
    this.filterRadioButtonChanged.emit(this.selectedPlaceOfBirth)
    console.log(this.selectedPlaceOfBirth)
  }
}
