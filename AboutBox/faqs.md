# About Box Component FAQ

This page has some frequently asked questions about the DelphiDabbler [About Box Component](https://delphidabbler.com/software/aboutbox).

> If you don't find an answer then read the component's [documentation](../AboutBox/index.md). If you still have no luck then you can read how to [ask a question](../faqs.md#cant-find-an-answer).

## Contents

1. [How does the component load the information it displays?](#faq-1)
2. [Any plans to make the component compatible with Unicode Delphis?](#faq-2)


## FAQ 1

***How does the component load the information it displays?***

There are two ways of providing the information to be displayed in the about box.

The simplest is to simply set the `ProgramName`, `Version`, `Copyright` and `Notes` properties to the required values. This can be done at design time. For this to take effect ensure that nothing is assigned to the `VersionInfo` property.

The alternative is to enable the component to get the required information from the program's version information resources, if they exist.

First, drop a `TPJVersionInfo` component on the same form as the About Box Component. Leaving all the `TPJVersionInfo` component's properties at their default values ensures that it reads your program's version information resources.

Now set the about box component's `VersionInfo` property to reference the `TPJVersionInfo` component. That's all you need to do. The about box will now automatically get the text to display from the program's version information.

## FAQ 2

***Any plans to make the component compatible with Unicode Delphis?***

The component has been Unicode compatible since v3.5. If you're using an older version you need to update it. You will loose support for Delphi 1 though!
