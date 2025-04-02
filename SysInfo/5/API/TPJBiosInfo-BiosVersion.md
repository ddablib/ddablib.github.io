# BiosVersion method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function BiosVersion: Word;
```

## Description

Returns the release version number of the BIOS.

This version number returned by this method may be different to that returned by the _[BiosVersionStr](./TPJBiosInfo-BiosVersionStr.md)_ method.

> Requires support for SMBIOS reference specification v2.4 or later.

_Returns:_

* The version number encoded into a _Word_ value. The high byte contains the major version number and the low byte contains the minor version number.

    _Special return value:_

    * `0` is returned if any of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not support SMBIOS reference specification v2.4 or later;
        * the BIOS does not provide the required information.

## Note

Assuming that the return value of _BiosECFirmwareVersion_ has been stored in variable _V_ of type type _Word_ then `V shr 8` extracts the major version number and `V and $FF` extracts the minor version number.

## See also

* [BiosVersionStr](./TPJBiosInfo-BiosVersionStr.md)
* [BiosECFirmwareVersion](./TPJBiosInfo-BiosECFirmwareVersion.md)
* [SMBiosSpecVersion](./TPJBiosInfo-SMBiosSpecVersion.md)
* [SystemOEMVersion](./TPJBiosInfo-SystemOEMVersion.md)