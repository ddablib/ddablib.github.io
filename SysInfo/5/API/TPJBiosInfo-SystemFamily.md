# SystemFamily method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemFamily: string;
```

## Description

Gets the name of a family of products to which the computer belongs.

A family refers to a set of computers that are similar but not identical from a hardware or software point of view. Typically, a family is composed of different computer models, which have different configurations and prices.

> Requires support for SMBIOS reference specification v2.4 or later.

_Returns:_

* A string containing the required family name.

    _Special return value:_

    * An empty string is returned if any of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.
        * the BIOS does not support SMBIOS reference specification v2.4 or later;

## Note

Be aware that a string containing only white space could be returned by the BIOS.

## See also

* [BiosVendor](./TPJBiosInfo-BiosVendor.md)
* [SystemManufacturer](./TPJBiosInfo-SystemManufacturer.md)
* [SystemProductName](./TPJBiosInfo-SystemProductName.md)
