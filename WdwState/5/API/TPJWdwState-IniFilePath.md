# IniFilePath method #

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJWdwState](./TPJWdwState.md)_

**Introduced:** v5.5

```pascal
function IniFilePath: string
```

## Description ##

This method returns the fully specified file name of the ini file used to store window state information.

The return value depends on the the values of the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ and _[IniFileName](./TPJWdwState-IniFileName.md)_ properties as modified by the values returned from any _[OnGetIniDataEx](./TPJWdwState-OnGetIniDataEx.md)_ or _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ event handlers.