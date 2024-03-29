# OnCustomHint event

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](./TPJHotLabel.md)_

**Applies to:** ~>2.0

```pascal
type
  TPJHLCustomHintEvent = procedure(
    Sender: TObject; var HintStr: string
  ) of object;

property OnCustomHint: TPJHLCustomHintEvent;
```

## Description

_OnCustomHint_ is an event that enables the user to specify a custom hint to be displayed by the component.

This event is triggered only when the _[HintStyle](./TPJHotLabel-HintStyle.md)_ property is set to `hsCustom` and a hint is about to be displayed. Handling the event enables the user to specify the text that is displayed in the pop-up hint. The event handler is passed the current _[Hint](./TPJHotLabel-Hint.md)_ property value in the _HintStr_ parameter. Specify the hint text by setting _HintStr_ to the required value.

If _[HintStyle](./TPJHotLabel-HintStyle.md)_ is `hsCustom` and the event is not handled then the value of the _[Hint](./TPJHotLabel-Hint.md)_ property is displayed as normal.

See the [Using the OnCustomHint event](../Examples/Example2.md) example for one possible use of the _OnCustomHint_ event.
