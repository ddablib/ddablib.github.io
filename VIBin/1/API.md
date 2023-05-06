# [Binary Version Information Manipulation Units](../index.md) Programmers' Guide

> 📝 ***DRAFT: Page subject to change. Do not bookmark links - they may change.***

**Applies to:** ~>1.0

## Introduction

This section of the _Binary Version Information Manipulation Units_ documentation describes the API exposed by the units to programmers.

## Contents

### Units

| Unit | Description |
|------|-------------|
| _UVerInfoData_ | Contains all the primary classes you need to interact with to manipulate binary version information. |
| _UVerInfoRec_ | Contains support classes required by _UVerInfoData_. _The classes should not be accessed directly._ |
| _UVerInfoBinIO_ | Contains a support class required by _UVerInfoRec_. _The class should not be accessed directly._ |

### Classes

| Class | Description |
|-------|-------------|
| [_TVerInfoData_](./API/TVerInfoData.md) | Class that provides read and write access to binary version information. |
| _TVerInfoRec_ | 🔐 This class encapsulates a general version information record and exposes properties for the key record elements. |
| _TVerInfoRecA_ | 🔐 Sub class of _TVerInfoRec_ that implements a generalised ANSI version information record. |
| _TVerInfoRecW_ | 🔐 Sub class of _TVerInfoRec_ that implements a generalised Unicode version information record. |
| _TVerInfoBinIO_ | 🔐 IO object used to input from and output to a wrapped stream. |
| _EVerInfoData_ | Class of exception raised by _TVerInfoData_ and descendants. |
| _EVerInfoRec_  | Class of exception raised by _TVerInfoRec_ and descedants. |

🔐 All interaction with these units should be done via the [_TVerInfoData_](./API/TVerInfoData.md) class. Classes marked with the lock item should be treated as private. The interface of these "private" classes may change without notice and will not cause a major version bump when this happens. The classes are not documented and further here.

### Types

| Type | Description |
|------|-------------|
| [_TVerResType_](./API/TVerResType.md) | Enumeration that specifies whether a version information resource is 16 or 32 bit. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
