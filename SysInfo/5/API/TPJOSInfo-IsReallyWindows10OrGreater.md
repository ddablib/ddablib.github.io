# IsReallyWindows10OrGreater class method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.1

```pascal
class function IsReallyWindows10OrGreater: Boolean;
```

## Description

Checks whether the OS is Windows 10 or greater.

Regardless of whether the program is running in compatibility this method will always return information about the installed operating system.

> ⚠️ For Windows 10, this method returns false unless the application contains a manifest that includes a compatibility section that contains the GUID that designates Windows 10.

This method is identical in function to the function with a similar name declared in `versionhelpers.h`: see <https://learn.microsoft.com/en-gb/windows/win32/sysinfo/version-helper-apis> for details.

## See Also

* _[IsWindows10VersionOrLater](./TPJOSInfo-IsWindows10VersionOrLater.md)_
* _[IsWindows11VersionOrLater](./TPJOSInfo-IsWindows11VersionOrLater.md)_
* _[Windows10PlusVersion](./TPJOSInfo-Windows10PlusVersion.md)_
