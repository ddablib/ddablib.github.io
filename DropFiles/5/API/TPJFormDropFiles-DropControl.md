# DropControl property

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJFormDropFiles](./TPJFormDropFiles.md)_

**Applies to:** ~>5.0

```pascal
property DropControl: TControl;
```

## Description

Provides a reference to any control on the form that was under the mouse when the files were dropped. If no controls were under the cursor then a reference to the form is returned providing the mouse was in the form's client area. Nil is returned otherwise.
