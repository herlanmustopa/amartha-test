export const FormatRupiah = (angka, prefix = 'Rp. ') => {
  var rupiah = ''
  var angkarev = Number(angka)
    .toString()
    .split('')
    .reverse()
    .join('')

  for (var i = 0; i < angkarev.length; i++) {
    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
  }

  return (
    prefix +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  )
}

export default FormatRupiah