# TPJVCLMsgDlg

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

_TPJVCLMsgDlg_ provides a customisable message dialogue box that is based on that provided by the Delphi _CreateMessageDialog_ function. The component provides a similar (but extended) interface to the _[TPJWinMsgDlg](./TPJWinMsgDlg.md)_ component but uses a different method to display the dialogue box. This component is recommended when a finer degree of control to that provided by _[TPJWinMsgDlg](./TPJWinMsgDlg.md)_ is required.

The text displayed in the dialogue box is determined by the _[Text](./TPJVCLMsgDlg-Text.md)_ property. Various button groupings can be displayed using the _[ButtonGroup](./TPJVCLMsgDlg-ButtonGroup.md)_ and/or _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ properties. Setting a non-zero _[HelpContext](./TPJVCLMsgDlg-HelpContext.md)_ causes a help button to be displayed. The _[Kind](./TPJVCLMsgDlg-Kind.md)_ property allows a choice of various standard dialogue boxes and icons to be displayed. A user defined icon extracted from a named resource, specified by _[IconResource](./TPJVCLMsgDlg-IconResource.md)_ can also be displayed. The window title can be customised using the _[Title](./TPJVCLMsgDlg-Title.md)_ property, otherwise a default title is used that is related to the kind of icon being displayed. The _[MakeSound](./TPJVCLMsgDlg-MakeSound.md)_ property determines whether an appropriate system sound is generated when the dialogue is displayed. It is possible to set how the dialogue box is to be aligned to screen or form using the _[Align](./TPJVCLMsgDlg-Align.md)_ property in combination with the _[OffsetLeft](./TPJVCLMsgDlg-OffsetLeft.md)_ and _[OffsetTop](./TPJVCLMsgDlg-OffsetTop.md)_ properties.

The dialogue box can be invoked with the _[Execute](./TPJVCLMsgDlg-Execute.md)_ method or an instance of the dialogue can be created using the _[CreateDialog](./TPJVCLMsgDlg-CreateDialog.md)_ method. In the latter case the user has responsibility for showing and hiding the dialogue and destroying the instance.

## Methods

| Method | Description |
|:-------|:------------|
| _[CreateDialog](./TPJVCLMsgDlg-CreateDialog.md)_ | Creates instance of  the dialogue box and returns a reference to it. |
| _[Execute](./TPJVCLMsgDlg-Execute.md)_ | Displays the dialogue box and returns information about the button pressed to close it. |

## Properties

| Property | Description |
|:---------|:------------|
| _[Align](./TPJVCLMsgDlg-Align.md)_ | Determines the on screen alignment of the dialogue box. |
| _[ButtonGroup](./TPJVCLMsgDlg-ButtonGroup.md)_ | Determines which buttons appear in the dialogue box. |
| _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ | Determines the buttons displayed in the dialogue box . Provides finer control than _[ButtonGroup](./TPJVCLMsgDlg-ButtonGroup.md)_. |
| _[DefButton](./TPJVCLMsgDlg-DefButton.md)_ | Determines the default button in the dialogue box. |
| _[DlgType](./TPJVCLMsgDlg-DlgType.md)_ | Permits the buttons and type of dialogue box displayed to be specified by means of the flags that are passed to the _uType_ parameter of the Windows _MessageBox_ API function. |
| _[HelpContext](./TPJVCLMsgDlg-HelpContext.md)_ | Specifies the context number for online help. |
| _[HelpFile](./TPJVCLMsgDlg-HelpFile.md)_ | Specifies the file to use for online help. |
| _[IconResource](./TPJVCLMsgDlg-IconResource.md)_ | Specifies the resource containing the dialogue box's icon. |
| _[Kind](./TPJVCLMsgDlg-Kind.md)_ | Determines the type of  dialogue box that is displayed. |
| _[MakeSound](./TPJVCLMsgDlg-MakeSound.md)_ | Flag that determines if a sound will be emitted when the dialogue box is displayed. |
| _[OffsetLeft](./TPJVCLMsgDlg-OffsetLeft.md)_ | Determines the offset of the dialogue box from the left of the screen or owning form. |
| _[OffsetTop](./TPJVCLMsgDlg-OffsetTop.md)_ | Determines the offset of the dialogue box from the top of the screen or owning form. |
| _[Options](./TPJVCLMsgDlg-Options.md)_ | Property that records various customisation options. |
| _[Text](./TPJVCLMsgDlg-Text.md)_ | The text that is displayed in the dialogue box. |
| _[Title](./TPJVCLMsgDlg-Title.md)_ | The dialogue box's window title. |

## Events

| Event | Description |
|:------|:------------|
| _[OnHelp](./TPJVCLMsgDlg-OnHelp.md)_ | Event triggered when a user requests help in a dialogue box. |
| _[OnHide](./TPJVCLMsgDlg-OnHide.md)_ | Event triggered just after the component's dialogue box is hidden. |
| _[OnShow](./TPJVCLMsgDlg-OnShow.md)_ | Event triggered just before the component's dialogue box is displayed. |
