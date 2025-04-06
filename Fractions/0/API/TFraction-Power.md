# Power class method

**Project:** [Fractions](../API.md)

**Unit:** _DelphiDabbler.Lib.Fractions_

**Record:** [_TFraction_](./TFraction.md)

**Applies to:** 0.1.x

```pascal
class function Power(const F: TFraction; Exponent: ShortInt): TFraction; static;
```
**Applies to:** ~>0.2

```pascal
class function Power(const F: TFraction; Exponent: ShortInt): TFraction; 
  overload; static;
function Power(const Exponent: ShortInt): TFraction; overload;
```

## Description

Return a fraction raised to an integer power specified by the _Exponent_ parameter. The resulting fraction is simplified.

_Exponent_ can be positive, zero or negative except unless the fraction is zero when _Exponent_ must be non-negative. 

When _Exponent_ is negative the reciprocal of _F_ is raised to the power of the absolute value of _Exponent_. This is because, for any number `n`, `n^-x = 1/(N^x)`.

The class method takes the fraction to be operated on, _F_, as its first parameter.

[~>0.2] The instance method operates on the fraction instance upon which it is called.

### Examples 

#### Class method examples

Here's a simple function that squares the given fraction.

```pascal
function Square(const F: TFraction): TFraction;
begin
  Result := TFraction.Power(F, 2);
end;
```

[~>0.2] Here is some code that write out all the integer powers of 1/2 from -32 to +32:

```pascal
var
  F, G: TFraction;
  N: ShortInt;
begin
  F := TFraction.Create(1, 2);  // 1/2
  for N := -32 to 32 do
  begin
    G := F.Power(N);
    WriteLn(
      Format(
        '1/2^%d = %d/%d', [N, G.Numerator, G.Denominator]
      )
    );
  end;
end;
```

## See Also

* [_Multiply_](./TFraction-Multiply.md) operator overload
* [_Reciprocal_](./TFraction-Reciprocal.md) method
