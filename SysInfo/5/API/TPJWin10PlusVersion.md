# TPJWin10PlusVersion type

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_

**Applies to:** ~>5.30

```pascal
type
  TPJWin10PlusVersion = (
    win10plusNA, win10plusUnknown,
    win10v1507, win10v1511, win10v1607, win10v1703, win10v1709, win10v1803,
    win10v1809, win10v1903, win10v1909, win10v2004, win10v20H2, win10v21H1,
    win10v21H2, win10v22H2,
    win11v21H2, win11v22H2, win11v23H2, win11v24H2
  );
```

## Description

This is an enumeration of the various versions of Windows 10 and 11, e.g.s Windows 10 version 1809 and Windows 11 23H2, with some no-version values.

Values are:

| Value              | Description |
|:-------------------|:------------|
| _win10plusNA_      | Used for all detected versions of Windows prior to Windows 10 |
| _win10plusUnknown_ | Used for Windows 10 and later where the version can't be detected |
| _win10v1507_       | Windows 10 version 1507 (the original version) |
| _win10v1511_       | Windows 10 version 1511 |
| _win10v1607_       | Windows 10 version 1607 |
| _win10v1703_       | Windows 10 version 1703 |
| _win10v1709_       | Windows 10 version 1709 |
| _win10v1803_       | Windows 10 version 1803 |
| _win10v1809_       | Windows 10 version 1809 |
| _win10v1903_       | Windows 10 version 1903 |
| _win10v1909_       | Windows 10 version 1909 |
| _win10v2004_       | Windows 10 version 2004 |
| _win10v20H2_       | Windows 10 version 20H2 |
| _win10v21H1_       | Windows 10 version 21H1 |
| _win10v21H2_       | Windows 10 version 21H2 |
| _win10v22H2_       | Windows 10 version 22H2 |
| _win11v21H2_       | Windows 11 version 21H2 |
| _win11v22H2_       | Windows 11 version 22H2 |
| _win11v23H2_       | Windows 11 version 23H2 |
| _win11v24H2_       | Windows 11 version 24H2 |

## Notes

Values of this type are returned by the _[Windows10PlusVersion](./TPJOSInfo-Windows10PlusVersion.md)_ method.

_[IsWindows10VersionOrLater](./TPJOSInfo-IsWindows10VersionOrLater.md)_ accepts a subset of these values as a parameter (i.e. _win10v1507_ to _win10v22H2_).

_[IsWindows11VersionOrLater](./TPJOSInfo-IsWindows11VersionOrLater.md)_ accepts a subset of these values as a parameter (i.e. _win11v21H2_ to _win11v24H2_).

## See Also

* _[Windows10PlusVersion](./TPJOSInfo-Windows10PlusVersion.md)_
* _[IsWindows10VersionOrLater](./TPJOSInfo-IsWindows10VersionOrLater.md)_
* _[IsWindows11VersionOrLater](./TPJOSInfo-IsWindows11VersionOrLater.md)_
