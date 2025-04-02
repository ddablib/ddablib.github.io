# BiosVersionStr method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function BiosVersionStr: string;
```

## Description

Returns a string representation of the BIOS Version. This value is a free-form string that may contain Core and OEM version information. 

The version number represented by this string may be different to that returned by the _[BiosVersion](./TPJBiosInfo-BiosVersion.md)_ method.

_Returns:_

* A string containing the required version.

    _Special return value:_

    * An empty string is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.

## Note

Be aware that a string containing only white space could be returned by the BIOS.

# See also

* [BiosVersion](./TPJBiosInfo-BiosVersion.md)
* [SystemOEMVersion](./TPJBiosInfo-SystemOEMVersion.md)
