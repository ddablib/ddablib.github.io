# TPJRegRootKey type

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Applies to:** ~>5.6

```pascal
type
  TPJRegRootKey = (
    hkClassesRoot, hkCurrentUser, hkLocalMachine,
    hkUsers, hkPerformanceData, hkCurrentConfig, hkDynData
  );
```

## Description

This enumerated type has an entry for each supported type of registry root key.

Each value represents a value defined by one of the _HKEY\_xxx_ constants as follows:

| TPJRegRootKey value | HKEY constant |
|:--------------------|:--------------|
| `hkClassesRoot` | `HKEY_CLASSES_ROOT` |
| `hkCurrentUser` | `HKEY_CURRENT_USER` |
| `hkLocalMachine` | `HKEY_LOCAL_MACHINE` |
| `hkUsers` | `HKEY_USERS` |
| `hkPerformanceData` | `HKEY_PERFORMANCE_DATA` |
| `hkCurrentConfig` | `HKEY_CURRENT_CONFIG` |
| `hkDynData` | `HKEY_DYN_DATA` |

_TPJRegRootKey_ is used as the type for the _[TPJRegWdwState](./TPJRegWdwState.md).[RootKeyEx](./TPJRegWdwState-RootKeyEx.md)_ [~>5.6] property and the _RootKeyEx_ parameter of the _[TPJRegWdwState](./TPJRegWdwState.md).[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md)_ [~>5.6] event.
