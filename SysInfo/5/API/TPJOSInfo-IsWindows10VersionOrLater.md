# IsWindows10VersionOrLater class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.30

```pascal
class function IsWindows10VersionOrLater(
  const AVersion: TPJWin10PlusVersion): Boolean;
```

## Description

Checks if the operating system is Windows 10 or later, with a release version identifier the same or later than the given version.

Parameter:

* _AVersion_ -- A version identifier of type _[TPJWin10PlusVersion](./TPJWin10PlusVersion.md)_ that is Windows 10 release version identifier. Must be an identifier with a name beginning with _win10v_, i.e. _win10v1507_ to _win10v22H2_.

Exception:

* _EPJSysInfo_ -- raised if _AVersion_ is not a valid Windows 10 version identifier.

## See Also

* _[IsReallyWindows10OrGreater](./TPJOSInfo-IsReallyWindows10OrGreater.md)_
* _[IsWindows11VersionOrLater](./TPJOSInfo-IsWindows11VersionOrLater.md)_
* _[Windows10PlusVersion](./TPJOSInfo-Windows10PlusVersion.md)_
* _[Windows10PlusVersionName](./TPJOSInfo-Windows10PlusVersionName.md)_
