# Files property

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJDropFiles](./TPJDropFiles.md)_

**Applies to:** ~>5.0

```pascal
property Files[Idx: Integer]: string;
```

## Description

This read-only array property contains an indexed list of the fully specified names of the files dropped on the control or its child controls. The array is zero based. The _[Count](./TPJDropFiles-Count.md)_ property gives the number of files dropped. Attempts to access array elements outside the index range result in an exception being raised.

The contents of _Files_ may not exactly reflect all the names of the dropped files and folders. The listed files can be varied by changing the of the _[Options](./TPJDropFiles-Options.md)_ property. Furthermore, files filtered out via the _[Filter](./TPJDropFiles-Filter.md)_ property or the _[OnFileFilter](./TPJDropFiles-OnFileFilter.md)_ event handler are not included in _Files_. To ensure the property contains exactly the files and folders that were dropped set the _Options_ property to `dfoIncFiles, dfoIncFolders` (the default) and assign neither a _Filter_ component nor a _OnFileFilter_ event handler.

To test whether the file at index _Idx_ is a file or a folder use _[IsFolder](./TPJDropFiles-IsFolder.md)_.
