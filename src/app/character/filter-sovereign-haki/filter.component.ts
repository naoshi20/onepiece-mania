import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-sovereign-haki',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterSovereignHakiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selectedHakiStatus: string = "All"

  @Output() //下記のイベントエミッターを親要素に公開する
  filterSovereignHakiStatusChanged: EventEmitter<string> = new EventEmitter<string>()

  onfilterRadioButtonChanged() { //イベントは関数
    this.filterSovereignHakiStatusChanged.emit(this.selectedHakiStatus)
    console.log(this.selectedHakiStatus)
  }
}
