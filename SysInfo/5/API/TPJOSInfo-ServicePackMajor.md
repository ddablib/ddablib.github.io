# ServicePackMajor class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function ServicePackMajor: Integer;
```

## Description

On the NT platform from NT 4 service pack 6 onwards _ServicePackMajor_ returns the major version number of any service pack applied to the operating system. Zero is returned if no service pack has been applied. On earlier versions of Windows NT or on the Windows 9x platform, zero is alwys returned.

The corresponding minor service pack version number is provided by the _[ServicePackMinor](./TPJOSInfo-ServicePackMinor.md)_ method. A full description of the service pack, for any product, is available via the _[ServicePack](./TPJOSInfo-ServicePack.md)_ method.

When the program is run in compatibility mode, this method will return the service pack major version of the "emulated" operating system.

On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the service pack major version of the installed operating system, regardless of any compatibility mode.
