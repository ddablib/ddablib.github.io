# Windows10PlusVersionName class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.30

```pascal
class function Windows10PlusVersionName: string;
```
## Description

Returns the release version name of a Windows 10 or 11 operating system, such as `'1507'` or `'24H2'`. If the operating system is earlier than Windows 10 then an empty string is returned.

If the OS is earlier than Windows 10 then an is returned.

If the OS is Windows 10 or later but is a dev, beta etc. build whose version can't be detected then `'Unknown'` is returned.

## Note

Some Windows 10 and 11 versions have the same string, such as `'22H2'`.

## See Also

* _[Windows10PlusVersion](./TPJOSInfo-Windows10PlusVersion.md)_
* _[IsWindows10VersionOrLater](./TPJOSInfo-IsWindows10VersionOrLater.md)_
* _[IsWindows11VersionOrLater](./TPJOSInfo-IsWindows11VersionOrLater.md)_
