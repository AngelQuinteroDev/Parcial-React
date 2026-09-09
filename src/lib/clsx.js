/**
 * Mini utilidad para combinar clases de CSS.
 * Filtra valores falsy y une el resto con espacios.
 *
 * clsx('a', false && 'b', 'c') -> 'a c'
 */
export function clsx(...args) {
  return args.filter(Boolean).join(' ')
}

export default clsx