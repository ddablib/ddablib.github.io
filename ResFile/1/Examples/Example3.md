# Example #3: Finding a Resource

To find a Resource we use either the _[FindEntry](../API/TPJResourceFile-FindEntry.md)_ or _[FindEntryIndex](../API/TPJResourceFile-FindEntryIndex.md)_ methods of _[TPJResourceFile](../API/TPJResourceFile.md)_. The difference is that _[FindEntry](../API/TPJResourceFile-FindEntry.md)_ returns the _[TPJResourceEntry](../API/TPJResourceEntry.md)_ object for the entry (or `nil` if not found) while _[FindEntryIndex](../API/TPJResourceFile-FindEntryIndex.md)_ returns the index of the entry in the _[Entries](../API/TPJResourceFile-Entries.md)_ property.

Let us assume a Resource file is loaded into the _[TPJResourceFile](../API/TPJResourceFile.md)_ variable _ResFile_. We want to find a `RT_HTML` Resource named `INDEX_HTML`. The following code checks if such a Resource exists and displays its data size in a message box, or a message saying the Resource doesn't exist. This first version of the code uses _[FindEntry](../API/TPJResourceFile-FindEntry.md)_:

```pascal
// Version using FindEntry
var
  ResFile: TPJResourceFile;
  Entry: TPJResourceEntry;
begin
  ...
  // Assume ResFile contains a loaded Resource file
  ...
  Entry := ResFile.FindEntry(RT_HTML, 'INDEX_HTML', $0809);
  if Assigned(Entry) then
    ShowMessageFmt(
      'Data size for INDEX_HTML is %d',
      [Entry.DataSize]
    )
  else
    ShowMessage('Can''t find Resource');
  ...
  // Don't forget to free ResFile at some stage.
end;
```

The second version of the code shows how the same Result is obtained with _[FindEntryIndex](../API/TPJResourceFile-FindEntryIndex.md)_:

```pascal
// Version using FindEntryIdex
var
  ResFile: TPJResourceFile;
  Entry: TPJResourceEntry;
  Idx: Integer;
begin
  ...
  Idx := fResFile.FindEntryIndex(RT_HTML, 'INDEX_HTML');
  if Idx >= 0 then
  begin
    Entry := fResFile.Entries[Idx];
    ShowMessageFmt(
      'Data size for INDEX_HTML is %d', [Entry.DataSize]
    );
  end
  else
    ShowMessage('Can''t find Resource');
  ...
end;
```

Note that we have used the "short form" of the _[FindEntry](../API/TPJResourceFile-FindEntry.md)_ and _[FindEntryIndex](../API/TPJResourceFile-FindEntryIndex.md)_ methods above: they find the first Resource with the given type and name, irRespective of language id. The long versions of the methods find a specific Resource type, name and language. For example the following code finds a `RT_HTML` Resource named `INDEX_HTML` with a language id of `$0809`:

```pascal
// "Full" version of FindEntry
var
  ResFile: TPJResourceFile;
  Entry: TPJResourceEntry;
begin
  ...
  Entry := ResFile.FindEntryIndex(RT_HTML, 'HTMLRes_HTML', $0809);
  if Assigned(Entry) then
    ... etc ...
end;
```

**Links:**

  * [Next Example](./Example4.md)
  * [Previous Example](./Example2.md)
  * Back to [List of Examples](../Examples.md)