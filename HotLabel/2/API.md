# Hot Label Component #

The _PJHotLabel_ unit contains a single component, _[TPJHotLabel](TPJHotLabel.md)_, that implements a label control that can access a URL when clicked.

Several types are defined in the unit in total. They are:

| Type | Description |
| -------- | --------- |
| _[TPJHotLabel](TPJHotLabel.md)_ | The Hot Label Component itself. |
| _[EPJURLError](EPJURLError.md)_  | A custom exception that is raised by _[TPJHotLabel](TPJHotLabel.md)_ when URL related errors are encountered. |
| _TPJHLHintStyle_ | An enumeration of hint styles used by the _[HintStyle](TPJHotLabelHintStyle.md)_ property. See the property's documentation for details. |
| _TPJHLCustomHintEvent_ | The type of event triggered by the _[OnCustomHint](TPJHotLabelOnCustomHint.md)_ event. See the event's documentation for details. |

**Note:** This documentation relates to release 2.0 and later. Any features introduced after v2.0 are flagged with the relevant version number as a superscript.

## Examples ##

The following examples provide some ideas of how to use the component:

  1. [Using highlighting](HotLabelExample1.md)
  1. [Using the OnCustomHint event](HotLabelExample2.md)
  1. [Tracking visits to URLs](HotLabelExample3.md)<sup>[v2.2]</sup>

A further example is provided by the demo program that is included in the download.

## Links

* Back to [Documentation Home Page](../index.md)
* [Hot Label Component Web Page](https://delphidabbler.com/software/hotlabel) -- Install notes, change log, license etc.
* [Downloads](https://sourceforge.net/projects/ddablib/files/hotlabel/) -- Download current version here.
* [Source Code](https://github.com/ddablib/hotlabel) -- Current development tree.
