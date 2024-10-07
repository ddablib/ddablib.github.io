# Windows10PlusVersion class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.30

```pascal
class function Windows10PlusVersion: TPJWin10PlusVersion;
```
## Description

Returns an identifier from the _[TPJWin10PlusVersion](./TPJWin10PlusVersion.md)_ enumeration that represents a Windows 10 or 11 release version, such as Windows 10 1507 or Windows 11 24H2.

If the OS is earlier than Windows 10 then _win10plusNA_ is returned.

If the OS is Windows 10 or later but is a dev, beta etc. build whose version can't be detected then _win10plusUnknown_ is returned.

## See Also

* _[Windows10PlusVersionName](./TPJOSInfo-Windows10PlusVersionName.md)_
* _[IsWindows10VersionOrLater](./TPJOSInfo-IsWindows10VersionOrLater.md)_
* _[IsWindows11VersionOrLater](./TPJOSInfo-IsWindows11VersionOrLater.md)_