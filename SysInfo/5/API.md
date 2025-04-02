# [System Information Unit](../index.md) Programmer's Guide

**Applies to:** ~>5.0

## Introduction

This section of the _System Information Unit_ documentation describes the API exposed by the unit to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJSysInfo_ | The only unit in this project. Contains all the functionality. |

### Classes

| Class | Description |
|:------|:------------|
| [_TPJComputerInfo_](./API/TPJComputerInfo.md) | Provides information about the computer system. |
| [_TPJSystemFolders_](./API/TPJSystemFolders.md) | Provides the paths of various standard system folders. |
| [_TPJOSInfo_](./API/TPJOSInfo.md) | Provides information about the operating system. |
| _[TPJBiosInfo](./API/TPJBiosInfo.md) [~>5.32]_ | Provides information about the computer's BIOS. |

### Other

| Item | Description |
|:-----|:------------|
| [Global Variables](./API/Globals.md) | To compliment and extend the operating system information provided by global variables defined in the Delphi _SysUtils_ unit. |
| _[TPJBiosWakeupType](./API/TPJBiosWakeupType.md) [~>5.32]_ | Enumerations of the possible computer wake up types reported by the BIOS. |
| _[TPJWin10PlusVersion](./API/TPJWin10PlusVersion.md) [~>5.30]_ | Enumeration of the various versions of Windows 10 and 11. |
| Windows Types & Constants | Some types and constants not defined in all supported versions of Delphi are defined in _PJSysInfo_. Help of these definitions can be found in the Windows SDK help. | 

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
