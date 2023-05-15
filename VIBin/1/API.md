# [Binary Version Information Manipulation Units](../index.md) Programmers' Guide

> 📝 ***DRAFT: Page subject to change. Do not bookmark links - they may change.***

**Applies to:** ~>1.0

## Introduction

This section of the _Binary Version Information Manipulation Units_ documentation describes the API exposed by the units to programmers.

## Contents

🔐 Units and classes marked with the lock icon should be treated as private. Anything considered "private" may change without notice and will not cause a major version bump should this happen. "Private" items are not documented any further here.

### Units

| Unit | Description |
|------|-------------|
| _DelphiDabbler.Lib.VIBin.Resource_ | Contains all the primary class you need to interact with to manipulate binary version information. Depends on _DelphiDabbler.Lib.VIBin.VarRec_. |
| _DelphiDabbler.Lib.VIBin.VarRec_ | 🔐 Contains support classes required by _DelphiDabbler.Lib.VIBin.Resource_. _These classes should not be accessed directly._ |

### Classes

| Class | Description |
|-------|-------------|
| [_TVIBinResource_](./API/TVIBinResource.md) | Class that provides read and write access to binary version information. |
| _TVIBinVarRec_ | 🔐 This class encapsulates a general version information record and exposes properties for the key record elements. |
| _TVIBinVarRecA_ | 🔐 Sub class of _TVIBinVarRec_ that implements a generalised ANSI version information record. |
| _TVIBinVarRecW_ | 🔐 Sub class of _TVIBinVarRec_ that implements a generalised Unicode version information record. |
| _EVIBinResource_ | Class of exception raised by _TVIBinResource_ and descendants. |
| _EVIBinVarRec_  | Class of exception raised by _TVIBinVarRec_ and descedants. |

### Types

| Type | Description |
|------|-------------|
| [_TVIBinResourceType_](./API/TVIBinResourceType.md) | Enumeration that specifies whether a version information resource is 16 or 32 bit. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
