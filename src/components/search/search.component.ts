import { Component, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-search',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchValue = signal('');

  handleSearchValueEmit(newString: string): void {
    this.searchValue.set(newString);
  }

  handleSearchClick() {
    console.log('Search value:', this.searchValue());
  }
}
