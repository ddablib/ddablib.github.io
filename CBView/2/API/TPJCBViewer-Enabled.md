# Enabled property

**Project:** [Clipboard Viewer Component](../../index.md)

**Unit:** _PJCBView_

**Class:** [_TPJCBViewer_](./TPJCBViewer.md)

**Applies to:** ~>2.0

```pascal
property Enabled: Boolean;
```

## Description

The _Enabled_ property enables and disables the component.

When the property is set to _False_ the component will never trigger the [_OnClipboardChanged_](./TPJCBViewer-OnClipboardChanged.md) event. Restoring _Enabled_ to _True_ re-enables [_OnClipboardChanged_](./TPJCBViewer-OnClipboardChanged.md).

The default value is _True_.