# TPJBiosInfo

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Applies to:** ~>5.32

This is a class that provides information about the host computer's BIOS.

Unlike other classes in _PJSysInfo_, this class is not static and must be instantiated before use.

## Limitations

This class only works on computers with BIOSs that support the [SMBIOS reference specification](https://www.dmtf.org/sites/default/files/standards/documents/DSP0134_3.7.0.pdf) v2.0 or later.

Some methods require support for later versions of the reference specification.

## Constructor & Destructor

| Method | Description |
|:-------|:------------|
| _Create_ | Constructs a _TPJBiosInfo_ instance and reads BIOS data into memory. |
| _Destroy_ | Destroys the _TPJBiosInfo_ instance and releases the memory storing BIOS data. |

## Instance Methods

| Method | Description |
|:-------|:------------|
| _[BiosECFirmwareVersion](./TPJBiosInfo-BiosECFirmwareVersion.md)_ | Returns the release version number of the BIOS' Embedded Controller Firmware. |
| _[BiosReleaseDate](./TPJBiosInfo-BiosReleaseDate.md)_ | Returns the BIOS release date. |
| _[BiosReleaseDateInvariant](./TPJBiosInfo-BiosReleaseDateInvariant.md)_ | Returns a string representation of the BIOS release date in the format defined by the SMBIOS specification. 
| _[BiosVendor](./TPJBiosInfo-BiosVendor.md)_ | Returns the name of the BIOS vendor. |
| _[BiosVersion](./TPJBiosInfo-BiosVersion.md)_ |  Returns the BIOS release version number. |
| _[BiosVersionStr](./TPJBiosInfo-BiosVersionStr.md)_ | Returns a string representation of the BIOS version. |
| _[IsBiosSupported](./TPJBiosInfo-IsBiosSupported.md)_ | Checks whether the host computer's BIOS is supported or not. |
| _[SMBiosSpecVersion](./TPJBiosInfo-SMBiosSpecVersion.md)_ | Returns the version of the SMBIOS specification supported by the BIOS, regardless of the locale. |
| _[SystemFamily](./TPJBiosInfo-SystemFamily.md)_ | Returns the computer's product family. |
| _[SystemManufacturer](./TPJBiosInfo-SystemManufacturer.md)_ | Returns the name of the computer's manufacturer. |
| _[SystemOEMVersion](./TPJBiosInfo-SystemOEMVersion.md)_ | Returns an OEM specific version number. |
| _[SystemProductName](./TPJBiosInfo-SystemProductName.md)_ | Returns the computer's product name. |
| _[SystemSerialNumber](./TPJBiosInfo-SystemSerialNumber.md)_ | Returns the computer's serial number. |
| _[SystemSKUNumber](./TPJBiosInfo-SystemSKUNumber.md)_ | Returns the computer's SKU number, aka product ID. |
| _[SystemUuid](./TPJBiosInfo-SystemUuid.md)_ | Returns the BIOS' UUID encoded in the format required by the SMBIOS specification. |
| _[SystemUuidRaw](./TPJBiosInfo-SystemUuidRaw.md)_ | Returns the BIOS' UUID as an array of bytes. |
| _[SystemUuidStr](./TPJBiosInfo-SystemUuidStr.md)_ | Returns the BIOS' UUID as a string formatted according to the one of the two formats defined by the SMBIOS specification. |
| _[SystemWakeupType](./TPJBiosInfo-SystemWakeupType.md)_ | Identifies the event that caused the computer to power up. |

> **Note:** Method names beginning with "Bios" get their values from the BIOS' "BIOS Information Structure (type 0)" while methods with names beginning with "System" get their values from the "System Information Structure (type 1)".
