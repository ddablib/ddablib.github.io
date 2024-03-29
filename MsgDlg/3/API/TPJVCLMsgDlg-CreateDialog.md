# CreateDialog method

**Project:** [Message Dialogue Components](../API.md).

**Unit:** _PJMessageDialog_.

**Class:** _[TPJVCLMsgDlg](./TPJVCLMsgDlg.md)_

**Applies to:** ~>3.0

```pascal
function CreateDialog: TForm;
```

## Description

The _CreateDialog_ method creates an instance of a dialogue box and returns it. This instance is customised according to the component's properties. However, no sound is played by this method regardless of the state of the _[MakeSound](./TPJVCLMsgDlg-MakeSound.md)_ property.

Note that the method's caller is responsible for showing and freeing dialogue box instances created by this method.
