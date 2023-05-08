# TPJCtrlDropFiles

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Applies to:** ~>5.0

This non-visual component catches all `WM_DROPFILES` messages that are received by a control referenced by the _[ManagedControl](./TPJCtrlDropFiles-ManagedControl.md)_ property. The component therefore intercepts files dragged from Windows Explorer and dropped on the managed control.

Use _TPJCtrlDropFiles_ when you want to take different actions depending on which control files are dropped on - you can use a different _TPJCtrlDropFiles_ component for each control that can receive file drops.

## Methods

_TPJCtrlDropFiles_ defines no new methods.

## Properties

| Property | Description |
|:---------|:------------|
| _[Count](./TPJCtrlDropFiles-Count.md)_ | This read-only property returns the number of files dropped on the managed control. |
| _[DropControl](./TPJCtrlDropFiles-DropControl.md)_ | This read only property references any control parented by the managed control where files are dropped. |
| _[DropPoint](./TPJCtrlDropFiles-DropPoint.md)_ | This read only property gives the mouse coordinates where the files were dropped. |
| _[Enabled](./TPJCtrlDropFiles-Enabled.md)_ | Determines whether dropped files are handled or ignored. |
| _[FileName](./TPJCtrlDropFiles-FileName.md)_ | The name of a file dropped on the managed control. |
| _[Files](./TPJCtrlDropFiles-Files.md)_ | The names of the most recent files dropped on the managed control. |
| _[Filter](./TPJCtrlDropFiles-Filter.md)_ | References a file filter component used to filter the names of dropped files. |
| _[ForegroundOnDrop](./TPJCtrlDropFiles-ForegroundOnDrop.md)_ | Causes the parent form to be brought to the front when files are dropped. |
| _[IsFolder](./TPJCtrlDropFiles-IsFolder.md)_ | Tells whether each of the dropped files is a folder or a file. |
| _[ManagedControl](./TPJCtrlDropFiles-ManagedControl.md)_ | References the managed control. |
| _Name_ | Inherited from _TComponent_. See Delphi help for details. |
| _[Options](./TPJCtrlDropFiles-Options.md)_ | Determines how the dropped files are processed and which files are stored in the _[Files](./TPJCtrlDropFiles-Files.md)_ property. |
| _[PassThrough](./TPJCtrlDropFiles-PassThrough.md)_ | Causes drop files messages to be passed through to the owning form. |
| _Tag_ | Inherited from _TComponent_. See Delphi help for details. |

## Events

| Event | Description |
|:------|:------------|
| _[OnBeforeDrop](./TPJCtrlDropFiles-OnBeforeDrop.md)_ | This event occurs just before files dropped on the managed control are processed. |
| _[OnDropFiles](./TPJCtrlDropFiles-OnDropFiles.md)_ | This event occurs when files are dropped on the managed control. |
| _[OnFileFilter](./TPJCtrlDropFiles-OnFileFilter.md)_ | This event occurs for each file and folder processed and allows for custom filtering of files. |
