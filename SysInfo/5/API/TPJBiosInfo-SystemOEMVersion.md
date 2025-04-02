# SystemOEMVersion method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemOEMVersion: string;
```

## Description

Gets a string containing an OEM specific version number.

_Returns:_

* A string containing required version number.

    _Special return value:_

    * An empty string is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.

## Note

1. Be aware that a string containing only white space could be returned by the BIOS.

2. This value does not relate to the BIOS version or the SMBIOS references specification version.

## See also

* [BiosVersion](./TPJBiosInfo-BiosVersion.md)
* [BiosVersionStr](./TPJBiosInfo-BiosVersionStr.md)
* [BiosECFirmwareVersion](./TPJBiosInfo-BiosECFirmwareVersion.md)
* [SMBiosSpecVersion](./TPJBiosInfo-SMBiosSpecVersion.md)