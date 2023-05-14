# [Message Dialogue Components](../index.md) Overview

**Applies to:** ~>3.0

> This page provides an overview of the features of the _Message Dialogue Components_. If you are looking for information on programming with the component please see the [Programmers’ Guide](./API.md).

The _Message Dialogue Components_ comprise of two customisable message dialogue box components. They are:

* [TPJWinMsgDlg](./API/TPJWinMsgDlg.md) - This component wraps the Windows _MessageBoxIndirect_ API call and displays a message box based on that provided by Windows. It will be suitable for most purposes and has the lighter footprint.

* [TPJVCLMsgDlg](./API/TPJVCLMsgDlg.md) - This component uses the Delphi VCL _CreateMessageDialog_ function to create a form based message box. (_CreateMessageDialog_ is also used by the standard Delphi _MessageDlgXXX_ functions). The component provides more flexibility than either the Delphi functions or _TPJWinMsgDlg_. It should be used when it is necessary to display buttons or combinations of buttons that are not supported by the Windows API message box or when a finer degree of control over the appearance and behaviour of the message box is required. _TPJVCLMsgDlg_ supports all the features of _TPJWinMsgDlg_ and extends them.

## Compatibility

The components can be compiled with Delphi 7 and later. It will compile for both 32 bit and 64 bit targets.

It is possible that components will also compile with Delphi 4 to 6, but this has not been tested.

The unit has dependencies on the VCL and the Windows API and therefore cannot be used with the FireMonkey framework or with non-Windows targets.

## Links

* [Programmer's Guide](./API.md)
