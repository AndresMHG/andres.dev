export const SITE = {
  name: 'Andres Hernandez',
  email: 'andr3sm1guel@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/andres-miguel-hernandez-garcia-154169377/',
  whatsappNumber: '5541988648321',
  whatsappMessage:
    'Olá Andres! Vi seu portfólio e gostaria de conversar sobre um projeto Vue/Nuxt 🚀',
} as const

export const whatsappUrl = (text: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`
