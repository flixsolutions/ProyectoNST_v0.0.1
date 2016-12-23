function toggle(source) {
  checkboxes = document.getElementsByName('foo');
  for each(var checkbox in checkboxes)
    checkbox.checked = source.checked;
}