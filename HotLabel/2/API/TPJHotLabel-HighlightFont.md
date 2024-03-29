# HighlightFont property

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](./TPJHotLabel.md)_

**Applies to:** ~>2.0

```pascal
property HighlightFont: TFont;
```

## Description

This property controls the appearance of the label when the mouse passes over it.

A _[TPJHotLabel](./TPJHotLabel.md)_ can highlight its text when the mouse passes over the control. The font that is used to highlight the text is determined by the _HighlightFont_ property. The property defaults to the same font as the _[Font](./TPJHotLabel-Font.md)_ property but with the colour changed to `clRed`.

Note that the highlighting only takes place when the _[HighlightURL](./TPJHotLabel-HighlightURL.md)_ property is `True`.

It is recommended that only the colour and certain styles of the font are altered and the font size and name remain unchanged so that the label does not grow and shrink when the cursor passes over it. See the [highlighting example](../Examples/Example1.md) for details of two suitable designs.
