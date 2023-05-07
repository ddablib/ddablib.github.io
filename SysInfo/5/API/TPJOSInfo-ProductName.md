# ProductName class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

```pascal
class function ProductName: string;
```

## Description

Returns the name of the operating system product. The product can be thought of as the marketing name for the operating system. If the product can't be determined then the empty string is returned.

The product name for both Windows NT 3.51 and Windows NT 4 is "Windows NT". Use the _[MajorVersion](./TPJOSInfo-MajorVersion.md)_ and _[MinorVersion](./TPJOSInfo-MinorVersion.md)_ methods to distinguish between them.

A unique code representing the OS product can be found by using the _[Product](./TPJOSInfo-Product.md)_ method.

When the program is run in compatibility mode, this method will return the product name of the "emulated" operating system.

[v5.0] On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the product name of the installed operating system, regardless of any compatibility mode.
