import { Injectable, signal } from "@angular/core";

export type ToastType = "info" | "success" | "error";

export interface Toast {
    message: string;
    type: ToastType;
}

@Injectable({
    providedIn: "root",
})
export class NotificationService {
    private readonly _toast = signal<Toast | null>(null);
    readonly toast = this._toast.asReadonly();

    private timeoutId: ReturnType<typeof setTimeout> | null = null;

    show(message: string, type: ToastType = "info", durationMs = 3000): void {
        this._toast.set({ message, type });

        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
        }

        if (durationMs > 0) {
            this.timeoutId = setTimeout(() => this.hide(), durationMs);
        }
    }

    hide(): void {
        if (this.timeoutId !== null) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this._toast.set(null);
    }
}
