# IsWindows11VersionOrLater class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.30

```pascal
class function IsWindows11VersionOrLater(
  const AVersion: TPJWin10PlusVersion): Boolean;
```

## Description

Checks if the operating system is Windows 11 or later, with a release version identifier the same or later than the given version.

Parameter:

* _AVersion_ -- A version identifier of type _[TPJWin10PlusVersion](./TPJWin10PlusVersion.md)_ that is Windows 11 release version identifier. Must be an identifier with a name beginning with _win11v_, i.e. _win11v21H2_ to _win11v24H2_.

Exception:

* _EPJSysInfo_ -- raised if _AVersion_ is not a valid Windows 11 version identifier.

## See Also

* _[IsReallyWindows10OrGreater](./TPJOSInfo-IsReallyWindows10OrGreater.md)_
* _[IsWindows10VersionOrLater](./TPJOSInfo-IsWindows10VersionOrLater.md)_
* _[Windows10PlusVersion](./TPJOSInfo-Windows10PlusVersion.md)_
* _[Windows10PlusVersionName](./TPJOSInfo-Windows10PlusVersionName.md)_
