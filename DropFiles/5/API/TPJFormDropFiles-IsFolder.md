# IsFolder property

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJFormDropFiles](./TPJFormDropFiles.md)_

**Applies to:** ~>5.0

```pascal
property IsFolder[Idx: Integer]: Boolean;
```

## Description

This read-only array property informs whether the file at the same index in the _[Files](./TPJFormDropFiles-Files.md)_ property is a folder (true) or a file (false). The array is zero based and is indexed from 0.._[Count](./TPJFormDropFiles-Count.md)_-1. Attempts to access array elements outside this range result in an exception being raised.
