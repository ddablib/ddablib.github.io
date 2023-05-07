# Hint property

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](../API/TPJHotLabel.md)_

```pascal
property Hint: string;
```

## Description

_Hint_ contains a text string that can appear when the user moves the mouse over the control.

With one exception, the _Hint_ property of _[TPJHotLabel](../API/TPJHotLabel.md)_ operates in the same way as the inherited property. The exception is that the _[HintStyle](../API/TPJHotLabel-HintStyle.md)_ property can change the source of the hint's text. The hint text can be taken from the _[URL](../API/TPJHotLabel-URL.md)_ property or a custom value can be supplied by handling the _[OnCustomHint](../API/TPJHotLabel-OnCustomHint.md)_ event. If the _[URL](../API/TPJHotLabel-URL.md)_ property value is used _Hint_ is ignored. If custom hints are used, the value of the _Hint_ property is supplied to the event handler for modification.
