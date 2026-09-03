import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../components/search/search.component';
import { ToastComponent } from "../components/toast/toast.component";

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, SearchComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'takeazon';
}
