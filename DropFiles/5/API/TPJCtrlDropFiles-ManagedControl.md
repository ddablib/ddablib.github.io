# ManagedControl property

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Class:** _[TPJCtrlDropFiles](./TPJCtrlDropFiles.md)_

**Applies to:** ~>5.0

```pascal
property ManagedControl: TWinControl;
```

## Description

_ManagedControl_ refers to the associated control for which file drops are managed. If this property is nil then no files drops are handled.

## ⚠️ Known issue

At some point between Delphi XE and Delphi 12 [_TPJCtrlDropFiles_](./TPJCtrlDropFiles.md) stopped working correctly when _ManagedControl_ was associated with a _TComboBox_ or related control. Any attempt to drop a file on the managed control is rejected.

The circumstances under which the bug occurs are not fully understood, depends on the value of the combo box's _Style_ property as follows:

| _TComboBox.Style_ property value | Behaviour |
|:---------------------------------|:----------|
| `csSimple`             | File drops are accepted. |
| `csDropDownList`       | File drops not accepted (there is no edit window). |
| `csDropDown` (default) | File drops not accepted if _ManagedControl_ is set at design time. However, if _ManagedControl_ is cleared then set at run time then File drops are accepted. |
| `csOwnerDrawFixed`     | Not tested, but not expected to work since there is no edit box. |
| `csOwnerDrawVariable`  | Not tested, but not expected to work since there is no edit box. |

> For a discussion of the problem see [issue #6](https://github.com/ddablib/dropfiles/issues/6) in the [**ddablib/dropfiles**](https://github.com/ddablib/dropfiles) repository on GitHub.

### Workaround

One possible way to work around this issue is to use a [_TPJDropFiles_](./TPJDropFiles.md) component instead of [_TPJCtrlDropFiles_](./TPJCtrlDropFiles.md). Place a _TPJDropFiles_ component on a form and make it the parent of the _TComboBox_, then size the _TPJDropFiles_ to the same size as the combo box. The _TPJDropFiles_ should then capture file drops made over the the combo box.
