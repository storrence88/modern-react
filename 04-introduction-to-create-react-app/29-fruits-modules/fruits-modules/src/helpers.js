function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  items.splice(items.indexOf(item), 1);
  return items;
}

export { choice, remove };
