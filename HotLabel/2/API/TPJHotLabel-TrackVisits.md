# TrackVisits property

**Project:** [Hot Label Component](../API.md).

**Unit:** _PJHotLabel_.

**Class:** _[TPJHotLabel](./TPJHotLabel.md)_

**Applies to:** ~>2.2

```pascal
property TrackVisits: Boolean;
```

## Description

The component has the ability to detect when its URL is visited†, and to automatically set its _[Visited](./TPJHotLabel-Visited.md)_ [~>2.2] property to `True` when that happens. This then changes the font used when the label is not highlighted to that specified by the _[VisitedFont](./TPJHotLabel-VisitedFont.md)_ [~>2.2] property.

_TrackVists_ determines whether this feature is enabled (`True`) or not (`False`). The default value is `False`.

† The component deems its URL to be visited if the label is clicked **and** the navigation to the URL succeeded. If the navigation fails the _[Visited](./TPJHotLabel-Visited.md)_ [~>2.2] property is not set to `True`. When navigation to succeeds it does not mean the URL exists, it simply means that the component was able to resolve the URL and execute it in a linked application such and a web browser.
