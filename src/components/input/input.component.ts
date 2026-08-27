import { Component, input, output, signal } from "@angular/core";
type InputTypeString = "text" | "password" | "email" | "number" | "tel" | "url";

@Component({
  selector: "app-input",
  imports: [],
  templateUrl: "./input.component.html",
  styleUrl: "./input.component.css",
})
export class InputComponent {
  textValue = output<string>();
  inputType = input<InputTypeString>();

  onInputChange(event: Event) {
    const element = event.target as HTMLInputElement;
    const value = element.value;
    this.textValue.emit(value);
  }
}
