import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = ""
  selectedPlaceOfBirth: string = "All"

  @Output() //カスタムイベントの定義、子コンポーネントのこのメソッドが実行されると親コンポーネントのあるメソッドを発火させたい、親コンポーネントのhtmlでバインディングする
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>()
  
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
}
