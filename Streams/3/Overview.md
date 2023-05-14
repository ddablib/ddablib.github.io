# [Stream Extension Classes](../index.md) Overview

**Applies to:** ~>3.0

This project provides a library of classes that can be used to extend the functionality of Delphi's _TStream_ classes.

The classes provided are:

* A _TStream_ derived class which can wrap another _TStream_. This is useful as a base class for filters to wrap round existing stream classes.

* A set of classes that wrap existing streams and provide an _IStream_ interface to them -- like Delphi's previously undocumented _TStreamAdapter_ class. Also included are classes that provides a _IStream_ interface to any file or any handle stream.

## Compatibility

This unit can be compiled with Delphi 4 and later. It is compatible with Windows 32 bit an 64 bit targers

The code depends on the Windows API and so is only suitable for compilation for Windows.

The unit is compatible with both VCL and FMX applications.

## Unit Tests

[Unit tests](https://github.com/ddablib/streams/tree/main/Tests) that exercise all the classes are available in the GitHub repository.

## Demos

Three [demo projects](https://github.com/ddablib/streams/tree/main/Demos) are provided in the GitHub repository and are included in releases.

## Links

* [Programmers' Guide](./API.md)
