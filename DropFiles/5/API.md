# [Drop Files Components](../index.md) Programmer's Guide

**Applies to:** ~>5.0

## Introduction

This section of the _Drop Files Components_ documentation describes the API exposed by the components to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJDropFiles_ | Contains three components that support file drag and drop from Windows Explorer along with subsidiary components that can filter dropped files. |
| _PJDropFilesDsgn_ | Contains the design time elements of the drop files components: a component editor, a property editor and the component and editor registration code. |

### Components

| Component | Description |
|:----------|:------------|
| _[TPJDropFiles](./API/TPJDropFiles.md)_ | Container control that catches files dragged and dropped onto its client area or the client area of child controls. |
| _[TPJFormDropFiles](./API/TPJFormDropFiles.md)_ | Non-visual component that catches files dragged and dropped onto the form that contains the component. |
| _[TPJCtrlDropFiles](./API/TPJCtrlDropFiles.md)_ | Non-visual component that catches files dragged and dropped onto an associated control. |
| _[TPJExtFileFilter](./API/TPJExtFileFilter.md)_ | File filter component that filters files according to their extension. |
| _[TPJWildCardFileFilter](./API/TPJWildCardFileFilter.md)_ | File filter component that filters files according to a DOS-style wild card. |
| _[TPJFileFilter](./API/TPJFileFilter.md)_ | An abstract base class for file filter components. |

### Other Types

| Type | Description |
|:-----|:------------|
| _[TPJDropFilesOption & TPJDropFilesOptions](./API/TPJDropFilesOptions.md)_ | Enumerated type and set that define the possible values of the _Options_ property of the drop files components. |
| _[TPJDroppedFileFilter](./API/TPJDroppedFileFilter.md)_ | Type of _OnFileFilter_ events of the drop files components. |
| _[TPJExtFileFilterStyle](./API/TPJExtFileFilterStyle.md)_ | Enumeration representing the kind of filtering performed by the _[TPJExtFileFilter.Style](./API/TPJExtFileFilter-Style.md)_ property. |


### Design Time Editors

| Editor class | Description |
|:-------------|:------------|
| _TPJExtFileFilterExtPE_ | Property editor for the _[Extensions](./API/TPJExtFileFilter-Extensions.md)_ property of the _[TPJExtFileFilter](./API/TPJExtFileFilter.md)_ component. This editor displays a dialogue box where extensions can be added, removed and saved in the correct format. |
| _TPJDropFilesCE_ | Component editor that causes an event handler for the _OnDropFiles_ events of the drop file components to be opened in the designer when the components are double-clicked. The default action without this component editor is to open the rarely used _OnBeforeDrop_ event handler, which is not very useful. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).
## Links

* [Overview](./Overview.md)
