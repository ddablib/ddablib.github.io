# CreateStandAlone method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJCustomWdwState](./TPJCustomWdwState.md)_

**Applies to:** ~>5.0

```pascal
constructor CreateStandAlone(AOwner: TForm);
```

## Description

This constructor is used when creating instances of components dynamically at run time. It allows only one instance of a component derived from _TPJCustomWdwState_ to be created for any form. The _AOwner_ parameter must specify a valid owner form that is the window whose state is to be saved and restored. _AOwner_ must not be nil.

**Note:** The [standard constructor](./TPJCustomWdwState-Create.md) will not work properly if called dynamically since it depends on the _Loaded_ method being called to complete instantiation of the component. _Loaded_ is only called for components placed on the form at design time. _CreateStandAlone_ performs all the required instantiation.
