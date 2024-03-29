# RevisionNumber class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.6

```pascal
class function RevisionNumber: Integer;
```

## Description

Stores the operating system's revision number.

If no revision number is found then `0` is returned.

## Notes

The revision number is read from the registry.

Basic tests indicate that this value cannot be spoofed, but registry spoofing is known to vary between different OS versions, so this test result is not conclusive.

## See Also

  * _[BuildNumber](./TPJOSInfo-BuildNumber.md)_
