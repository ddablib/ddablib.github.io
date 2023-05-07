# ServicePackMinor class function #

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

```pascal
class function ServicePackMinor: Integer;
```

## Description ##

On the NT platform from NT 4 service pack 6 onwards _ServicePackMinor_ returns the minor version number of any service pack applied to the operating system. Zero is returned if no service pack has been applied. On earlier versions of Windows NT or on the Windows 9x platform, zero is always returned.

The corresponding major service pack version number is provided by the _[ServicePackMajor](./TPJOSInfo-ServicePackMajor.md)_ method. A full description of the service pack, for any product, is available via the _[ServicePack](./TPJOSInfo-ServicePack.md)_ method.

When the program is run in compatibility mode, this method will return the service pack minor version of the "emulated" operating system.

[v5.0] On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the service pack minor version of the installed operating system, regardless of any compatibility mode.