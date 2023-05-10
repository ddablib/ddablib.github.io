# [Version Information Component](../index.md) Overview

**Applies to:** ~>3.0

This project contains a component, [_TPJVersionInfo_](./API/TPJVersionInfo.md), which is a non-visual component that reads any version information contained in a 32 bit or 64 bit Windows executable file.

The component reads information from a designated file's [VERSIONINFO resource](https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource). 

Run-time properties enable access to to version information. Properties enable:

* Access to fixed file information, either by field or the whole record.
* Access to the number of translations stored in the version information.
* Selection of the translation for which information is to be returned by other properties.
* Access to the language and code page of the current translation, by code and by name.
* Access to the string file information for the current translation. Named properties access the Microsoft-defined string information, while an array property gives access to any string item by name.

Version numbers are encapsulated in [_TPJVersionNumber_](./API/TPJVersionNumber.md) records. On Delphi 2006 or later this is an advanced record that can be directly assigned to a string and can be compared using the normal equality operators. Users of earlier Delphis can use helper functions to provide some of the functionality of the advanced form of the record.

The component makes calls to the Windows API when reading version information. Therefore the version information being read must follow the Microsoft guidelines. Be warned that not all software complies.

## Compatibility

The component can be compiled with any Delphi compiler from Delphi 2 through to 11.3. It is compatible with 32 bit and 64 bit Windows targets.

This is a VCL component and so is not compatible with the FireMonkey framework.

The component not suitable for compilation on platoforms other than Windows.

## Links

* [Programmer's Guide](./API.md)
* [Examples](./Examples.md)
