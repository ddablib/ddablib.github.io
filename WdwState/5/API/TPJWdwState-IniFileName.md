# IniFileName property

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Class:** _[TPJWdwState](./TPJWdwState.md)_

**Applies to:** ~>5.0

```pascal
property IniFileName: string;
```

## Description

This property specifies the name of the ini file that will be used to record the window's size, position and state. The file is accessed by both the _[Restore](./TPJWdwState-Restore.md)_ and _[Save](./TPJWdwState-Save.md)_ methods.

The default value of the property is the empty string.

The behaviour of the property was changed at v5.5:

* <5.5

  The property can be interpreted in the following ways, depending on its value:

  * _Empty string_:
    
    The ini file name is the same as the application, with the extension changed to `.ini`. The file is placed in the same directory as th application. For example, if the application is `C:\Foo\Bar.exe` then the full ini file name will be `C:\Foo\Bar.ini`.

  * _Relative path_: (e.g. `Foo.ini` or `Foo\Bar.ini`)
    
    The ini file name is as specified in this property and it is stored in the Windows installation directory. For example an _IniFileName_ property value of `Foo.ini` might result in an ini file name of `C:\Windows\Foo.ini` while a property value of `Foo\Bar.ini` would save window state data in `C:\Windows\Foo\Bar.ini`.

  * _Absolute path_:
    
    The ini file is stored in the specified path.

  If the the ini file's directory does not exist an exception will be generated when the component attempts to write to the ini file.

* ~>5.5

  The property can be interpreted in the following ways, depending on its value:

  * _Empty string_:
    
    The ini file name is the same as the application, with the extension changed to `.ini`. The file's directory depends on the value of the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ property.

  * _Relative path:_ (e.g. `Foo.ini` or `Foo\Bar.ini`)
    
    The ini file name is as specified in the property. The file's directory depends on the value of the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ property.

  * _Absolute path_:
    
    The ini file is stored in the specified path. The value of the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ property has no effect in this case.

  If the ini file's directory does not exist it will be created if possible when the component first attempts to write to the file. If the directory cannot be created an exception will be raised.

  **Important note:** When updating from earlier versions to ~>5.5, you should note that _[TPJWdwState](./TPJWdwState.md)_ uses a different file name by default when _IniFileName_ is either a relative path or the empty string. To revert to the original behaviour you need to change the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ property value as follows:

  * When _IniFileName_ is the empty string, set _[IniRootDir](./TPJWdwState-IniRootDir.md)_ to `rdExeDir`.
  * When _IniFileName_ is a relative path, set _[IniRootDir](./TPJWdwState-IniRootDir.md)_ to `rdWindowsDir`.

## Remarks

The value of _IniFileName_ can be overridden at run time if you handle either the _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ or _[OnGetIniDataEx](./TPJWdwState-OnGetIniDataEx.md)_ [~>5.5] properties. This can be useful when the _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property is `True` and you want to specify the ini file name at run time. In this case setting _IniFileName_ at run time will not work because the form will be restored before you have an opportunity to change the property value. However the _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ and _[OnGetIniDataEx](./TPJWdwState-OnGetIniDataEx.md)_ events are triggered before the form restores, enabling the file name to be specified.

You are strongly recommended **not** to store the ini file in the Windows directory. On Windows Vista and later an attempt to write to the Windows directory may be redirected to the virtual store.

You should not use the directory containing the executable program if it is stored in the _Program Files_ directory (or similar), since you may not have write access to it.

## See Also

* _[Section](./TPJWdwState-Section.md)_ property.
* _[IniRootDir](./TPJWdwState-IniRootDir.md)_ [~>5.5] property.
