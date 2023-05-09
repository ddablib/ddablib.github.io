# TPJBrowseDialog

**Project:** [Shell Folders Unit](../API.md).

**Unit:** _PJShellFolders_.

**Applies to:** ~>2.0

This component permits the Windows _Browse for Folders_ dialog box to be displayed. _TPJBrowseDialog_ also enables the dialog box to be customised. The dialog box is displayed at run time when the _[Execute](./TPJBrowseDialog-Execute.md)_ method is called. The path and display name of the folder selected when the user OKs are made available via the component's properties.

## Methods

| Method | Description |
|:-------|:------------|
| _[Execute](./TPJBrowseDialog-Execute.md)_ | Displays the _Browse for Folders_ dialog. |

## Properties

| Property | Description |
|:---------|:------------|
| _[DisplayName](./TPJBrowseDialog-DisplayName.md)_ | Displays the name of the selected folder. |
| _[FolderName](./TPJBrowseDialog-FolderName.md)_ | Contains the path to the folder selected in the dialog box. |
| _[Handle](./TPJBrowseDialog-Handle.md)_ | The window handle of the dialog box. |
| _[Headline](./TPJBrowseDialog-Headline.md)_ | Displays the given text in the Browse dialog box. |
| _[HelpContext](./TPJBrowseDialog-HelpContext.md)_ | Numeric ID for the components's context-sensitive help topic. |
| _[HelpKeyword](./TPJBrowseDialog-HelpKeyword.md) [~>2.3]_ | Keyword for the component's context-sensitive help topic. |
| _[HelpType](./TPJBrowseDialog-HelpType.md) [~>2.3]_ | Indicates whether the component's context sensitive help topic is identified by context ID or by keyword. |
| _[Options](./TPJBrowseDialog-Options.md)_ | Determines the appearance and behavior of the _Browse for Folders_ dialog box. |
| _[RootFolderID](./TPJBrowseDialog-RootFolderID.md)_ | Determines the root folder displayed in the dialog box. |
| _[Title](./TPJBrowseDialog-Title.md)_ | Specifies the text displayed in the dialog's title bar. |

## Events

| Event | Description |
|:------|:------------|
| _[OnClose](./TPJBrowseDialog-OnClose.md)_ | Triggered when the dialog closes. |
| _[OnHelp](./TPJBrowseDialog-OnHelp.md) [~>2.3]_ | Triggered whenever help is requested from the browse for folders dialog box and is available. |
| _[OnInitialise](./TPJBrowseDialog-OnInitialise.md)_ | Triggered when the dialog initialises. |
| _[OnSelChange](./TPJBrowseDialog-OnSelChange.md)_ | Triggered whenever the selection in the dialog box changes. |
| _[OnSelChangeEx](./TPJBrowseDialog-OnSelChangeEx.md)_ | Triggered whenever the selection in the dialog box changes. |
| _[OnValidationFailed](./TPJBrowseDialog-OnValidationFailed.md) [~>2.3]_ | Triggered whenever an invalid folder name is entered in the browse dialog's edit control and an attempt is made to close the dialog box. |
