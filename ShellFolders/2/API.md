# [Shell Folders Unit](../index.md) Programmer's Guide

**Applies to:** ~>2.0

## Introduction

This section of the _Shell Folders Unit_ documentation describes the API exposed by the components to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJShellFolders_ | Provides classes, routines and two components for working with Windows shell folders. |
| _PJShellFoldersDsgn_ | Registers the components and provides a property editor for _[TPJBrowseDialog](./API/TPJBrowseDialog.md)_ and _[TPJSpecialFolderInfo](./API/TPJSpecialFolderInfo.md)_.  |

### Components & Other Classes

| Component | Description |
|:----------|:------------|
| _[TPJSpecialFolderInfo](./API/TPJSpecialFolderInfo.md)_ | Component that provides information about various special shell folders. |
| _[TPJBrowseDialog](./API/TPJBrowseDialog.md)_ | Component that configures and displays the Windows Browse For Folder dialogue box. |
| _[TPJSpecialFolderEnum](./API/TPJSpecialFolderEnum.md)_ | Class that enumerates the shell's special folder identifiers. This class implements the _[IPJSpecialFolderEnum](./API/IPJSpecialFolderEnum.md)_ interface. |

### Other

| Item | Description |
|:-----|:------------|
| _[IPJSpecialFolderEnum](./API/IPJSpecialFolderEnum.md)_ | Interface implemented by _[TPJSpecialFolderEnum](./API/TPJSpecialFolderEnum.md)_. |
| [Routines] | Various routines for working with shell folders and PIDLs |
| Constant Definitions | Various _CSIDL_xxx_ constants are defined to ensure the same constants are available to all versions of Delphi. |

### Design Time Editor

| Editor class | Description |
|:-------------|:------------|
| _TPJFolderIDPE_ | Allows predefined special folder IDs to be selected in the object inspector by name. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
* [Example](./Example.md)
