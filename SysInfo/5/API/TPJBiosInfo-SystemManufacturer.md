# SystemManufacturer method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemManufacturer: string;
```

## Description

Gets the name of the computer's manufacturer.

_Returns:_

* A string containing the required name.

    _Special return value:_

    * An empty string is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.

## Notes

1. Be aware that a string containing only white space could be returned by the BIOS.

2. The returned value may be, but is not guaranteed to be, the same as that returned by _[TPJComputerInfo.SystemManufacturer](./TPJComputerInfo-SystemManufacturer.md)_.

## See also

* [BiosVendor](./TPJBiosInfo-BiosVendor.md)
* [SystemFamily](./TPJBiosInfo-SystemFamily.md)
* [SystemProductName](./TPJBiosInfo-SystemProductName.md)
