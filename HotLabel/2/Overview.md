# [Hot Label Component](../index.md) Overview

**Applies to:** ~>2.0

> This page provides an overview of the features of the _Hot Label Component_. If you are looking for information on programming with the component please see the [Programmers’ Guide](./API.md).

The _Hot Label Component_ is a simple Delphi component that descends from _TLabel_. It provides a clickable label that can start the default browser or email client to access a specific URL. Key features of the component are:

* All properties of _TLabel_ are supported, although the usage and default values of some of the inherited properties have been changed.
* The URL to be accessed is stored in a property and is accessed when the label is clicked.
* The label can display descriptive text or the associated URL.
* The URL can optionally be validated to check for supported protocols.
* The label's text is navy blue by default, but the colour can be changed.
* The label's text can be highlighted when the mouse passes over it.
* The label can also display in a different style when the URL has been accessed.
* The "hand point" cursor by default, although the cursor can be changed.
* The component's pop-up hints can be customised.

## Compatibility

The component can be compiled with any Delphi compiler from Delphi 7 through to 11.3. It is compatible with 32 bit and 64 bit Windows targets.

It is possible that the component will also compile with Delphi 4, 5 and 6, but this has not been tested.

This is a VCL component and so is not compatible with the FireMonkey framework.

## Links

* [Programmer's Guide](./API.md)
* [Examples](./Examples.md)
