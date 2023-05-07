# ParentFont property

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](../API/TPJHotLabel.md)_

```pascal
property ParentFont: Boolean;
```

## Description

This property determines where a control looks for its font information.

To have the component use the same font in its _[Font](../API/TPJHotLabel-Font.md)_ property as its parent control, set _ParentFont_ to `True`.

Normally _ParentFont_ is set to `True` for all controls in order to ensure that all the controls on a form have a uniform appearance. For example, if _ParentFont_ is `True` for all controls in a form, changing the form's _Font_ property to 12 point Courier causes all controls on the form to use that font.

Changing this component's _[Font](../API/TPJHotLabel-Font.md)_ property causes _ParentFont_ to be set to `False` automatically.

The _ParentFont_ property of _[TPJHotLabel](../API/TPJHotLabel.md)_ defaults to `False` since the default attributes of the _[Font](../API/TPJHotLabel-Font.md)_ property differ from the parent control in order to make the hot-link stand out.
