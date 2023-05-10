# Restore method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJWdwState](./TPJWdwState.md)_

**Applies to:** ~>5.0

```pascal
procedure Restore;
```

## Description

This method restores the size and position of the owning form's window according to value saved in a specified section of an ini file. If the ini file or section do not exist then this method has no effect.

Various values of the _[Options](./TPJCustomWdwState-Options.md)_ property may cause either the saved size or state to be ignored or for the window to be repositioned (and possibly resized) to fit within the desktop's work area.

If the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property is true _Restore_ is called automatically when the window is created.

## Remarks

The process used to determine what the ini file name to use changed at v5.5:

* <5.5

    The ini file name is determined by the _[IniFileName](./TPJWdwState-IniFileName.md)_ property and the section within it that contains the window state data is determined by the _[Section](./TPJWdwState-Section.md)_ property.

    Any _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ event handler can override any of these property values.

* ~>5.5

    The ini file name is determined by both the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ and _[IniFileName](./TPJWdwState-IniFileName.md)_ properties and the section within it that contains the window state data is determined by the _[Section](./TPJWdwState-Section.md)_ property.

    Any _[OnGetIniDataEx](./TPJWdwState-OnGetIniDataEx.md)_ or _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ event handler can override any of these property values.
