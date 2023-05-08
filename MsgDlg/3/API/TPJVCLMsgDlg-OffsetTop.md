# OffsetTop property

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJVCLMsgDlg](./TPJVCLMsgDlg.md)_

**Applies to:** ~>3.0

```pascal
property OffsetTop: Integer;
```

## Description

The effect of _OffsetTop_ is determined by the value of the _[Align](./TPJVCLMsgDlg-Align.md)_ property as follows:

| _Align_ property value | Effect of _OffsetTop_ |
|:-----------------------|:----------------------|
| `mdaScreenOffset` | Sets vertical offset of dialogue box from top of screen. |
| `mdaScreenCentre` | No effect: property is ignored. |
| `mdaFormOffset` | Sets vertical offset of dialogue box from top of owning form. |
| `mdaFormCentre` | No effect: property is ignored.|

_OffsetTop_ is used in conjunction with _[OffsetLeft](./TPJVCLMsgDlg-OffsetLeft.md)_.

The default value of the property is 0.
