import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent {
  @Output() public inputChanges = new EventEmitter<string>();

  public searchInput: string = '';

  searchForInputChanges() {
    this.inputChanges.emit(this.searchInput);
  }
}
