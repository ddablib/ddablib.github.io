# Visited property

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](./TPJHotLabel.md)_

**Applies to:** ~>2.2

```pascal
property Visited: Boolean;
```

## Description

This property indicates whether the label is in its "visited" state (`True`) or not (`False`). When _Visited_ is `True` the label is displayed using the font specified by the _[VisitedFont](./TPJHotLabel-VisitedFont.md)_ [~>2.2], whenever the label is not highlighted. When the property is `False` the display font reverts to that given by the _[Font](./TPJHotLabel-Font.md)_ property.

Writing the property changes the "visited" state. The default value is `False`.

The property can also be set automatically each time the component's URL is navigated to. This feature is enabled by setting the _[TrackVisits](./TPJHotLabel-TrackVisits.md)_ [~>2.2] property to `True`.

Note that, unlike in a browser, the value of _Visited_ does not persist between program executions.

† The component deems a URL to be "navigated to" if the label is clicked **and** the component was able to resolve the URL and execute it in a linked application such and a web browser. This is not a guarantee that the URL exists, only that the linked application could be started.
