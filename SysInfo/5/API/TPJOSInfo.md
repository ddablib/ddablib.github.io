# TPJOSInfo #

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

This is a static class that gives access to information about the operating system on which the program is running. All the class' functionality is exposed through its static methods. Because it is static the class does not need to be instantiated before use.

When the host program is run in compatibility mode many of _TPJOSInfo_'s methods will be spoofed into returning information about the emulated operating system.

[v5.0] Compatibility mode has no effect on information returned by any of _TPJOSInfo_'s methods when running on Windows 8.1 or later. Use the _[TPJOSInfo.CanSpoof](./TPJOSInfo-CanSpoof.md)_ [v5.0] method to find out if the returned information _could_ have been spoofed.

[v5.0 ] _TPJOSInfo_ also provides some [new methods](./TPJOSInfo-IsReallyWindows-Methods.md) that can be used to query the operating system version regardless of any compatibility mode.

## Methods ##

| **Method** | **Description** |
|:-----------|:----------------|
| _[BuildNumber](./TPJOSInfo-BuildNumber.md)_ | Gets the operating system build number. |
| _[CanSpoof](./TPJOSInfo-CanSpoof.md)_ [v5.0] | Checks if the OS can be "spoofed" by specifying a compatibility mode for the program. |
| _[Description](./TPJOSInfo-Description.md)_ | Gets a full information about of an operating system version. |
| _[Edition](./TPJOSInfo-Edition.md)_ | Gets the edition of an operating system product. |
| _[HasPenExtensions](./TPJOSInfo-HasPenExtensions.md)_ | Checks for Windows Pen Extensions. |
| _[InstallationDate](./TPJOSInfo-InstallationDate.md)_ [v5.0] | Gets the date that Windows was installed. |
| _[IsMediaCenter](./TPJOSInfo-IsMediaCenter.md)_ | Checks for Windows Media Center. |
| _[IsReallyWindows2000OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 2000 or greater. Ignores compatibility mode. |
| _[IsReallyWindows2000SP1OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 2000 Service Pack 1 or greater. Ignores compatibility mode. |
| _[IsReallyWindows2000SP2OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 2000 Service Pack 2 or greater. Ignores compatibility mode. |
| _[IsReallyWindows2000SP3OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 2000 Service Pack 3 or greater. Ignores compatibility mode. |
| _[IsReallyWindows2000SP4OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 2000 Service Pack 4 or greater. Ignores compatibility mode. |
| _[IsReallyWindows7OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0]| Checks whether the OS is Windows 7 or greater. Ignores compatibility mode. |
| _[IsReallyWindows7SP1OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 7 Service Pack 1 or greater. Ignores compatibility mode. |
| _[IsReallyWindows8OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 8 or greater. Ignores compatibility mode. |
| _[IsReallyWindows8Point1OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows 8.1 or greater. Ignores compatibility mode. |
| _[IsReallyWindowsVistaOrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows Vista or greater. Ignores compatibility mode. |
| _[IsReallyWindowsVistaSP1OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows Vista Service Pack 1 or greater. Ignores compatibility mode. |
| _[IsReallyWindowsVistaSP2OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows Vista Service Pack 2 or greater. Ignores compatibility mode. |
| _[IsReallyWindowsXPOrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows XP or greater. Ignores compatibility mode. |
| _[IsReallyWindowsXPSP1OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows XP Service Pack 1 or greater. Ignores compatibility mode. |
| _[IsReallyWindowsXPSP2OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows XP Service Pack 2 or greater. Ignores compatibility mode. |
| _[IsReallyWindowsXPSP3OrGreater](./TPJOSInfo-IsReallyWindows-Methods.md)_ [v5.0] | Checks whether the OS is Windows XP Service Pack 3 or greater. Ignores compatibility mode. |
| _[IsRemoteSession](./TPJOSInfo-IsRemoteSession.md)_ [v3.3] | Checks for a Windows Terminal Server remote session. |
| _[IsServer](./TPJOSInfo-IsServer.md)_ | Checks for a server operating system. |
| _[IsTabletPC](./TPJOSInfo-IsTabletPC.md)_ | Checks for Windows Tablet PC. |
| _[IsWin32s](./TPJOSInfo-IsWin32s.md)_ | Checks for the Windows 32s system. |
| _[IsWin9x](./TPJOSInfo-IsWin9x.md)_ | Checks for the Windows 95 platform. |
| _[IsWindowsServer](./TPJOSInfo-IsWindowsServer.md)_ [v5.0] | Checks if the OS is a server version. (When run in compatibility mode on Windows 2000 and later this method returns the true OS, unlike _[IsServer](./TPJOSInfo-IsServer.md)_). |
| _[IsWinNT](./TPJOSInfo-IsWinNT.md)_ | Checks for the Windows NT platform. |
| _[IsWow64](./TPJOSInfo-IsWow64.md)_ | Checks if the program is running on WOW64. |
| _[MajorVersion](./TPJOSInfo-MajorVersion.md)_ | Gets the operating system major version. |
| _[MinorVersion](./TPJOSInfo-MinorVersion.md)_ | Gets the operating system minor version. |
| _[Platform](./TPJOSInfo-Platform.md)_ | Gets the operating system platform. |
| _[Product](./TPJOSInfo-Product.md)_ | Gets a code representing the operating system product. |
| _[ProductID](./TPJOSInfo-ProductID.md)_ | Gets the Windows product ID. |
| _[ProductName](./TPJOSInfo-ProductName.md)_ | Gets the name of the operating system product. |
| _[RegisteredOrganisation](./TPJOSInfo-RegisteredOrganisation.md)_ [v4.0] | Gets the name of the organisation to which Windows is registered. |
| _[RegisteredOwner](./TPJOSInfo-RegisteredOwner.md)_ [v4.0] | Gets the name of the person owning this copy of Windows. |
| _[RevisionNumber](./TPJOSInfo-RevisionNumber.md)_ [5.6] | Gets the operating system's revision number, if any. |
| _[ServicePack](./TPJOSInfo-ServicePack.md)_ | Gets details of the operating system's service pack. |
| _[ServicePackEx](./TPJOSInfo-ServicePackEx.md)_ [v5.2] | Gets details of the operating system's service pack or any other significant update. |
| _[ServicePackMajor](./TPJOSInfo-ServicePackMajor.md)_ | Gets the operating system's major service pack version number. |
| _[ServicePackMinor](./TPJOSInfo-ServicePackMinor.md)_ | Gets the operating system's minor service pack version number. |

## Properties ##

_TPJOSInfo_ defines no properties.

## Events ##

_TPJOSInfo_ defines no events.