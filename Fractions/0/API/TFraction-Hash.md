# Hash method

**Project:** [Fractions](../API.md)

**Unit:** _DelphiDabbler.Lib.Fractions_

**Record:** [_TFraction_](./TFraction.md)

**Applies to:** ~>0.2

```pascal
function Hash: Integer;
```

## Description

Computes and returns a hash value for the fraction as an _Integer_.

If two fractions that simplify to the same fraction have the same hash.

### Example

```pascal
var
  F, G: TFraction;
begin
  F := TFraction.Create(1, 2);
  G := TFraction.Create(3, 6);
  Assert(F.Hash = G.Hash);
end;
```
