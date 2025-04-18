# SystemProductName class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJComputerInfo](./TPJComputerInfo.md)_

**Applies to:** ~>5.0

```pascal
class function SystemProductName: string;
```

## Description

Returns the model (product) name of the host computer.

The returned name does not include the computer's manufacturer. To get that, use the _[SystemManufacturer](./TPJComputerInfo-SystemManufacturer.md)_ property.

## Note

The returned value may be, but is not guaranteed to be, the same as that returned by _[TPJBiosInfo.SystemProductName](./TPJBiosInfo-SystemProductName.md)_.