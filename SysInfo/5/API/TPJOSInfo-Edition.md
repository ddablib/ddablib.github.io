# Edition class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function Edition: string;
```

## Description

Returns the name of a specific edition of an NT platform operating system product. An empty string is returned if no specific edition information is available or if the operating system is part of the Windows 9x platform. This method does not include the main product name - this can be found by using the _[ProductName](./TPJOSInfo-ProductName.md)_ method.

For example for Windows 2000 Professional, _Edition_ will return 'Professional' while _ProductName_ returns 'Windows 2000'.

When the program is run in compatibility mode, this method will return the edition of the "emulated" operating system.

On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the edition of the installed operating system, regardless of any compatibility mode.
