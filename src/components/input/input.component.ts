import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  textValue = output<string>();

  onInputChange(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.textValue.emit(value);
  }
}
