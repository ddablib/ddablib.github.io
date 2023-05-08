# MakeSound property

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJVCLMsgDlg](./TPJVCLMsgDlg.md)_

**Applies to:** ~>3.0

```pascal
property MakeSound: Boolean;
```

## Description

Set _MakeSound_ to `True` to play a sound when the dialogue is displayed. If _MakeSound_ is `False` then no sound is played.

The sound played is one of the standard system sounds. Which sound is used depends on the value of the _[Kind](./TPJVCLMsgDlg-Kind.md)_ property, the operating system version and the chosen sound theme. Some themes will play no sound for some values of the _[Kind](./TPJVCLMsgDlg-Kind.md)_ property regardless of the value assigned to _MakeSound_.

The property's default value is `False`.
