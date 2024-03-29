# TPJExtFileFilterStyle enumeration

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Applies to:** ~>5.0

```pascal
type
  TPJExtFileFilterStyle = (
    fsFilterFilesOnly, fsFilterFoldersOnly, fsAll
  );
```

## Description

This enumeration represents the kind of filtering performed by the _[TPJExtFileFilter](./TPJExtFileFilter.md)_ component according to its _[Style](./TPJExtFileFilter-Style.md)_ property. Possible values are:

| Style | Description |
|:------|:------------|
| `fsFilterFilesOnly` | Files are filtered by their extension while all folders are passed through the filter regardless of extension. |
| `fsFilterFoldersOnly` | Folders are filtered by their extension while all files are passed through the filter. |
| `fsAll` | The filter is applied to both files and folders. |
