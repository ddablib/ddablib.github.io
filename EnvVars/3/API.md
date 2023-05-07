# [Environment Variables Unit](../index.md) Programmers Guide

**Applies to:** ~>3.0

## Introduction

This section of the _Environment Variables Unit_ documentation describes the API exposed by the unit to programmers.

## Contents

### Units

| Unit | Description |
|:-----|:------------|
| _PJEnvVars_ | All the run time code. This includes a static class for manipulating environment variables, an environment variable enumerator, various supporting types and a ***deprecated*** component and related routines. See below for details. |
| _PJEnvVarsDsgn_ | ⚠️ ***Deprecated.*** Registers the [_TPJEnvVars_](./API/TPJEnvVars.md) component  with the Delphi IDE. No further documentation for this unit is available. |

### Classes

| Class | Description |
|:------|:------------|
| [_TPJEnvironmentVars_](./API/TPJEnvironmentVars.md) | Static class for reading and manipulating environment variables. |
| [_TPJEnvVars_](./API/TPJEnvVars.md) | ⚠️ ***Deprecated.*** Component for eading and manipulating environment variables. |
| [_TPJEnvVarsEnumerator_](./API/TPJEnvVarsEnumerator.md) | Class that enumerates all the environment variable names in the current process. |

### Other

| Item | Description |
|:-----|:------------|
| [Other Types](./API/Types.md) | Other types used by [_TPJEnvironmentVars_](./API/TPJEnvironmentVars.md) and [_TPJEnvVars_](./API/TPJEnvVars.md). |
| [Helper Routines](./API/Routines.md) | ⚠️ ***Deprecated.*** Various environment variable manipulation routines. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
