// Central cart helpers — localStorage based

const CART_KEY = "cart_v1";

export function readCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("cartUpdated"));
  } catch (e) {
    console.error("Failed to write cart:", e);
  }
}

/**
 * product must be:
 * { id, name, price, img, desc }
 */
export function addToCart(product, qtyToAdd = 1) {
  if (!product || product.id == null) return;

  const cart = readCart();
  const existing = cart.find(
    (p) => String(p.id) === String(product.id)
  );

  if (existing) {
    existing.qty = Math.max(1, existing.qty + qtyToAdd);
  } else {
    cart.push({ ...product, qty: qtyToAdd });
  }

  writeCart(cart);
}

export function removeFromCart(id) {
  const cart = readCart().filter(
    (p) => String(p.id) !== String(id)
  );
  writeCart(cart);
}

export function updateQty(id, qty) {
  const cart = readCart().map((p) =>
    String(p.id) === String(id)
      ? { ...p, qty: Math.max(1, qty) }
      : p
  );
  writeCart(cart);
}
