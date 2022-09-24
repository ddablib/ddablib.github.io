# [Environment Variables Unit](../index.md) Programmers Guide

**Applies to:** ~>3.0

## Introduction

This section of the _Environment Variables Unit_ documentation describes the API exposed by the unit to programmers.

## Contents

The project is made up of two units:

| Unit | Description |
|------|-------------|
| _PJEnvVars_ | The all the run time code. This includes a static class for manipulating environment vaiables, an environment variable enumerator, various supporting types and a ***deprecated*** component and related routines. See [Contents](#contents) below for details. |
| _PJEnvVarsDsgn_ | ***Deprecated*** Registers the [_TPJEnvVars_](./API/TPJEnvVars.md) component  with the Delphi IDE. No further documentation for this unit is available. |

This guide is divided into the following sections:

* [_TPJEnvironmentVars_](./API/TPJEnvironmentVars.md) -- static class for reading and manipulating environment variables.
* [_TPJEnvVars_](./API/TPJEnvVars.md) -- ***deprecated*** component for eading and manipulating environment variables.
* [_TPJEnvVarsEnumerator_](./API/TPJEnvVarsEnumerator.md) -- enumerates all the environment variable names in the current process.
* [Other Types](./API/Types.md) -- other types used by [_TPJEnvironmentVars_](./API/TPJEnvironmentVars.md) and [_TPJEnvVars_](./API/TPJEnvVars.md).
* [Helper Routines](./API/Routines.md) -- ***deprecated*** various environment variable manipulation routines.

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
