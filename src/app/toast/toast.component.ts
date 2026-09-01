import { Component, computed, inject } from "@angular/core";
import { NotificationService } from "../../services/notification-service";

@Component({
    selector: "app-toast",
    imports: [],
    templateUrl: "./toast.component.html",
    styleUrl: "./toast.component.css",
})
export class ToastComponent {
    private readonly notificationService = inject(NotificationService);

    protected readonly toast = this.notificationService.toast;
    protected readonly toastClass = computed(() => {
        const t = this.toast();
        return t ? `toast toast--${t.type}` : "toast";
    });

    protected close(): void {
        this.notificationService.hide();
    }
}
