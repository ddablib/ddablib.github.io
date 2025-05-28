# _ForEach\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TCallback<T> = reference to procedure (const AElem: T);
  TCallbackEx<T> = reference to procedure (const AElem: T;
    const AIndex: Integer; const AArray: array of T);

class procedure ForEach<T>(const A: array of T;
  const ACallback: TCallback<T>);
  overload; static;

class procedure ForEach<T>(const A: array of T;
  const ACallback: TCallbackEx<T>);
  overload; static;
```

## Description

Enumerates all the elements of an array, passing each in turn to a callback procedure.

***Parameters:***

* _A_ - Array to be enumerated.

* _ACallback_ - Procedure to be called for each element of _A_.

    ***Parameter(s):***

    * _AElem_ - The current array element to be tested.
    * _AIndex_ - The index of _AElem_ in _A_. (_TCallbackEx\<T\>_ only.) 
    * _AArray_ - Reference to the array containing _AElem_. (_TCallbackEx\<T\>_ only.)

## Examples

### Example #1

The following code writes out formatted _TPoint_ values to the console. The code uses the _TCallback\<T\>_ overload of _ForEach\<T\>_.

```pascal
procedure ForEach_Eg1;
const
  P1: TPoint = (X: 1; Y: 3);
  P2: TPoint = (X: -1; Y: 5);
  P3: TPoint = (X: 12; Y: -12);
  P4: TPoint = (X: -8; Y: -9);
  P5: TPoint = (X: 12; Y: 5);
var
  A: TArray<TPoint>;
begin
  A := TArray<TPoint>.Create(P1, P2, P3, P4, P5);
  TArrayUtils.ForEach<TPoint>(
    A,
    procedure (const P: TPoint)
    begin
      WriteLn(Format('(%d,%d)', [P.X, P.Y]));
    end
  );
end;
```

Running the above procedure outputs the following:

```
(1,3)
(-1,5)
(12,-12)
(-8,-9)
(12,5)
```

### Example #2

The second example uses the _TCallbackEx\<T\>_ overload of _ForEach\<T\>_ to output the distance between the first 10 primes. We define the "distance" between two integers as the absolute value of their difference.

```pascal
procedure ForEach_Eg2;
var
  A: TArray<Cardinal>;
begin
  A := TArray<Cardinal>.Create(2, 3, 5, 7, 11, 13, 17, 19, 23, 29);
  TArrayUtils.ForEach<Cardinal>(
    A,
    procedure (const AElem: Cardinal; const AIndex: Integer;
      const A: array of Cardinal)
    var
      Distance: Cardinal;
    begin
      // Find distance of AElem to its predecessor in the array
      if AIndex = 0 then
        // no predecessor for 1st element
        Exit;
      Distance := Abs(AElem - A[Pred(AIndex)]);
      if AIndex > 1 then
        Write(', ');
      Write(Distance);
    end
  );
  WriteLn;
end;
```

This example should produce the following output when run:

```
1, 2, 2, 4, 2, 4, 2, 4, 6
```
