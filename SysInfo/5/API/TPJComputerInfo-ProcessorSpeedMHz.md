# ProcessorSpeedMHz class function #

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJComputerInfo](./TPJComputerInfo.md)_

**Introduced:** v5.4

```pascal
class function ProcessorSpeedMHz: Cardinal;
```

## Description ##

Returns the speed of the computer's processor in megahertz (MHz).

On multi-processor systems the method returns the speed of the 1st processor.

If the processor speed cannot be found then `0` is returned.

**See also**

* _[ProcessorIdentifier](./TPJComputerInfo-ProcessorIdentifier.md)_
* _[ProcessorName](./TPJComputerInfo-ProcessorName.md)_
