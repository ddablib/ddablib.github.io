# TPJFormDropFiles

**Project:** [Drop Files Components](../API.md).

**Unit:** _PJDropFiles_.

**Applies to:** ~>5.0

This non-visual component catches all `WM_DROPFILES` messages that are received by the form on which it is placed. The component therefore intercepts files dragged from Windows Explorer and dropped anywhere on the form, including the non-client areas. Use _TPJFormDropFiles_ whenever you just need to catch files anywhere on the main window without bothering about which particular control the files are dropped on.

## Methods

_TPJFormDropFiles_ defines no new methods.

## Properties

Only those properties added or modified by _TPJFormDropFiles_ are listed here. All other inherited properties are omitted.

| Property | Description |
|:---------|:------------|
| _[Count](./TPJFormDropFiles-Count.md)_ | This read-only property returns the number of files dropped on the form. |
| _[DropControl](./TPJFormDropFiles-DropControl.md)_ | This read only property references any control on the form that the files were dropped on. |
| _[DropPoint](./TPJFormDropFiles-DropPoint.md)_ | This read only property gives the mouse coordinates where the files were dropped. |
| _[Enabled](./TPJFormDropFiles-Enabled.md)_ | Determines whether dropped files are handled or ignored. |
| _[FileName](./TPJFormDropFiles-FileName.md)_ | The name of a file dropped on the form. |
| _[Files](./TPJFormDropFiles-Files.md)_ | The names of the most recent files dropped on the form. |
| _[Filter](./TPJFormDropFiles-Filter.md)_ | References a file filter component used to filter the names of dropped files. |
| _[ForegroundOnDrop](./TPJFormDropFiles-ForegroundOnDrop.md)_ | Causes the form to be brought to the front when files are dropped. |
| _[IsFolder](./TPJFormDropFiles-IsFolder.md)_ | Tells whether each of the dropped files is a folder or a file. |
| _[Options](./TPJFormDropFiles-Options.md)_ | Determines how the dropped files are processed and which files are stored in the _[Files](./TPJFormDropFiles-Files.md)_ property. |

## Events

| Event | Description |
|:------|:------------|
| _[OnBeforeDrop](./TPJFormDropFiles-OnBeforeDrop.md)_ | Event that occurs just before files dropped on the form are processed. |
| _[OnDropFiles](./TPJFormDropFiles-OnDropFiles.md)_ | Event that occurs when files are dropped on the form. |
| _[OnFileFilter](./TPJFormDropFiles-OnFileFilter.md)_ | Event that occurs for each file and folder processed and allows for custom filtering of files. |
