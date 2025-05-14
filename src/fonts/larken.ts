import localFont from 'next/font/local'

export const larken = localFont({
  src: [
    {
      path: './Larken-Serif/LarkenDEMO-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './Larken-Serif/LarkenDEMO-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Larken-Serif/LarkenDEMO-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Larken-Serif/LarkenDEMO-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './Larken-Serif/LarkenDEMO-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './Larken-Serif/LarkenDEMO-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './Larken-Serif/LarkenDEMO-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    }
    // Tambahkan lebih banyak jika kamu butuh
  ],
  variable: '--font-larken',
  display: 'swap'
})
