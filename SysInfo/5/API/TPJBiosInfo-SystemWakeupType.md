# SystemWakeupType method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJBiosInfo](./TPJBiosInfo.md)_

**Applies to:** ~>5.32

```pascal
function SystemWakeupType: TPJBiosWakeupType;
  string;
```

## Description

Identifies the event that caused the computer to power up.

> Requires support for SMBIOS reference specification v2.1 or later.

_Returns:_

* A value from the _[TPJBiosWakeupType](./TPJBiosWakeupType.md)_ enumerated type that describes the required power up event.

    _Special return value:_

    * _wutUnknown_ is returned if either of the following conditions apply:
        * the BIOS is not supported;
        * the BIOS does not support the SMBIOS reference specification v2.1 or later.