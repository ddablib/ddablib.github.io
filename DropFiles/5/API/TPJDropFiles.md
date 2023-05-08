# TPJDropFiles

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Applies to:** ~>5.0

This component provides a window which can accept files dragged and dropped from Windows Explorer. The component handles `WM_DROPFILES` messages to do this. This control can contain child components (in a similar way to _TPanel_ components). Files dropped over any such child component are also accepted by the parent _TPJDropFiles_ component.

The main use for _TPJDropFiles_ is when you need to detect file drops on non-windowed components such as _TLabel_ or _TShape_. To do this drop a _TPJDropFiles_ on a form, size it to suit, then place the required non-windowed control(s) on top of the _TPJDropFiles_ control, aligning and sizing the components as required.

## Methods

| Method | Description |
|:-------|:------------|
| _[Paint](./TPJDropFiles-Paint.md)_ | Paints the outline of the component at design time. Does nothing at run time. |

## Properties

Only those properties added or modified by _TPJDropFiles_ are listed here. All other inherited properties are omitted.

| Property | Description |
|:---------|:------------|
| _[Count](./TPJDropFiles-Count.md)_ | This read-only property returns the number of files dropped on the control. |
| _[DropControl](./TPJDropFiles-DropControl.md)_ | This read only property references the control that the files were dropped on. |
| _[DropPoint](./TPJDropFiles-DropPoint.md)_ | This read only property gives the mouse coordinates where the files were dropped. |
| _[Enabled](./TPJDropFiles-Enabled.md)_ | Inherited from _TCustomControl_. See Delphi help for details. |
| _[FileName](./TPJDropFiles-FileName.md)_ | The name of the file dropped on the control. |
| _[Files](./TPJDropFiles-Files.md)_ | The names of the most recent files dropped on the control. |
| _[Filter](./TPJDropFiles-Filter.md)_ | References a file filter component used to filter the names of dropped files. |
| _[ForegroundOnDrop](./TPJDropFiles-ForegroundOnDrop.md)_ | Causes the owning window to be brought to front when files are dropped. |
| _[IsFolder](./TPJDropFiles-IsFolder.md)_ | Tells whether each of the dropped files is a folder or a file. |
| _[Options](./TPJDropFiles-Options.md)_ | Determines how the dropped files are processed and which files are stored in the _[Files](./TPJDropFiles-Files.md)_ property. |
| _[PassThrough](./TPJDropFiles-PassThrough.md)_ | Causes drop files messages to be passed through to the owning form. |

## Events

| Event | Description |
|:------|:------------|
| _[OnBeforeDrop](./TPJDropFiles-OnBeforeDrop.md)_ | Event that occurs just before files dropped on the control are processed. |
| _[OnDropFiles](./TPJDropFiles-OnDropFiles.md)_ | Event that occurs when files are dropped on the component's window. |
| _[OnFileFilter](./TPJDropFiles-OnFileFilter.md)_ | Event that occurs for each file and folder processed and allows for custom filtering of files. |
