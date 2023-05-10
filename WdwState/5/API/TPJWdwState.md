# TPJWdwState

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Applies to:** ~>5.0

This non-visual component enables the size, position and state of the form on which it is placed to be saved to and read from an ini file.

The _[Save](./TPJWdwState-Save.md)_ method saves the window information to a section of an ini file and the _[Restore](./TPJWdwState-Restore.md)_ method reads information in and sets the owning form window's size, position and state.

The component's _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property governs whether window sizes, positions and states are automatically restored on opening and saved on closing or whether the user must explicitly call the _[Save](./TPJWdwState-Save.md)_ and _[Restore](./TPJWdwState-Restore.md)_ methods.

The _[Options](./TPJCustomWdwState-Options.md)_ property and the _[OnReadWdwState](./TPJCustomWdwState-OnReadWdwState.md)_ event can be used to customise how the stored data is interpreted and whether the window's saved state or size should be used or ignored.

The ini file to be used is specified using the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ [~>5.5] and _[IniFileName](./TPJWdwState-IniFileName.md)_ property and the name of the section of the ini file to be used is given by the _[Section](./TPJWdwState-Section.md)_ property. Alternatively the _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ or _[OnGetIniDataEx](./TPJWdwState-OnGetIniDataEx.md)_ [~>5.5] event can be handled and used to set the required ini file name and section.

It is only possible to have one instance of a _TPJWdwState_ component on any one form. Neither can a _TPJWdwState_ component be dropped onto a form that already contains either a _[TPJRegWdwState](./TPJRegWdwState.md)_ or a _[TPJUserWdwState](./TPJUserWdwState.md)_ component.

_TPJWdwState_ exposes the following methods, properties and events, some of which are inherited unchanged from _[TPJCustomWdwState](./TPJCustomWdwState.md)_.

## Methods

| Method | Description |
|:-------|:------------|
| _[Create](./TPJCustomWdwState-Create.md)_ | Class constructor that permits only one instance of the component to be placed on a form. |
| _[CreateStandAlone](./TPJCustomWdwState-CreateStandAlone.md)_ | Class constructor for use when creating components at run time. |
| _[IniFilePath](./TPJWdwState-IniFilePath.md) [~>5.5]_ | Returns the fully specified name of the ini file used to store window state information. |
| _[ReadWdwState](./TPJWdwState-ReadWdwState.md)_ | Overridden method that reads a window's size, position and state from an ini file. |
| _[Restore](./TPJWdwState-Restore.md)_ | Restores the size, position and state of a window from an ini file. |
| _[Save](./TPJWdwState-Save.md)_ | Saves the size, position and state of the window to an ini file. |
| _[SaveWdwState](./TPJWdwState-SaveWdwState.md)_ | Overridden method that writes a window's size, position and state to an ini file. |

## Properties

| Property | Description |
|:---------|:------------|
| _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ | Determines whether the window's size, position and state is automatically restored on creation and stored on destruction. |
| _[IgnoreState](./TPJCustomWdwState-IgnoreState.md)_ | Determines whether the window's saved state (maximised, normal or minimised) is applied on restoration. This property is deprecated - use the _[Options](./TPJCustomWdwState-Options.md)_ property instead. |
| _[IniFileName](./TPJWdwState-IniFileName.md)_ | Determines the name of the ini file used to record window information. If this file name is relative then its root directory is given by the _[IniRootDir](./TPJWdwState-IniRootDir.md)_ [~>5.5] property. |
| _[IniRootDir](./TPJWdwState-IniRootDir.md) [~>5.5]_ | Identifies the root directory where the ini file will be stored if _[IniFileName](./TPJWdwState-IniFileName.md)_ is a relative path. |
| _[MinimizeDelay](./TPJCustomWdwState-MinimizeDelay.md)_ | Sets the delay between displaying a normalised form on screen and minimising it if required. |
| _[Options](./TPJCustomWdwState-Options.md)_ | Determines how the component interprets the window display data read from storage. |
| _[Section](./TPJWdwState-Section.md)_ | Specifies the name of the section within an ini file to be used to store window information. |

## Events

| Event | Description |
|:------|:------------|
| _[OnAfterWindowRestored](./TPJCustomWdwState-OnAfterWindowRestored.md) [~>5.4]_ | Event triggered after window has been restored and its state set. |
| _[OnAfterWindowSized](./TPJCustomWdwState-OnAfterWindowSized.md) [~>5.4]_ | Event triggered after the window is sized but before it is physically restored. |
| _[OnGetIniData](./TPJWdwState-OnGetIniData.md)_ | Event that allows user to change the name of the ini file and the section within it where window information is stored. |
| _[OnGetIniDataEx](./TPJWdwState-OnGetIniDataEx.md) [~>5.5]_ | Event that allows user to change the name of the root directory of name of the ini file and the section within it where window information is stored. |
| _[OnReadWdwState](./TPJCustomWdwState-OnReadWdwState.md)_ | Event that allows user to change the window data read from storage before the window is displayed. _TPJWdwState_ publishes this inherited protected event. |
