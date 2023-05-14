# [System Information Unit](../index.md) Overview

**Applies to:** ~>5.0

> This page provides an overview of the features of the Systems Information Unit. If you are looking for information on programming with the unit please see the [Programmers’ Guide](./API.md).

This unit, contains a set of static classes that provide various pieces of system information. They are:

* [_TPJComputerInfo_](./API/TPJComputerInfo.md) -- Provides information about the computer system.
* [_TPJSystemFolders_](./API/TPJSystemFolders.md) -- Provides the paths of various standard system folders. 
* [_TPJOSInfo_](./API/TPJOSInfo.md) -- Provides information about the operating system.

The unit also defines a set of [global variables](./API/Globals.md) that compliment and extend the operating system information provided by global variables defined in the _SysUtils_ unit.

Certain Windows types and constants not defined by Delphi that assist in working with extended operating system information are declared in this unit. Help on these definitions can be found on MSDN or in the Windows platform SDK.

## Changes in v5.0

With the introduction of Windows 8.1 Microsoft has deprecated the _GetVersion_ and _GetVersionEx_ API functions that _PJSysInfo_ uses to get operating system version information. These API functions always return information about the reported operating system, which, when the program is running in compatibility mode, may be different to the true operating system. Furthermore _GetVersion_ will not detect Windows 8.1 correctly in all cases.

From version 5, to avoid using the deprecated API functions, a different approach is used to obtain version information when running on Windows 8.1 or later. This new method always returns information about the true operating system, regardless of any compatibility mode.

These changes mean that some of _TPJOSInfo_'s methods and some global variables are affected by compatibility mode when run on operating systems prior to Windows 8.1, but will ignore compatibility mode on Windows 8.1 and later.

_It is unfortunate that the class's behaviour is no longer consistent across operating systems, but there is no choice if the code is to abide by Microsoft's much criticised decision to deprecate and possibly remove the old API._

v5.0 also adds some new methods to _TPJOSInfo_ that can be used to detect operating systems that always ignore compatibility mode.

## Deprecated & Removed Code

Versions of _PJSysInfo_ prior to v3.0 contained a set of deprecated routines and a deprecated component that duplicated a subset of the system information exposed by the classes and global variables above. From v3.0 this deprecated code was not compiled unless the _PJSYSINFO\_COMPILE\_DEPRECATED_ symbol was defined before compiling the unit.

The deprecated code was removed entirely at v4.0.

## Compatibility

This unit should be able to be compiled with Delphi 4 and later, but later releases have only been tested with Delphi XE and later. It is compatible with Windows 32 bit an 64 bit targets.

The code depends on the Windows API and so is only suitable for compilation for Windows.

The unit is compatible with both VCL and FMX applications.

> Compilation on old Delphi versions that do not support setting registry access flags via _TRegistry_ is not recommended since parts of the code may not work correctly on 64 bit Windows.

## Links

* [Programmers’ Guide](./API.md)
