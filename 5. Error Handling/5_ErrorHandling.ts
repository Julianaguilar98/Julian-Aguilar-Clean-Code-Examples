//Error Handling

// Using exceptions allows for cleaner code when handling errors, as opposed to return codes.
class App {
    constructor(id: number) {
        this.id = id;
    }
    id: number;
    logger = new Logger();

    initializeShutdown(): void { //This code is cleaner because it is not cluttered by the error handling.
        try { //Write your Try-Catch-Finally statement first in order to leave the program in a consistent state no matter what happens within the try block.
            this.attemptShutdown();
        } catch (errorException) {
            this.logger.log(errorException); // Seperation of concerns: The code for the device shutdown and the error handling are seperated.
        }
    }

    attemptShutdown(): void {
        const id = this.getDeviceId();
        const handle = this.getHandle(id);
        this.pauseApp(handle);
        this.closeApp(handle);
    }

    private getDeviceId(): number {
        return this.id;
    }

    private getHandle(id: number): string {
        const handle = id.toString();

        if (!handle) throw new Error(`Invalid handle for ID ${id}`); // Provide context with exceptions. This helps us see for what ID the error occured and makes the error message more useful.

        return handle;
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