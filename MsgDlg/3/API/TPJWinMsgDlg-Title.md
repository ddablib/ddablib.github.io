# Title property #

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJWinMsgDlg](./TPJWinMsgDlg.md)_

```pascal
type
  TCaption = type string;

property Title: TCaption;
```

## Description ##

Set this property to customise the string that is displayed as the dialogue box window title. Leaving this property empty causes a default title to be displayed that depends on the value of the _[Kind](./TPJWinMsgDlg-Kind.md)_ property.