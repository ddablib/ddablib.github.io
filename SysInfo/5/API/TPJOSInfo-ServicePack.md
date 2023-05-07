# ServicePack class function #

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

```pascal
class function ServicePack: string;
```

## Description ##

Returns a description of any operating system service pack. An empty string is returned if there is no service pack.

On the Windows 9x platform the system returns a code for each service pack. This method translates this code into a full description. On NT operating systems from NT 4 service pack 6 onwards the service pack version number is available in the _[ServicePackMajor](./TPJOSInfo-ServicePackMajor.md)_ and _[ServicePackMinor](./TPJOSInfo-ServicePackMinor.md)_ methods.

When the program is run in compatibility mode, this method will return the service pack of the "emulated" operating system.

[v5.0] On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the service pack of the installed operating system, regardless of any compatibility mode.