# HelpContext property

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJWinMsgDlg](./TPJWinMsgDlg.md)_

**Applies to:** ~>3.0

```pascal
type
  THelpContext = -MaxLongInt..MaxLongInt;

property HelpContext: THelpContext;
```

## Description

Set the _HelpContext_ property to the context number of the relevant topic in the help file specified by the _[HelpFile](./TPJWinMsgDlg-HelpFile.md)_ property. When a non-zero help context number is specified a help button is displayed in the dialogue box which calls context sensitive help with the given help context when pressed.

Changing the value of _HelpContext_ from zero to non-zero and back again changes the value of the _[DlgType](./TPJWinMsgDlg-DlgType.md)_ property. See the _[DlgType](./TPJWinMsgDlg-DlgType.md)_ page for full details.

If _[OnHelp](./TPJWinMsgDlg-OnHelp.md)_ is not handled and a help button is pressed, a request is made to the _Application_ object to pass the help context along to the currently registered help system.
