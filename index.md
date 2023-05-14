# DelphiDabbler Code Library Documentation

Welcome to the _DelphiDabbler Code Library Documentation Site_.

The library currently contains the following projects, all originally published on [DelphiDabbler.com](https://delphidabbler.com/codelib).

| **Project** | **Description** |
|:------------|:----------------|
| [About Box Component](./AboutBox/index.md) | Non-visual component that encapsulates an About Box. Set properties or link to a [Version Information Component](./Docs/VerInfo.md) to customise the about box content. |
| [Clipboard Viewer Component](./CBView/index.md) | Component that triggers an event whenever the contents of the clipboard change. |
| [Console Application Runner Classes](./ConsoleApp/index.md) | Classes to control the execution of child console application processes and to redirect input and output where required. |
| [Drop Files Components](./DropFiles/index.md) | Components that enable applications, windows and other components to support drag and drop from Windows Explorer. |
| [Environment Variables Unit](./EnvVars/index.md) | Contains a static class and supporting types for interrogating, modifying and enumerating the environment variables belonging to the current process. |
| [Extended String Property Editor](./StringPE/index.md) | Property editor that allows multi-line and long _string_ and _TCaption_ properties to be edited at design time. |
| [Fractions Unit](./Fractions/index.md) | Defines an advanced "record with methods" type that encapsulates fraction and related operations. |
| [Hot Label Component](./HotLabel/index.md) | Label component that accesses a URL when clicked. The URL is displayed in the default web browser or email client. |
| [I/O Utilities Unit](./IOUtils/index.md) | Several classes that assist with various I/O related tasks, including working with pipes and inheritable file handles. |
| [MD5 Message Digest Unit](./MD5/index.md) | Implementation of the MD5 Message Digest Algorithm as a Delphi class. This is an implementation from scratch, not a wrapper round earlier code. |
| [Message Dialog Components](./MsgDlg/index.md) | Components that wrap message dialogue boxes provided by the Delphi VCL and the Windows API. |
| [Resource File Unit](./ResFile/index.md) | Contains classes that encapsulate 32 bit binary resource files and the resources they contain. Can read and update raw resource file data. |
| [Shell Folders Unit](./ShellFolders/index.md) | Components, classes and routines to assist in working with shell folders. Includes a "Browse for Folder" dialogue box. |
| [Stream Extension Classes](./Streams/index.md) | Classes that provide a means to wrap _TStream_ objects. Also provides implementations of the _IStream_ interface. |
| [System Information Unit](./SysInfo/index.md/) | Static classes that get information about the user's computer and operating system.  |
| [Version Information Component](./VerInfo/index.md) | Component that accesses version information embedded in program files, DLLs etc. |
| [Window State Components](./WdwState/index.md) | Three components that save and restore window size, state and position using ini files, the registry or user-defined storage. |

Each library project has its own source code repository on [GitHub](https://github.com/ddablib).

Project releases are available in .zip format from [SourceForge](https://sourceforge.net/projects/ddablib/files/) and later releases are also available from the _Releases_ tab of the library project's GitHub repository.

## FAQs

Frequently asked questions for some of the Code Library projects are available and listed on the [FAQs](./faqs.md) page.

## Library News

You can get the latest news about the Code Library by following the [DelphiDabbler Blog](https://delphidabbler.blogspot.com/).

## License

All the code in the library now uses the Mozilla Public License v2.0 (MPL 2.0). Earlier versions may use the Mozilla Public License v1.1.

Note that the documentation is published under a different license: [see below](#documentation-license).

## About this documentation

### A little history

The documentation started out as a wiki on Google Code, maintained in a Subversion repository as a branch of the DelphiDabbler Code Library Project. The wiki branch was extracted from the Subversion repository and converted to Git as at commit 1d1404b. The Git repository was placed on GitHub in the `delphidabbler/ddab-lib-docs` project.

Development continued directly on the `master` branch until commit 39b9e5a when the GitFlow development model was adopted.

Development then took place on a `develop` branch. Five releases were made before the GitFlow model was abandoned at commit 0697fcb. The `develop` branch was deleted at commit 979f604 and all the release tags were deleted. The associated change-log file was also removed.

### Development model

Since commit 979f604 a new development model was adopted. Changes are now made on branches off `master` and merged back into `master` once verified.

#### Contributing

Anyone who would like to contribute to the documentation is welcome to do so. You should work on a fork of the GitHub `master` branch, create a suitably named branch for your work and open a pull request on GitHub when done.

If you're unsure of the process [this tutorial](https://opensource.com/article/19/7/create-pull-request-github) explains it well.

### Documentation license

![Creative Commons CC BY-4.0 license image](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

DelphiDabbler Code Library Documentation by [Peter Johnson](https://en.gravatar.com/delphidabbler) is licensed under a Creative [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

Based on a work at [https://github.com/ddablib/ddablib.github.io](https://github.com/ddablib/ddablib.github.io).

For full details see the `LICENSE` file.

#### Reuse & Accreditation

The Creative Commons CC BY-SA 4.0 license requires accreditation by anyone reusing this documentation.  A suitable accreditation would be:

> Based on a work by Peter Johnson ([https://en.gravatar.com/delphidabbler](https://en.gravatar.com/delphidabbler)), at [https://github.com/delphidabbler/ddab-lib-docs](https://github.com/delphidabbler/ddab-lib-docs), copyright (c) 2022 and licensed under the Creative Commons CC BY-SA license. No warranties are given.

If you make changes and distribute the changes then, in addition to the above, you must distribute the modified version under the same license, indicate you made changes and retain an indication of earlier changes.

For authoritative details of the above see the [full license](https://creativecommons.org/licenses/by-sa/4.0/legalcode).
