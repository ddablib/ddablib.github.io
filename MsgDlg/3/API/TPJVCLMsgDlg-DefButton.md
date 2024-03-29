# DefButton property

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJVCLMsgDlg](./TPJVCLMsgDlg.md)_

**Applies to:** ~>3.0

```pascal
type
  TMsgDlgButton = (
    mbYes, mbNo, mbOK, mbCancel, mbAbort, mbRetry, mbIgnore,
    mbAll, mbNoToAll, mbYesToAll, mbHelp, mbClose
  );

property DefButton: TMsgDlgButton;
```

## Description

The _DefButton_ property specifies which button is to be the default button in the dialogue. If the chosen button is not displayed in the dialogue then the first (leftmost) button is the default.

See the documentation of the _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ property for a description of the available buttons.

The default value of the property is `mbOK`.
