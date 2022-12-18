function convertColor(color) {
  if (color.startsWith("#")) {
    // convert hex to RGB
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  } else if (color.startsWith("rgb")) {
    // converts rgb to hex
    const [r, g, b] = color
      .substring(4, color.length - 1)
      .split(",")
      .map((x) => parseInt(x));
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  } else {
    return "invalid color format";
  }
}
convertColor("rgb(55, 199, 189");
