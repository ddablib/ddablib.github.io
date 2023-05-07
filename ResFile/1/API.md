# [Resource File Unit](../index.md) Programmers' Guide

**Applies to:** ~>1.0

## Introduction

This section of the _Resource File Unit_ documentation describes the API exposed by the unit to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJResFile_ | The only unit in this project. Contains all the functionality |

### Classes

| Class | Description |
|:------|:------------|
| _[TPJResourceFile](./API/TPJResourceFile.md)_ | Class that encapsulates the contents of a whole resource file and provides methods and properties to search, enumerate and manipulate it. |
| _[TPJResourceEntry](./API/TPJResourceEntry.md)_ | Class that encapsulates a single resource within a resource file and provides properties and methods to access its header record and its raw data and to compare it to other resources. |
| _[TPJResourceFileEnumerator](./API/TPJResourceFileEnumerator.md)_ _[~>1.1]_ | Class that implements an enumerator for _[TPJResourceFile](./API/TPJResourceFile.md)_ that enumerates all its resource entries. |
| _[EPJResourceFile](./API/EPJResourceFile.md)_ | Class of exception raised by _[TPJResourceFile](./API/TPJResourceFile.md)_ and _[TPJResourceEntry](./API/TPJResourceEntry.md)_. |

### Other 

| Item | Description |
|:-----|:------------|
| [Helper Routines](./API/Routines.md) | Routines to assist in working with resource identifiers. |
| [Constants](./API/Consts.md) | Various useful constants. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
* [Examples](./Examples.md)
