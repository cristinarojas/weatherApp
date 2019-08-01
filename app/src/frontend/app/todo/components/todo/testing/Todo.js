export const add = (x, y) => {
  return x + y;
}

export const total = (shipping, subtotal)  => {
  return '$' + add(shipping, subtotal);
}
