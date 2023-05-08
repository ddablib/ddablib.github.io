# [Drop Files Components](../index.md) Overview

**Applies to:** ~>5.0

> This page provides an overview of the features of the Drop Files Components. If you are looking for information on programming with the classes please see the [Programmers' Guide](./API.md).

Three components are supplied that support file drag and drop from Windows Explorer along with subsidiary components that can filter dropped files. The components are:

* [_TPJDropFiles_](./API/TPJDropFiles.md) - Container control that catches files dragged and dropped onto its client area or the client area of child controls.
* [_TPFormDropFiles_](./API/TPJFormDropFiles.md) - Non-visual component that catches files dragged and dropped from Explorer onto the form that contains the component.
* [_TPJCtrlDropFiles_](./API/TPJCtrlDropFiles.md) - Non-visual component that catches files dragged and dropped from Explorer onto an associated control.
* [_TPJExtFileFilter_](./API/TPJExtFileFilter.md) - File filter component that filters files according to their extension.
* [_TPJWildCardFileFilter_](./API/TPJWildCardFileFilter.md) - File filter component that filters files according to a DOS-style wild card.
* [_TPJFileFilter_](./API/TPJFileFilter.md) - An abstract base class for file filter components.

Some design time assistance is provided by component and property editors.

Key features of the drop files components are:

* An event is triggered when files are dropped.
* The names of dropped files are made available through the Files_ array property.
* The list of dropped files can be configured to include only files, only folders or all files and folders.
* Dropped folders can be recursed so that all the files and sub-folders in each of the dropped folders are listed.
* Filters can be applied to the dropped files and folders. This is done in one of two ways:
    * By handling the OnFileFilter event and deciding which files and folders to pass through the filter.
    * By linking the drop file component to a special file filter component, derived from the abstract [_TPJFileFilter_](./API/TPJFileFilter.md).
* The mouse co-ordinates where the files were dropped can be retrieved, as can a reference to any control under the mouse cursor at the time.

## Compatibility

The components can be compiled with any Delphi compiler from Delphi 7 through to 11.3. They are compatible with 32 bit and 64 bit Windows targets.

It is possible that the components will compile with Delphi 3 to 6, but this has not been tested.

These are VCL components and so are not compatible with the FireMonkey framework.

Non-Windows platforms are not supported.

## Links

* [Programmer's Guide](./API.md)
