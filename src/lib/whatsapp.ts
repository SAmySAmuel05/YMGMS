/**
 * Número de WhatsApp (solo dígitos, con código de país).
 * Ejemplo México: 5215512345678 (52 + 10 dígitos sin 0 inicial).
 * Cámbialo por tu número real.
 */
const WHATSAPP_PHONE = "525582573307";

/**
 * Arma la URL de WhatsApp con un mensaje prellenado.
 */
export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

/**
 * Mensaje para consultar disponibilidad de un producto.
 */
export function messageConsultarProducto(productName: string, price: string, size?: string): string {
  const sizeLine = size ? `\nTalla: ${size}` : "";
  return `Hola, me interesa consultar disponibilidad de:\n*${productName}*\nPrecio: ${price}${sizeLine}\n\n¿Sigue disponible?`;
}

/**
 * Mensaje para enviar el pedido del carrito.
 */
export function messagePedidoCarrito(items: { name: string; price: string; quantity: number; size?: string }[]): string {
  const lines = items.map(
    (i) => `• ${i.name}${i.size ? ` (Talla ${i.size})` : ""} - ${i.price} x${i.quantity}`
  );
  const totalLine = items.reduce((sum, i) => {
    const num = parseInt(i.price.replace(/[^0-9]/g, ""), 10) || 0;
    return sum + num * i.quantity;
  }, 0);
  return `Hola, me gustaría confirmar mi pedido:\n\n${lines.join("\n")}\n\nTotal aproximado: $${totalLine} MXN\n\n¿Podemos concretar?`;
}
