import { Component, signal, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { NotificationService } from '../../services/notification-service';

@Component({
  selector: 'app-search',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchValue = signal('');
  private notificationService = inject(NotificationService);

  handleSearchValueEmit(newString: string): void {
    this.searchValue.set(newString);
  }

  handleSearchClick() {
    console.log('Search value:', this.searchValue());
    this.notificationService.showAlert(`${this.searchValue()}`);
  }
}
