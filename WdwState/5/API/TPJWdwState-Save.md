# Save method

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJWdwState](./TPJWdwState.md)_

**Applies to:** ~>5.0

```pascal
procedure Save;
```

## Description

This method saves the state, size and position of the owning form's window in an ini file.

If the ini file does not exist it is created. If it is not possible to create the file then the information is not saved.

For MDI child forms the window's top and left coordinates are relative to the MDI main form's client area. For other, top level, windows the coordinates are relative to the screen.

If the _[AutoSaveRestore](TPJCustomWdwState-AutoSaveRestore.md)_ property is true then _Save_ is called automatically when the window is destroyed.

## Remarks

The process used to determine what the ini file name to use changed at v5.5:

* <5.5

    The ini file name is determined by the _[IniFileName](TPJWdwState-IniFileName.md)_ property and the section within it used to store window state data is stored is determined by the _[Section](TPJWdwState-Section.md)_ property.

    Any _[OnGetIniData](TPJWdwState-OnGetIniData.md)_ event handler can override any of these property values.

    If any of the directories in the path to the ini file name are not present then the save will fail and may raise an exception.

* ~>5.5

    The ini file name is determined by both the _[IniRootDir](TPJWdwState-IniRootDir.md)_ and _[IniFileName](TPJWdwState-IniFileName.md)_ properties and the section within the ini file used to store window state data is determined by the _[Section](TPJWdwState-Section.md)_ property.

    Any _[OnGetIniDataEx](TPJWdwState-OnGetIniDataEx.md)_ or _[OnGetIniData](TPJWdwState-OnGetIniData.md)_ event handler can override any of these property values.

    If any of the directories in the path to the ini file name are not present they will be created.
