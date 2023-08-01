# Error Handling

```
class App {
    constructor(id: number) {
        this.id = id;
    }
    id: number;
    logger = new Logger();

    initializeShutdown(): void {
        try { 
            this.attemptShutdown();
        } catch (errorException) {
            this.logger.log(errorException);
        }
    }
```
Notice the initializeShutdown() function. This code is cleaner because it is not cluttered by the error handling.
Write your Try-Catch-Finally statement first in order to leave the program in a consistent state no matter what happens within the try block.

Seperation of concerns:
The code for the device shutdown and the error handling are seperated.
```
    attemptShutdown(): void {
        const id = this.getDeviceId();
        const handle = this.getHandle(id);
        this.pauseApp(handle);
        this.closeApp(handle);
    }

    private getDeviceId(): number {
        return this.id;
    }
```
Using exceptions allows for cleaner code when handling errors, as opposed to return codes.
Please provide context with exceptions. This helps us see for what ID the error occured and makes the error message more useful.
```
    private getHandle(id: number): string {
        const handle = id.toString();

        if (!handle) throw new Error(`Invalid handle for ID ${id}`);

        return handle;
    }
}
```
Lastly, the implementation of the logger is seperated to another class.
It's implementation can change in one spot.
```
class Logger {
    log(msg: any) {
        console.log(JSON.stringify(msg));
    }
}
```