# ProcessorName class function #

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJComputerInfo](./TPJComputerInfo.md)_

**Introduced:** v4.0

```pascal
class function ProcessorName: string;
```

## Description ##

Returns a descriptive name for the computer's processor.

On multi-processor systems the method returns the name of the 1st processor.

An example processor name is "`Intel(R) Core(TM) i7-3610QM CPU @ 2.30GHz`".

**See also**

* _[ProcessorIdentifier](./TPJComputerInfo-ProcessorIdentifier.md)_
* _[ProcessorSpeedMHz](./TPJComputerInfo-ProcessorSpeedMHz.md)_ 
