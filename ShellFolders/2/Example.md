# [Shell Folders Unit](../index.md) Example

**Applies to:** ~>2.0

This example illustrates the use of the _[TPJSpecialFolderEnum](./API/TPJSpecialFolderEnum.md)_ class and some of the [special folder support functions](./API/Routines.md).

Drop a _TListBox_ and a _TLabel_ component on a form. When the program starts and the form is created, the list box is filled with the names of the special folder identifier constants. Double clicking an item in the list box displays the constant's name and value (in hex) in the label.

```pascal
procedure TForm1.FormCreate(Sender: TObject);
var
  Enum: TPJSpecialFolderEnum;
begin
  Enum := TPJSpecialFolderEnum.Create;
  try
    ListBox1.Clear;
    Enum.Init;
    while not Enum.AtEnd do
      ListBox1.Items.Add(SpecialFolderIdToStr(Enum.Next));
  finally
    Enum.Free;
  end;
end;

procedure TForm1.ListBox1DblClick(Sender: TObject);
var
  Index: Integer;
begin
  Index := ListBox1.ItemIndex;
  if Index <> -1 then
    Label1.Caption := Format('%s = $%4.4x',
      [ListBox1.Items[Index],
      StrToSpecialFolderID(ListBox1.Items[Index])]);
end;
```

## Links

* [Programmer's Guide](./API.md)
* [Overview](./Overview.md)
