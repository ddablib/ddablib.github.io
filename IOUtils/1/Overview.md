# [I/O Utility Classes](../index.md) Overview

**Applies to:** ~>1.0

> This page provides an overview of the features of the I/O Utility Classes. If you are looking for information on programming with the classes please see the [Programmers' Guide](./API.md).

These classes are designed to assist in various I/O related tasks. Classes are provided to:

* Simplify the opening of files in various different modes with specified security attributes and to provide access to the file handle.
* Simplify working with un-named pipes.
* Handle the formatting of data read from pipes, for example reading Unicode strings.

> Versions of these classes were originally included with the [Console Application Runner Classes](../../ConsoleApp/index.md) project v2, but were moved to this project as of 21 March 2013 and removed from Console Application Runner Classes v3.

## Compatibility

The classes can be compiled with any Delphi compiler from Delphi 7 through to 11.3. They are compatible with 32 bit and 64 bit Windows targets.

Non-Windows platforms are not supported due to reliance on the Windows API.

Since the code only relies on the Delphi RTL, the classes are suitable for use with both the VCL and FMX frameworks.

## Links

* [Programmers' Guide](./API.md)
