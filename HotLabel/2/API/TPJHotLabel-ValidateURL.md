# ValidateURL property #

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](../API/TPJHotLabel.md)_

```pascal
property ValidateURL: Boolean;
```

## Description ##

This property determines whether the URL stored in the component is validated or not.

Set this property to `True` to cause any value assigned to the _[URL](../API/TPJHotLabel-URL.md)_ property to be validated. When _ValidateURL_ is `False` no URLs are validated. Note that setting this property to `True` causes the current URL to be validated immediately.

URLs are validated only by examining the protocol and checking it is supported. Valid protocols are:

  * `http://`
  * `https://`
  * `mailto:`
  * `file:`
  * `ftp://`

If validation fails a _[EPJURLError](../API/EPJURLError.md)_ exception is raised. If this exception is raised while setting _ValidateURL_ to `True` the default URL is stored in the _[URL](../API/TPJHotLabel-URL.md)_ property.

When the _[CaptionIsURL](../API/TPJHotLabel-CaptionIsURL.md)_ and _ValidateURL_ properties are both `True`, assigning text to the _[Caption](../API/TPJHotLabel-Caption.md)_ property also causes the text to be validated. This is because setting the _[Caption](../API/TPJHotLabel-Caption.md)_ property in this case automatically updates the _[URL](../API/TPJHotLabel-URL.md)_ property.

The default property value is `True`.