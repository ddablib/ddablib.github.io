# Options property #

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJVCLMsgDlg](./TPJVCLMsgDlg.md)_

```pascal
type
  TPJMsgDlgOption = (
    mdoInhibitCancel, mdoAutoHelpBtn, mdoShowCustomIcon, mdoGroupIgnoresHelp
  );

type
  TPJMsgDlgOptions = set of TPJMsgDlgOption;

property Options: TPJMsgDlgOptions;
```

## Description ##

The _Options_ property stores a set of unrelated options that are used to customise the dialogue box. The various options are described below:

| **Value** | **Description** |
|:----------|:----------------|
| `mdoInhibitCancel` | When included in _Options_ this value causes a dialogue to be displayed that can't be cancelled. This is done by (1) ignoring any request to display a cancel button, (2) removing the system menu from the dialogue and (3) rejecting ESC key presses. |
| `mdoAutoHelpBtn` | This option causes the dialogue to display a help button when the _[HelpContext](./TPJVCLMsgDlg-HelpContext.md)_ property is non-zero and to hide the help button when _[HelpContext](./TPJVCLMsgDlg-HelpContext.md)_ is 0. This setting overrides any help button that may have been requested using the _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ property. |
| `mdoShowCustomIcon` | This option only has an effect when _[Kind](./TPJVCLMsgDlg-Kind.md)_ = `mkUser`. When set the option causes the the dialogue box to display the icon specified by the _[IconResource](./TPJVCLMsgDlg-IconResource.md)_ property. When not set no icon is displayed regardless of the value of _[IconResource](./TPJVCLMsgDlg-IconResource.md)_. |
| `mdoGroupIgnoresHelp` | Normally, assigning a value to _[ButtonGroup](./TPJVCLMsgDlg-ButtonGroup.md)_ and then including `mbHelp` in _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ will change _[ButtonGroup](./TPJVCLMsgDlg-ButtonGroup.md)_ to `bgUnknown`. By including this option the component is made to ignore the presence of `mbHelp` in _[Buttons](./TPJVCLMsgDlg-Buttons.md)_ when calculating a button group. So, in the above case, the value of _[ButtonGroup](./TPJVCLMsgDlg-ButtonGroup.md)_ will remain unchanged when `mbHelp` is added to _[Buttons](./TPJVCLMsgDlg-Buttons.md)_. |

The default value of the property is `[mdoAutoHelpBtn, mdoShowCustomIcon]`.