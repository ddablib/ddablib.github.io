# Options property

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJCtrlDropFiles](./TPJCtrlDropFiles.md)_

**Applies to:** ~>5.0

```pascal
property Options: TPJDropFilesOptions;
```

## Description

This property determines how dropped files are interpreted. The resulting files are made available through the _[Files](./TPJCtrlDropFiles-Files.md)_ property. The property can take any one or more of the values from the _[TPJDropFilesOptions](./TPJDropFilesOptions.md)_ set.

It makes no sense to omit both the `dfoIncFiles` and `dfoIncFolders` options since no files will pass the filter.
