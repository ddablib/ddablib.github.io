# SMBiosSpecVersion method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SMBiosSpecVersion: Word;
```

## Description

Gets the version of the SMBIOS specification supported by the BIOS.

_Returns:_

* The version number, encoded into a _Word_ value. The high byte contains the major version number and the low byte contains the minor version number.

    _Special return value:_

    * `0` is returned if either of the following conditions apply.
        * the BIOS is not supported;
        * the BIOS data is corrupt.

## Note

Assuming that the return value of _SMBiosSpecVersion_ has been stored in variable _V_ of type type _Word_ then `V shr 8` extracts the major version number and `V and $FF` extracts the minor version number.

## See also

* [BiosVersion](./TPJBiosInfo-BiosVersion.md)
* [BiosECFirmwareVersion](./TPJBiosInfo-BiosECFirmwareVersion.md)