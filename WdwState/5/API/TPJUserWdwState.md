# TPJUserWdwState

**Project:** [Window State Components](../API.md).

**Unit:** _PJWdwState_.

**Applies to:** ~>5.0

This non-visual component enables the size, position and state of the form on which it is placed to be saved to and read to any persistent storage. The user is responsible for loading and saving the data. This is done by handling the _[OnReadData](./TPJUserWdwState-OnReadData.md)_ and _[OnSaveData](./TPJUserWdwState-OnSaveData.md)_ events. The component is provided in case the user wishes to save control the storage used or the format in which data is written. To use the the registry or an ini file _[TPJRegWdwState](./TPJRegWdwState.md)_ or _[TPJWdwState](./TPJWdwState.md)_ respectively can be used.

The _[Save](./TPJUserWdwState-Save.md)_ method saves the window information while _[Restore](./TPJUserWdwState-Restore.md)_ reads information in and sets the owning form window's size, position and state.

The component's _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ property governs whether window sizes, positions and states are automatically restored on opening and saved on closing or whether the user must explicitly call the _[Save](./TPJUserWdwState-Save.md)_ and _[Restore](./TPJUserWdwState-Restore.md)_ methods.

The _[Options](./TPJCustomWdwState-Options.md)_ property can be used to customise how the stored data is interpreted and whether the window's saved state or size should be used or ignored.

It is only possible to have one instance of a _TPJUserWdwState_ component on any one form. Neither can a _TPJUserWdwState_ component be dropped onto a form that already contains either a _[TPJWdwState](./TPJWdwState.md)_ or a _[TPJRegWdwState](./TPJRegWdwState.md)_ component.

_TPJUserWdwState_ exposes the following methods, properties and events, some of which are inherited unchanged from _[TPJCustomWdwState](./TPJCustomWdwState.md)_.

## Methods

| Method | Description |
|:-------|:------------|
| _[Create](./TPJCustomWdwState-Create.md)_ | Class constructor that permits only one instance of the component to be placed on a form. |
| _[CreateStandAlone](./TPJCustomWdwState-CreateStandAlone.md)_ | Class constructor for use when creating components at run time. |
| _[ReadWdwState](./TPJUserWdwState-ReadWdwState.md)_ | Overridden method that triggers the _[OnReadData](./TPJUserWdwState-OnReadData.md)_ event. |
| _[Restore](./TPJUserWdwState-Restore.md)_ | Restores the size, position and state of a window from the user provided storage. |
| _[Save](./TPJUserWdwState-Save.md)_ | Saves the size, position and state of the window to user specified storage. |
| _[SaveWdwState](./TPJUserWdwState-SaveWdwState.md)_ | Overridden method that triggers the _[OnSaveData](./TPJUserWdwState-OnSaveData.md)_ event. |

## Properties

| Property | Description |
|:---------|:------------|
| _[AutoSaveRestore](./TPJCustomWdwState-AutoSaveRestore.md)_ | Determines whether the window's size, position and state is automatically restored on creation and stored on destruction. |
| _[IgnoreState](./TPJCustomWdwState-IgnoreState.md)_ | Determines whether the window's saved state (maximised, normal or minimised) is applied on restoration. This property is deprecated - use the _[Options](./TPJCustomWdwState-Options.md)_ property instead. |
| _[MinimizeDelay](./TPJCustomWdwState-MinimizeDelay.md)_ | Sets the delay between displaying a normalised form on screen and minimising it if required. |
| _[Options](./TPJCustomWdwState-Options.md)_ | Determines how the component interprets the window display data read from storage. |

## Events

| Event | Description |
|:------|:------------|
| _[OnAfterWindowRestored](./TPJCustomWdwState-OnAfterWindowRestored.md) [~>5.4]_ | Event triggered after window has been restored and its state set. |
| _[OnAfterWindowSized](./TPJCustomWdwState-OnAfterWindowSized.md) [~>5.4]_ | Event triggered after the window is sized but before it is physically restored. |
| _[OnReadData](./TPJUserWdwState-OnReadData.md)_ | Event triggered when the component needs the user to read data from persistent storage. |
| _[OnSaveData](./TPJUserWdwState-OnSaveData.md)_ | Event triggered when the component needs the user to save data to persistent storage. |

Note that the protected _[OnReadWdwState](./TPJCustomWdwState-OnReadWdwState.md)_ event of _TPJCustomWdwState_ is not exposed by _TPJUserWdwState_.
