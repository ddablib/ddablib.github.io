# OnClipboardChanged event

**Project:** [Clipboard Viewer Component](../API.md)

**Unit:** _PJCBView_

**Class:** [_TPJCBViewer_](./TPJCBViewer.md)

**Applies to:** ~>2.0

```pascal
property OnClipboardChanged: TNotifyEvent;
```

## Description

This event is triggered when the clipboard contents change, providing that the [_Enabled_](./TPJCBViewer-Enabled.md) property is `True`. You should handle this event to perform any processing you need to do when the clipboard content changes.

If both the [_TriggerOnCreation_](./TPJCBViewer-TriggerOnCreation.md) and [_Enabled_](./TPJCBViewer-Enabled.md) properties are `True` then the event is also fired immediately after the component is created. This behaviour can be useful when you need to check the clipboard content at program start up as well as when the content changes. By using this feature you simply need to code the event handler and don't need any special start up code.
