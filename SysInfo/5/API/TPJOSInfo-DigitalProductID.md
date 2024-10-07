# DigitalProductID class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.30

```pascal
class function DigitalProductID: TBytes;
```

## Description

Returns a byte array containing the bytes of the digital product ID of the host OS, if a digital license is held for it.

If no digital product ID is found then an empty byte array is returned.

This ID is different, but similar, to the product ID string returned by the _[ProductID](./TPJOSInfo-ProductID.md)_ method.
