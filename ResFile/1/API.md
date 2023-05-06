# [Resource File Unit](../index.md) Programmers' Guide

**Applies to:** ~>1.0

## Introduction

This section of the _Resource File Unit_ documentation describes the API exposed by the unit to programmers.

The _Resource File Unit_ is supplied in a single unit: _PJSysInfo_.

## Contents

This unit contains classes that encapsulate Windows 32 bit binary resource files and the resources contained in them. The main functionality is provided by two classes. In addition some helper functions, an exception class and some constants are also provided.

The classes encapsulate the low-level structure of a resource file and its resources. It deals only with raw resource data. The actual format of the raw data depends on the resource type.

⭐ **This unit does not provide any support for specific resource types or their data formats.**

_PJSysInfo_ provides the following classes, routines and constants.

| Section | Description |
|:--------|:------------|
| _[TPJResourceFile](./API/TPJResourceFile.md)_ | Class that encapsulates the contents of a whole resource file and provides methods and properties to search, enumerate and manipulate it. |
| _[TPJResourceEntry](./API/TPJResourceEntry.md)_ | Class that encapsulates a single resource within a resource file and provides properties and methods to access its header record and its raw data and to compare it to other resources. |
| _[TPJResourceFileEnumerator](./API/TPJResourceFileEnumerator.md)_**<sup>v1.1</sup>** | Class that implements an enumerator for _[TPJResourceFile](./API/TPJResourceFile.md)_ that enumerates all its resource entries. |
| _[EPJResourceFile](./API/EPJResourceFile.md)_ | Class of exception raised by _[TPJResourceFile](./API/TPJResourceFile.md)_ and _[TPJResourceEntry](./API/TPJResourceEntry.md)_. |
| [Helper Routines](./API/Routines.md) | Routines to assist in working with resource identifiers. |
| [Constants](./API/Consts.md) | Various useful constants. |

## Links

* [Overview](./Overview.md)
* [Examples](./Examples.md)
