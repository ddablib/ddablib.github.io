# [About Box Component](../index.md) Programmers' Guide

**Applies to:** ~>3.6

## Introduction

This section of the _About Box Component_ documentation describes the API exposed by the unit to programmers.

## Contents

### Units

| Unit | Descriptions |
|:-----|:-------------|
| _PJAbout_ | The only unit in this project. Contains all the types and routines noted below. | 

### Classes

| Class | Descriptions |
|:------|:-------------|
| [_TPJAboutBoxDlg_](./API/TPJAboutBoxDlg.md) | The About Box component. |
| _TPJAboutBoxForm_ | ⛔ The form class that implements the actual about box. This class **must not** be accessed directly and is not documented here. |

### Enumerated Types 

| Type | Descriptions |
|:-----|:-------------|
| _TPJAboutBtnPlacing_ | Determines horizontal placement of OK button in about dialog. This is the type of the [_ButtonPlacing_](./API/TPJAboutBoxDlg-ButtonPlacing.md) property. |
| _TPJAboutBtnKinds_ | Determines caption of about dialog's OK button. This is the type of the [_ButtonKind_](./API/TPJAboutBoxDlg-ButtonKind.md) property. |
| _TPJAboutBtnGlyphs_ | Determines what, if any, glyph is displayed on about dialog's OK button. This is the type of the [_ButtonGlyph_](./API/TPJAboutBoxDlg-ButtonGlyph.md) property. |
| _TPJAboutPosition_ | Determines whether about dialog's position (centred or offset) is relative to screen, desktop or owning form. This is the type of the [_Position_](./API/TPJAboutBoxDlg-Position.md) property. |

### Other

| Item | Description |
|:-----|:------------|
| _Register_ | ⛔ Component registration routine, called by the Delphi IDE to register the component. **Do not call**. |
 
## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
