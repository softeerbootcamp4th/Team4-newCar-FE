class EventBus {
	private eventTarget = new EventTarget();

	public on(event: string, callback: (event: Event) => void): void {
		this.eventTarget.addEventListener(event, callback);
	}

	public off(event: string, callback: (event: Event) => void): void {
		this.eventTarget.removeEventListener(event, callback);
	}

	public emit(event: string, detail: any): void {
		const customEvent = new CustomEvent(event, { detail });
		this.eventTarget.dispatchEvent(customEvent);
	}
}

export const eventBus = new EventBus();
