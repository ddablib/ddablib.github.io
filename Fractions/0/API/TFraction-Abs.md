# Abs class method

**Project:** [Fractions](../API.md)

**Unit:** _DelphiDabbler.Lib.Fractions_

**Record:** [_TFraction_](./TFraction.md)

**Applies to:** 0.1.x

```pascal
class function Abs(const F: TFraction): TFraction; static;
```

**Applies to:** ~>0.2

```pascal
class function Abs(const F: TFraction): TFraction; overload; static;
function Abs: TFraction; overload;
```

## Description

Returns the absolute value of a fraction. The returned fraction is not simplified.

The class method operates on the fraction passed as parameter _F_.

[~>0.2] The instance method operates upon the fraction instance on which it is called.

### Examples

Using the class method:

```pascal
var
  F, G: TFraction;
begin
  F := TFraction.Create(3, 4);
  G := TFraction.Abs(F);
  Assert(G = +F);
  F := TFraction.Create(-7, 8);
  G := TFraction.Abs(F);
  Assert(G = -F);
end;
```

[~>0.2] Using the instance method:

```pascal
var
  F, G: TFraction;
begin
  F := TFraction.Create(3, 4);
  G := F.Abs;
  Assert(G = +F);
  F := TFraction.Create(-7, 8);
  G := F.Abs;
  Assert(G = -F);
end;
```

## See Also

* [_Sign_](./TFraction-Sign.md) method
* [_Positive_](./TFraction-Positive.md) operator overload
* [_Negative_](./TFraction-Negative.md) operator overload
