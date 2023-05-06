# [Resource File Unit](../index.md) Overview

> This page provides an overview of the features of the Resource File Unit. If you are looking for information on programming with the component please see the [Programmers' Guide](./API.md).

This unit contains classes that encapsulate Windows 32 bit binary resource files and the resources contained in them. The main functionality is provided by two classes:

* _TPJResourceFile_ – encapsulates the contents of a whole resource file and provides methods and properties for reading, finding, editing, adding and deleting resources. Resource files can be read from and written to files or streams.

* _TPJResourceEntry_ – encapsulates a single resource within the file and provides properties to access its header record and its raw data. The class also has methods to check the identity of the resource. The resource's raw data is accessible both as an array of bytes and via a TStream interface.

This class has no knowledge of resource data formats and sees the data simply as a raw sequence of bytes. It is for the user of the class to interpret the data correctly.

In addition to the two main classes, some helper functions, constants and an exception class are also provided.

## Compatibility

The unit has been tested on Delphi 7, 2006 to 2010 and XE to XE4. It is believed to work with compilers back to Delphi 4, but this has not been tested in the current release.

The unit is compatible with the Delphi 32 bit and 64 bit Windows compilers. Because resource files are Windows specific the unit is not compatible with non-Windows platforms.

The unit is not dependent on the VCL or on FireMonkey, so can be used with or without either library.

## Links

* [Programmers' Guide](./API.md) -- Classes, methods etc.
