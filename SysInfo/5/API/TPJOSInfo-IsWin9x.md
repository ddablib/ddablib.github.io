# IsWin9x class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function IsWin9x: Boolean;
```

## Description

Returns True if a Windows 9x operating system is installed (i.e. Windows 95, Windows 98 or Windows Me) or False otherwise.

When the program is run in compatibility mode, this method will test whether of the "emulated" operating system is a Windows 9x system.

On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will always return `False`, because _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ only returns `False` on Windows NT systems.
