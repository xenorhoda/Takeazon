import { Component, inject, signal } from "@angular/core";
import { NotificationService } from "../../services/notification-service";
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";

@Component({
    selector: "app-search",
    imports: [ButtonComponent, InputComponent],
    templateUrl: "./search.component.html",
    styleUrl: "./search.component.css",
})
export class SearchComponent {
    searchValue = signal("");
    private notificationService = inject(NotificationService);

    handleSearchValueEmit(newString: string): void {
        this.searchValue.set(newString);
    }

    handleSearchClick() {
        const value = this.searchValue().trim();
        if (!value) {
            this.notificationService.show("Please enter a search term");
            return;
        }
        this.notificationService.show(`Searching for "${value}"`, "success");
    }
}
