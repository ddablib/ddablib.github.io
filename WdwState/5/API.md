# [Window State Components](../index.md) Programmer's Guide

**Applies to:** ~>5.0

## Introduction

This section of the _Window State Components_ documentation describes the API exposed by the components to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJWdwState_ | This is the only unit. It contains all the components. |

| Class | Description |
|:------|:------------|
| _[TPJCustomWdwState](./API/TPJCustomWdwState.md)_ | Abstract base class for the three components. Exposes some common functionality. |
| _[TPJWdwState](./API/TPJWdwState.md)_ | Saves and restores window position and state to and from an ini file. |
| _[TPJRegWdwState](./API/TPJRegWdwState.md)_ | Saves and restores window position and state to and from the registry. |
| _[TPJUserWdwState](./API/TPJUserWdwState.md)_ | Saves and restores window position and state to and from user-provided persistent storage. |

### Other

| Item | Description |
|:-----|:------------|
| [_TPJWdwStateData_](./API/TPJWdwStateData) | Record used to store window state information. |
| [_TPJRegRootKey_](./API/TPJRegRootKey) | Enumeration of values that represent the registry root keys supported by _TPJRegWdwState_. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
