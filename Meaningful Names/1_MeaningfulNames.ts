//Meaningful Names

//Classes and objects should have noun or noun phrase names.
class App {
    constructor(id: number) {
        this.id = id;
    }
    id: number;
    logger = new Logger();

    // Use Intention-Revealing Names (example: startTurningOff does not reveal enough intent.)
    // Use Pronouncable and Searchable Names (example: initPwrOff is not easily pronouncable or searchable.)
    initializeShutdown(): void {
        try {
            this.attemptShutdown();
        } catch (errorException) {
            this.logger.log(errorException);
        }
    }

    // Method names should have verb or verb phrases.
    attemptShutdown(): void {
        const id = this.getDeviceId();
        const handle = this.getHandle(id);
        this.pauseApp(handle);
        this.closeApp(handle);
    }

    // Pick one word per concept. Here we are using the verb "get" in these functions that return values.
    private getDeviceId(): number {
        return this.id;
    }

    private getHandle(id: number): string {
        const handle = id.toString();

        if (!this.handleIsValid(handle)) throw new Error(`Invalid handle for ID ${id}`);

        return handle;
    }

    // Don't Add Gratuitous Context (example: valideTheHandleIsNotEmpty)
    private handleIsValid(handle: string): boolean {
        return handle?.length > 0;
    }

    private pauseApp(handle: string) {
        // pause implementation
    }

    private closeApp(handle: string) {
        // close implementation
    }
}

class Logger {
    log(msg: any) {
        console.log(JSON.stringify(msg));
    }
}