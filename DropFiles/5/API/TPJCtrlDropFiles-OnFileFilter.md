# OnFileFilter event

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJCtrlDropFiles](./TPJCtrlDropFiles.md)_

**Applies to:** ~>5.0

```pascal
property OnFileFilter: TPJDroppedFileFilter;
```

## Description

This event is triggered for each dropped file and folder handled on behalf of the managed control and has type _[TPJDroppedFileFilter](./TPJDroppedFileFilter.md)_. The file or folder can be omitted from the list of dropped files by altering the _Accept_ parameter of the event handler from True to False.

Folders that are filtered out by this event are not added to the _[Files](./TPJCtrlDropFiles-Files.md)_ property but are still scanned when the `dfoRecurseFolders` is included in _[Options](./TPJCtrlDropFiles-Options.md)_.

Note that the _[Filter](./TPJCtrlDropFiles-Filter.md)_ property takes precedence and files filtered out by the associated filter component are not processed by this event.
