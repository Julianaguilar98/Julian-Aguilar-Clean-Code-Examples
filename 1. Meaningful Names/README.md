## Meaningful Names
# Use Intent Revealing Names and Pronouncable Names
```
    initClose(): void {
        try {
            this.tryClosing();
        } catch (errorException) {
            this.logger.log(errorException);
        }
    }
```
startClose() and tryClosing() do not reveal enough intent.
initClose() is also not easily searchable or pronouncable.
```
    initializeShutdown(): void {
        try {
            this.attemptShutdown();
        } catch (errorException) {
            this.logger.log(errorException);
        }
    }
```

#Method names should have verb or verb phrases
```
    attemptShutdown(): void {
        const id = this.getDeviceId();
        const handle = this.getHandle(id);
        this.pauseApp(handle);
        this.closeApp(handle);
    }
```

#Pick one word per concept
Here we are using the verb "get" in these functions that return values.
```
    private getDeviceId(): number {
        return this.id;
    }

    private getHandle(id: number): string {
        const handle = id.toString();

        if (!this.handleIsValid(handle)) throw new Error(`Invalid handle for ID ${id}`);

        return handle;
    }

```

#Don't add gratuitous content
```
    private validateTheHandleIsNotEmpty(handle: string): boolean {
        return handle?.length > 0;
    }
```
This can be simplified to: 
```
   private handleIsValid(handle: string): boolean {
        return handle?.length > 0;
    }
```
