# Temp class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Applies to:** ~>5.0

```pascal
class function Temp: string;
```

## Description

Returns the fully qualified path name of the temporary files folder. This is the folder where programs are expected to create their temporary files.

On some Windows versions the folder may be different for each user.
