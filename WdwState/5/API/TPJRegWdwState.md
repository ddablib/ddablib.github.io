# TPJRegWdwState

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Applies to:** ~>5.0

This non-visual component enables the size, position and state of the form on which it is placed to be saved to and read from the registry.

**NOTE:** It is **strongly** recommended that this component is not used in 32 bit applications compiled with Delphi 5 and earlier that are to be run on 64 bit Windows operating systems. This is because the _TRegistry_ class used by _TPJRegWdwState_ does not support the permissions needed to access the 64 bit registry view.

The _[Save](./TPJRegWdwState-Save.md)_ method saves the window information to the registry and the _[Restore](./TPJRegWdwState-Restore.md)_ method reads information in and sets the owning form window's size, position and state.

The component's _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property governs whether window sizes, positions and states are automatically restored on opening and saved on closing or whether the user must explicitly call the _[Save](./TPJRegWdwState-Save.md)_ and _[Restore](./TPJRegWdwState-Restore.md)_ methods.

The _[Options](./TPJCustomWdwState-Options.md)_ property and the _[OnReadWdwState](./TPJCustomWdwState-OnReadWdwState.md)_ event can be used to customise how the stored data is interpreted and whether the window's saved state or size should be used or ignored.

Application defined data can be read from and written to the registry by handling the _[OnGettingRegData](./TPJRegWdwState-OnGettingRegData.md)_ [~>5.1] and _[OnPuttingRegData](./TPJRegWdwState-OnPuttingRegData.md)_ [~>5.1] events that are triggered when the component reads and writes its data.

The root and sub key to be used in the registry are specified using the _[RootKey](./TPJRegWdwState-RootKey.md)_ (or _[RootKeyEx](./TPJRegWdwState-RootKeyEx.md)_ [~>5.6]) and _[SubKey](./TPJRegWdwState-SubKey.md)_ properties respectively. Alternatively the _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ (or _[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md)_** [~>5.6]) event can be handled and used to set the root key and sub key to use.

It is only possible to have one instance of a _TPJRegWdwState_ component on any one form. Neither can a _TPJRegWdwState_ component be dropped onto a form that already contains either a _[TPJWdwState](./TPJWdwState.md)_ or a _[TPJUserWdwState](./TPJUserWdwState.md)_ component.

_TPJRegWdwState_ exposes the following methods, properties and events, some of which are inherited unchanged from _[TPJCustomWdwState](./TPJCustomWdwState.md)_.

## Methods

| Method | Description |
|:-------|:------------|
| _[Create](./TPJCustomWdwState-Create.md)_ | Class constructor that permits only one instance of the component to be placed on a form. |
| _[CreateStandAlone](./TPJCustomWdwState-CreateStandAlone.md)_ | Class constructor for use when creating components at run time. |
| _[ReadWdwState](./TPJRegWdwState-ReadWdwState.md)_ | Overridden method that reads a window's size, position and state from the registry. |
| _[Restore](./TPJRegWdwState-Restore.md)_ | Restores the size, position and state of a window from the registry. |
| _[Save](./TPJRegWdwState-Save.md)_ | Saves the size, position and state of the window to the registry. |
| _[SaveWdwState](./TPJRegWdwState-SaveWdwState.md)_ | Overridden method that writes a window's size, position and state to the registry. |

## Properties

| Property | Description |
|:---------|:------------|
| _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ | Determines whether the window's size, position and state is automatically restored on creation and stored on destruction. |
| _[IgnoreState](./TPJCustomWdwState-IgnoreState.md)_ | Determines whether the window's saved state (maximised, normal or minimised) is applied on restoration. This property is deprecated - use the _[Options](./TPJCustomWdwState-Options.md)_ property instead. |
| _[MinimizeDelay](./TPJCustomWdwState-MinimizeDelay.md)_ | Sets the delay between displaying a normalised form on screen and minimising it if required. |
| _[Options](./TPJCustomWdwState-Options.md)_ | Determines how the component interprets the window display data read from storage. |
| _[RootKey](./TPJRegWdwState-RootKey.md)_ | Specifies the _HKEY_ value of the registry root key under which the window's size, position and state information is stored. |
| _[RootKeyEx](./TPJRegWdwState-RootKeyEx.md) [~>5.6]_ | Similar to _[RootKey](./TPJRegWdwState-RootKey.md)_ except that instead of taking an _HKEY_ value it takes a value from the _[TPJRegRootKey](./TPJRegRootKey.md) [~>5.6]_ enumeration. |
| _[SubKey](./TPJRegWdwState-SubKey.md)_ | Determines the registry sub key under which the window's size, position and state information is stored. |

## Events

| Event | Description |
|:------|:------------|
| _[OnAfterWindowRestored](./TPJCustomWdwState-OnAfterWindowRestored.md) [~>5.4]_ | Event triggered after window has been restored and its state set. |
| _[OnAfterWindowSized](./TPJCustomWdwState-OnAfterWindowSized.md) [~>5.4]_ | Event triggered after the window is sized but before it is physically restored. |
| _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ | Event that allows user to change the registry key where window information is stored. The registry root key is specified by it _HKEY_ value. |
| _[OnGetRegDataEx](./TPJRegWdwState-OnGetRegDataEx.md) [~>5.6]_ | Similar to _[OnGetRegData](./TPJRegWdwState-OnGetRegData.md)_ except that the root key is specified by a value from the _[TPJRegRootKey](./TPJRegRootKey.md)_ [~>5.6] enumeration.  |
| _[OnGettingRegData](./TPJRegWdwState-OnGettingRegData.md)_ [~>5.1] | Event that allows user to read additional registry data when the component reads window state information. |
| _[OnPuttingRegData](./TPJRegWdwState-OnPuttingRegData.md)_ [~>5.1] | Event that allows user to write additional registry data when the component writes window state information. |
| _[OnReadWdwState](./TPJCustomWdwState-OnReadWdwState.md)_ | Event that allows user to change the window data read from storage before the window is displayed. _TPJRegWdwState_ publishes this inherited protected event. |
