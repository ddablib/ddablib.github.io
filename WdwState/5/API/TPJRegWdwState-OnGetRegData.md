# OnGetRegData event

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJRegWdwState](./TPJRegWdwState.md)_

**Applies to:** ~>5.0

```pascal
type
  TPJWdwStateGetRegData = procedure(
    var RootKey: HKEY; var SubKey: string
  ) of object;

property OnGetRegData: TPJWdwStateGetRegData;
```

## Description

This event is triggered just before the registry is read when restoring and saving a window. The current values of the _[RootKey](./TPJRegWdwState-RootKey.md)_ and _[SubKey](./TPJRegWdwState-SubKey.md)_ properties are passed as var parameters of the same name to the event handler, allowing the user to change the values, and hence the location within the registry where the window data is recorded.

Any value assigned to the _RootKey_ parameter must be a valid _HKEY_ or an exception will be raised. See the _[RootKey](./TPJRegWdwState-RootKey.md)_ documentation for a list of valid values.

The purpose of the event is to enable the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property to be used without setting the _[RootKey](./TPJRegWdwState-RootKey.md)_ and _[SubKey](./TPJRegWdwState-SubKey.md)_ properties at design time  - i.e. handling the event allows either or both of the default _[RootKey](./TPJRegWdwState-RootKey.md)_  and _[SubKey](./TPJRegWdwState-SubKey.md)_ values to be overridden.

### Alternative Event

The _[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md)_** [~>5.6] event provides an alternative way of to change the registry root- and sub-keys. It is similar to _OnGetRegData_ except that the root key is specified as one of the value from the _[TPJRegRootKey](./TPJRegRootKey.md)_ [~>5.6] enumeration.

**Note:** You should choose which of _OnGetRegData_ and _[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md)_ [~>5.6] to handle, but should not handle both events. If you do then _[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md)_ [~>5.6] will be triggered and _OnGetRegData_ will be ignored.
