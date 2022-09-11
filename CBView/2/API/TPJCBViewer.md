# TPJCBViewer class

**Project:** [Clipboard Viewer Component](../API.md)

**Unit:** _PJCBView_

**Applies to:** ~>2.0

_TPJCBViewer_ is a simple non-visual Delphi component that descends directly from _TComponent_.

The component notifies the user of changes to the Windows clipboard by triggering an [_OnClipboardChanged_](./TPJCBViewer-OnClipboardChanged.md) event.

Properties are provided to modify the behaviour of the component. They are described below.

_TPJCBViewer_ extends _TComponent_ as described below. For details of the methods, properties and events inherited from _TComponent_, see the Delphi help documentation.

## Methods

_TPJCBViewer_ defines no new methods.

## Properties

Two new public properties are defined.

| Property | Description |
|----------|-------------|
| [_Enabled_](./TPJCBViewer-Enabled.md) | Enables and disables the component. |
| [_TriggerOnCreation_](./TPJCBViewer-TriggerOnCreation.md) | Causes a clipboard change event to be triggered when the component is created. |

## Events

_TPJCBViewer_ defines one public event.

| Event | Description |
|-------|-------------|
| [_OnClipboardChanged_](./TPJCBViewer-OnClipboardChanged.md) | Event triggered when the clipboard contents change. |
