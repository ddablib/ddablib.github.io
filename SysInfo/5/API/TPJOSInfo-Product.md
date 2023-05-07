# Product class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function Product: TPJOSProduct;

type TPJOSProduct = (
  osUnknownWinNT, osWinNT, osWin2K, osWinXP,
  osUnknownWin9x, osWin95, osWin98, osWinMe,
  osUnknownWin32s, osWinSvr2003, osUnknown, osWinVista,
  osWinSvr2003R2, osWinSvr2008, osWinLater,
  osWin7, osWinSvr2008R2,       // defined in v3.1 and later
  osWin8, osWinSvr2012,         // defined in v3.4 and later
  osWin8Point1, osWinSvr2012R2, // defined in v5.0 and later
  osWin10, osWin10Svr,          // defined in v5.1 and later
  osWinSvr2019,                 // defined in v5.4 and later
  osWin11, osWinSvr2022,        // defined in v5.6 and later
  osWinServer                   // defined in v5.9 and later
);
```

## Description

Returns a value from the _TPJOSProduct_ enumeration that identifies the operating system product. Possible values of _TPJOSProduct_ are:

| Code | Description |
|:-----|:------------|
| `osWin95` | Windows 95 or Windows 95 OSR1. |
| `osWin98` | Windows 98 or Windows 98 SE. |
| `osWinMe` | Windows Me. |
| `osWinNT` | Windows NT (v3.51 to v4) - needs major and minor version information to fully identify the version. |
| `osWin2k` | Windows 2000. |
| `osWinXP` | Windows XP. |
| `osWinVista` | Windows Vista. |
| `osWin7` | Windows 7. |
| `osWin8` | Windows 8. |
| `osWin8Point1` | Windows 8.1. † |
| `osWin10` [~>5.1] | Windows 10. † |
| `osWin11` [~>5.6] | Windows 11. † |
| `osWinSvr2003` | Windows Server 2003. |
| `osWinSvr2003R2` | Windows Server 2003 R 2. |
| `osWinSvr2008` | Windows Server 2008. |
| `osWinSvr2008R2`| Windows Server 2008 R 2. |
| `osWinSvr2012` | Windows Server 2012. |
| `osWinSvr2012R2` | Windows Server 2012 R 2. † |
| `osWin10Svr` [~>5.1] | Windows 2016 Server. † |
| `osWinSvr2019` [~>5.4] | Windows 2019 Server. † |
| `osWinSvr2022` [~>5.6] | Windows 2022 Server. † |
| `osWinServer` [~>5.9] | Windows 2022 Server. † |
| `osWinLater` | An unknown version of Windows released after the most recent version of Windows identified above. |
| `osUnknownWinNT` | An unknown product on the Windows NT platform. |
| `osUnknownWin9x` | An unknown product on the Windows 9x platform. |
| `osUnknownWin32s` | An operating system running on the Win32s platform. |
| `osUnknown` | An unknown operating system on an unknown platform. |

When the program is run in compatibility mode, this method will return the product code of the "emulated" operating system.

On operating systems where _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ returns `False` this method will return the product code of the installed operating system, regardless of any compatibility mode. †

To find the string representation of the product name use the _[ProductName](./TPJOSInfo-ProductName.md)_ method.

> † ⚠️ From Windows 8.1 / Win dows Server 2012 R 2 onwards, the correct operating system will only be returned if the host application contains a manifest that includes a compatibility section that contains the GUID that designates the appropriate version of Windows. If there is no such manifest, or the designated Windows version is lower than that of the operating system then _Product_ will return the code for an earlier operating system. This rule applies regardless of the value returned from _[CanSpoof](./TPJOSInfo-CanSpoof.md)_.
