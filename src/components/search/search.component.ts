import { Component, inject, signal } from "@angular/core";
import { ToastComponent } from "../../app/toast/toast.component";
import { NotificationService } from "../../services/notification-service";
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";

@Component({
    selector: "app-search",
    imports: [ButtonComponent, InputComponent, ToastComponent],
    templateUrl: "./search.component.html",
    styleUrl: "./search.component.css",
})
export class SearchComponent {
    searchValue = signal("");
    showToast = signal(false);
    private notificationService = inject(NotificationService);

    handleSearchValueEmit(newString: string): void {
        this.searchValue.set(newString);
    }

    handleSearchClick() {
        this.notificationService.showAlert(`${this.searchValue()}`);
    }

    toggleToast() {
        this.showToast.set(!this.showToast);
    }
}
