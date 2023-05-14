# UnlockRegion method

**Project:** [Stream Extension Classes](../API.md)

**Unit:** [_PJIStreams_](./PJIStreams.md)

**Classes:** [_TPJIStreamWrapper_](./TPJIStreamWrapper.md), [_TPJHandleIStreamWrapper_](./TPJHandleIStreamWrapper.md), [_TPJFileIStream_](./TPJFileIStream.md)

**Applies to:** ~>3.0

```pascal
function UnlockRegion(libOffset: Largeint; cb: Largeint;
  dwLockType: Longint): HResult; virtual; stdcall;
```

## Description

_Does nothing._

This method may remove the access restriction on a range of bytes previously restricted with [_LockRegion_](TPJIStreamWrapper-LockRegion.md). It is optional whether support is provided for region locking -- this implementation does not do so. A do-nothing stub method is provided that returns the value required by the [Microsoft documentation](https://learn.microsoft.com/en-gb/windows/win32/api/objidl/nf-objidl-istream-unlockregion).

Parameters:

* _libOffset_ -- Byte offset of the beginning of the restricted range to be unlocked. _Ignored._
* _cb_ -- Length of the restricted range in bytes. _Ignored._
* _dwLockType_ -- Access restrictions previously placed on the range. Valid values are from the [_LOCKTYPE_](https://learn.microsoft.com/en-gb/windows/win32/api/objidl/ne-objidl-locktype). _Ignored._

Returns:

* _STG_E_INVALIDFUNCTION_ in all cases.
