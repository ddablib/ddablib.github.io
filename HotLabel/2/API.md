# [Hot Label Component](../index.md) Programmer's Guide

**Applies to:** ~>2.0

## Introduction

This section of the _Hot Label Component_ documentation describes the API exposed by the unit to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJHotLabel_ | The only unit in this project. Contains the component and component registration code. |

### Classes

| Type | Description |
|:-----|:------------|
| _[TPJHotLabel](./API/TPJHotLabel.md)_ | The Hot Label Component itself. |
| _[EPJURLError](./API/EPJURLError.md)_  | A custom exception that is raised by _[TPJHotLabel](./API/TPJHotLabel.md)_ when URL related errors are encountered. |

### Other

| Item | Description |
|:-----|:------------|
| _TPJHLHintStyle_ | An enumeration of hint styles used by the _[HintStyle](./API/TPJHotLabel-HintStyle.md)_ property. See the property's documentation for details. |
| _TPJHLCustomHintEvent_ | The type of event triggered by the _[OnCustomHint](./API/TPJHotLabel-OnCustomHint.md)_ event. See the event's documentation for details. |
| _Register_ | **Do not use**. Routine called by the IDE at design time to register the component. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
* [Examples](./Examples.md)
