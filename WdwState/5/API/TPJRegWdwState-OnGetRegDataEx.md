# OnGetRegDataEx event

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJRegWdwState](./TPJRegWdwState.md)_

**Applies to:** ~>5.6

```pascal
type
  TPJWdwStateGetRegDataEx = procedure(
    var RootKeyEx: TPJRegRootKey; var SubKey: string
  ) of object;

property OnGetRegDataEx: TPJWdwStateGetRegDataEx;
```

## Description

This event is triggered just before the registry is read when restoring and saving a window. The current values of the _[RootKeyEx](./TPJRegWdwState-RootKeyEx.md)_ [~>5.6] and _[SubKey](./TPJRegWdwState-SubKey.md)_ properties are passed as var parameters of the same name to the event handler, allowing the user to change the values, and hence the location within the registry where the window data is recorded.

The _RootKeyEx_ parameter can be set to any of the values from the _[TPJRegRootKey](./TPJRegRootKey.md)_ [~>5.6] enumeration.

The purpose of the event is to enable the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property to be used without setting the _[RootKeyEx](./TPJRegWdwState-RootKeyEx.md)_ [~>5.6] and _[SubKey](./TPJRegWdwState-SubKey.md)_ properties at design time  - i.e. handling the event allows either or both of the default _[RootKeyEx](./TPJRegWdwState-RootKeyEx.md)_ [~>5.6] and _[SubKey](./TPJRegWdwState-SubKey.md)_ values to be overridden.

### Alternative Event

The _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ event provides an alternative way of to change the registry root- and sub-keys. It is similar to _OnGetRegDataEx_ except that the root key is specified as a valid _HKEY_ value.

**Note:** You are recommended to use _OnGetRegDataEx_ in preference to _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_. If you choose to handle _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ do not also handle _OnGetRegDataEx_ because doing so prevents _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ from being fired.
