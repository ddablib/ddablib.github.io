# URL property

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](./TPJHotLabel.md)_

**Applies to:** ~>2.0

```pascal
property URL: string;
```

## Description

This property stores the URL that is to be accessed when the label is clicked. The default web browser or mail client are used to display the URL.

If the _[ValidateURL](./TPJHotLabel-ValidateURL.md)_ property is `True` then any value assigned to the _URL_ property must be valid otherwise a _[EPJURLError](./EPJURLError.md)_ exception will be raised.

When the _[CaptionIsURL](./TPJHotLabel-CaptionIsURL.md)_ property is `True` then the value assigned to the _URL_ property is also assigned to the _[Caption](./TPJHotLabel-Caption.md)_ property and displayed in the label. This makes it easy to display the URL in the label by assigning just one property.

The URL can be displayed in the component's _[Hint](./TPJHotLabel-Hint.md)_ property by setting the _[HintStyle](./TPJHotLabel-HintStyle.md)_ property to `hsURL`.

The default value of this property is either `http://localhost` [2.0 to ~>2.1.0]  or `http://example.com/` [~>2.2].
