# BiosVendor method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function IsBiosSupported: Boolean;
```

## Description

Checks whether the BIOS is supported or not.

_Returns:_

* `True` if the BIOS is supported, `False` if not.

## Notes 

1. For a BIOS to be supported:

    * The Windows API function to read the BIOS information must be supported by the operating system.
    * The Windows API function must be able to read the computer's BIOS information.
    * The BIOS must support the SMBIOS reference specification v2.0 or later.

2. While all methods of _TPJBiosInfo_ can be called safely for unsupported BIOSs, this is not good practice. It is best to check whether _IsBiosSupported_ returns `True` before calling any other methods.
