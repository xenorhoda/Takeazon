import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  clickMe = output();

  protected handleClick() {
    this.clickMe.emit();
  }
}
