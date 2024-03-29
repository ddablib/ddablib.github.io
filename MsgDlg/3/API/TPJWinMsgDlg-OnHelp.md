# OnHelp event

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJWinMsgDlg](./TPJWinMsgDlg.md)_

**Applies to:** ~>3.0

```pascal
property OnHelp: TNotifyEvent;
```

## Description

The _OnHelp_ event is triggered when the user requests help in a dialogue either by clicking a help button or by pressing F1. If _OnHelp_ is handled then the component's default help processing is inhibited - the event handler must display the required help.

This event is never triggered if the dialogue box does not display a help button. F1 keypresses are ignored when there is no help button.

Handle this event if you want to use an alternative help system to that registered with the _Application_ object.
