# [Window State Components](../index.md) Overview

**Applies to:** ~>5.0

> This page provides an overview of the features of the Window State Components. If you are looking for information on programming with the unit please see the [Programmers' Guide](./API.md).

The Window State Components can save and restore a window's size, position and state (minimized, maximized or normal) between program executions. Three components are provided that use different means of recording the window's information. They are:

1. [_TPJWdwState_](./API/TPJWdwState.md)

    This component records window state information in an ini file. The user has control over the ini file name and path and the name of the section of the file where window information is recorded. Alternatively the ini file name and section names can be configured by handling events that are triggered immediately before the ini file is read or written.

2. [_TPJRegWdwState_](./API/TPJRegWdwState)

    This component uses the Windows registry to record window state information. The registry root key and sub key where the state information will be stored can be specified via properties, or by handling an event that is triggered just before the registry is accessed.

3.  [_TPJUserWdwState_](./API/TPJUserWdwState)

    This component relies on the user to handle saving and reading the window state data to or from persistent storage. The component gives the most flexibility of all the components at the expense of placing the storage burden on the user. The user must handle events triggered when the component needs to read or save data.

All components implement the same core functionality. This is controlled by some common properties and events.

## Compatibility

The components can be compiled with any Delphi compiler from Delphi 5 through to 11.3. They are compatible with 32 bit and 64 bit Windows targets.

The _Window State Components_ require the VCL, so are not compatible with the FireMonkey framework.

Non-Windows platforms are not supported.

## Links

* [Programmer's Guide](./API.md)
