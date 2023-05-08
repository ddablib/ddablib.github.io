# HelpContext property #

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJVCLMsgDlg](./TPJVCLMsgDlg.md)_

```pascal
type
  THelpContext = -MaxLongInt..MaxLongInt;

property HelpContext: THelpContext;
```

## Description

Set the _HelpContext_ property to the context number of the relevant topic in the help file specified by the _[HelpFile](./TPJVCLMsgDlg-HelpFile.md)_ property. This topic is displayed when the user presses F1 in the dialogue box or clicks any help button that is displayed.

There are two ways the dialogue can display a help button that accesses the help topic:

  1. By including `mbHelp` in the _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ property and clearing the `mdoAutoHelpBtn` value of the _[Options](./TPJVCLMsgDlg-Options.md)_ property.
  2. By setting the `mdoAutoHelpBtn` value of the _[Options](./TPJVCLMsgDlg-Options.md)_ property and giving _HelpContext_ a non-zero value.

If _[OnHelp](./TPJVCLMsgDlg-OnHelp.md)_ is not handled and a help button is pressed, a request is made to the _Application_ object to pass the help context along to the currently registered help system.
