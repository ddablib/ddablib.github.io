# BiosVendor method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function BiosVendor: string;
```

## Description

Returns the name of the BIOS' vendor.

_Returns:_

* A string containing the required vendor name.

    _Special return value:_

    * An empty string is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.

## Notes

1. Be aware that a string containing only white space could be returned by the BIOS.

2. The SMBIOS reference specification requires that all strings are stored in the BIOS in UTF-8 format. On versions of Delphi that support Unicode, the required string is converted from UTF-8 before returning it. On older Delphis that don't support Unicode, the string is returned unaltered. 

3. The returned value may be, but is not guaranteed to be, the same as that returned by _[TPJComputerInfo.BiosVendor](./TPJComputerInfo-BiosVendor.md)_.

## See also

* [SystemFamily](./TPJBiosInfo-SystemFamily.md)
* [SystemManufacturer](./TPJBiosInfo-SystemManufacturer.md)
* [SystemProductName](./TPJBiosInfo-SystemProductName.md)
