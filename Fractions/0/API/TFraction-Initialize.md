# Initialize operator overload

**Project:** [Fractions](../API.md)

**Unit:** _DelphiDabbler.Lib.Fractions_

**Record:** [_TFraction_](./TFraction.md)

**Applies to:** ~>0.2

```pascal
class operator Initialize(out Dest: TFraction);
```

## Description

> **This operator overload is conditionally compiled for Delphi 10.4 and later only.**

_Initialize_ is called automatically whenever a new _TFraction_ record is created. It sets the values of the _[Numerator](./TFraction-Numerator.md)_ and _[Denominator](./TFraction-Denominator.md)_ properties to `0` and `1` respectively, to correctly represent a zero fraction.

⚠️ When compiled with Delphi version prior to 10.4 the initial values of _[Numerator](./TFraction-Numerator.md)_ and _[Denominator](./TFraction-Denominator.md)_ properties are undefined.

⛔ _Initialize_ should never be called explicitly.

## See Also

* [_Create_](./TFraction-Create.md) constructor
