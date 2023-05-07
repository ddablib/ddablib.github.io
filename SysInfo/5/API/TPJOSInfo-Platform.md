# Platform class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function Platform: TPJOSPlatform;

type TPJOSPlatform = (ospWinNT, ospWin9x, ospWin32s);
```

## Description

Returns a value from the _TPJOSPlatform_ enumeration identifying the OS platform. Possible values are:

| Value | Meaning |
|:------|:--------|
| `ospWinNT` | Windows NT platform. |
| `ospWin9x` | Windows 9x platform. |
| `ospWin32s` | The Win32s platform running on another operating system. |

If the platform is not recognised an _EPJSysInfo_ exception is raised.

When the program is run in compatibility mode, this method will return the platform of the "emulated" operating system.

On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the platform of the installed operating system, regardless of any compatibility mode.
