# SystemProductName class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJComputerInfo](./TPJComputerInfo.md)_

**Introduced:** v4.0

```pascal
class function SystemProductName: string;
```

## Description

Returns the model (product) name of the host computer.

The returned name does not include the computer's manufacturer. To get that, use the _[SystemManufacturer](./TPJComputerInfo-SystemManufacturer.md)_ property.
