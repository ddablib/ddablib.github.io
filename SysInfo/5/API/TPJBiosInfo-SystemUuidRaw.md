# SystemUuidRaw method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemUuidRaw: TBytes;
```

## Description

Returns the BIOS' universal unique ID number (UUID) as an array of bytes.

This value will be globally unique.

> Requires support for SMBIOS reference specification v2.1 or later.

_Returns:_

* A 16 byte array containing the UUID.

    _Special return values:_

    * An empty byte array is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not support the SMBIOS reference specification v2.1 or later.
    * A byte array with all 16 bytes set to zero is returned when the system has no UUID present.
    * A byte array with all 16 bytes set to `$FF` is retutned when no UUID is currently present but one could be set in future.

## See also

* [SystemUuid](./TPJBiosInfo-SystemUuid.md)
* [SystemUuidStr](./TPJBiosInfo-SystemUuidStr.md)
