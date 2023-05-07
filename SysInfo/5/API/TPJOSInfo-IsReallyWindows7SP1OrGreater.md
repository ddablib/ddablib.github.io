# IsReallyWindows7SP1OrGreater class method

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function IsReallyWindows7SP1OrGreater: Boolean;
```

## Description

Checks whether the OS is Windows 7 Service Pack 1 or greater.

Regardless of whether the program is running in compatibility this method will always return information about the installed operating system.

This method is identical in function to the function with a similar name declared in `versionhelpers.h`: see <https://learn.microsoft.com/en-gb/windows/win32/sysinfo/version-helper-apis> for details.
