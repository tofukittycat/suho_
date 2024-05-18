/** 원본 */

export async function getStickers(id: string) {
  // const res = await fetch(`http://15.165.250.72/stickers/${encodeURIComponent(id)}`, {
  const res = await fetch(`http://15.165.250.72/tree/${id}/stickers`, {
    next: {
      tags: ["stickers"],
    },
    credentials: "include",
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
