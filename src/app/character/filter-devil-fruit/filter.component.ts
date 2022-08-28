import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-devil-fruit',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterDevilFruitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedDevilFruitStatus: string = "All"

  @Output() //下記のイベントエミッターを親要素に公開する
  filterDevilFruitStatusChanged: EventEmitter<string> = new EventEmitter<string>()

  onfilterDevilFruitStatusChanged() { //イベントは関数
    this.filterDevilFruitStatusChanged.emit(this.selectedDevilFruitStatus)
    console.log(this.selectedDevilFruitStatus)
  }
}
