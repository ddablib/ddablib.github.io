# [Message Dialogue Components](../index.md) Programmer's Guide

**Applies to:** ~>3.0

## Introduction

This section of the _Message Dialogue Components_ documentation describes the API exposed by the components to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJMessageDialog_ | The only unit in this project. Contains both components and their registration code. |

### Classes

| Class | Description |
|:------|:------------|
| _[TPJWinMsgDlg](./API/TPJWinMsgDlg.md)_ | This light weight component wraps the Windows _MessageBoxIndirect_ API call and displays a message box based on that provided by Windows. |
| _[TPJVCLMsgDlg](./API/TPJVCLMsgDlg.md)_  | This component creates a dialogue box that derives from a VCL _TForm_. It provides more flexibility than  _TPJWinMsgDlg_. |

### Other

| Item | Description |
|:-----|:------------|
| _Register_ | **Do not use**. Routine called by the IDE at design time to register the components. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
