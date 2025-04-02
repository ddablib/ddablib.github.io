# SystemSerialNumber method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemSerialNumber: string;
```

## Description

Returns the computer's serial number.

_Returns:_

* A string containing the serial number.

    _Special return value:_

    * An empty string is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not provide the required information.

## Note

Be aware that a string containing only white space could be returned by the BIOS.

## See also

* [SystemSKUNumber](./TPJBiosInfo-SystemSKUNumber.md)
