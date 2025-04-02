# SystemSKUNumber method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemSKUNumber: string;
```

## Description

Returns the computer's SKU number as a string.

This string identifies a particular computer configuration for sale. It is sometimes also called a product ID or purchase order number. There is no standard format.

> Requires support for SMBIOS reference specification v2.4 or later.

_Returns:_

* A string containing the SKU number.

    _Special return value:_

    * An empty string is returned if any of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.
        * the BIOS does not support SMBIOS reference specification v2.4 or later;

## Note

Be aware that a string containing only white space could be returned by the BIOS.

## See also

* [SystemSerialNumber](./TPJBiosInfo-SystemSerialNumber.md)
