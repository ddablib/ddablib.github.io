# OnSaveData event

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJUserWdwState](./TPJUserWdwState.md)_

**Applies to:** ~>5.0

```pascal
type
  TPJWdwStateSaveData = procedure(
    Sender: TObject; const Data: TPJWdwStateData
  ) of object;

property OnSaveData: TPJWdwStateSaveData;
```

## Description

_OnSaveData_ is triggered when the component is saving the window's size, position and state and needs to store the information in persistent storage.

The user must handle this event by writing the data passed in the fields of the _Data_ parameter to persistent storage. The _Data_ parameter is a record of type _[TPJWdwStateData](./TPJWdwStateData.md)_.

## See Also

* _[OnReadData](./TPJUserWdwState-OnReadData.md)_ event.
