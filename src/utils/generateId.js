export function generateId() {
  return (
    Math.random() * 100000 + Math.random() * 100000 * Math.random() * 111 + ""
  );
}
