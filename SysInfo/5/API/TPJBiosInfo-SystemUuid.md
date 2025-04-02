# SystemUuid method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemUuid: TGUID;
```

## Description

Returns the BIOS' universal unique ID number (UUID) as a 16 byte number, encoded in the format specified by the SMBIOS reference specification.

This value will be globally unique.

> Requires support for SMBIOS reference specification v2.1 or later.

_Returns:_

* A _TGUID_ containing the UUID.

    _Special return values:_

    * A _TGUID_ with all bytes set to zero is returned if any of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not specify a UUID;
        * any UUID provided by the BIOS is not 16 bytes long;
        * the BIOS does not support the SMBIOS reference specification v2.1 or later.
    * A _TGUID_ with all bytes set to `$FF` is returned if no UUID is currently present but one could be set in future.

## See also

* [SystemUuidRaw](./TPJBiosInfo-SystemUuidRaw.md)
* [SystemUuidStr](./TPJBiosInfo-SystemUuidStr.md)
