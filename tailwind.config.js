module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Barlow', sans-serif",
      body: "'Barlow', sans-serif",
      serif: "'Fraunces', serif",
      heading: "'Fraunces', sans-serif",
    },
    extend: {
      backgroundColor: {
        'brand-primary-red': 'hsl(7, 99%, 70%)',
        'brand-primary-yellow': 'hsl(51, 100%, 49%)',
        'brand-primary-blue': 'hsl(198, 62%, 26%)',
        'brand-primary-cyan-1': 'hsl(167, 40%, 24%)',
        'brand-primary-cyan-2': 'hsl(168, 34%, 41%)',
        'brand-neutral-blue-1': 'hsl(212, 27%, 19%)',
        'brand-neutral-blue-2': 'hsl(213, 9%, 39%)',
        'brand-neutral-blue-3': 'hsl(232, 10%, 55%)',
        'brand-neutral-blue-4': 'hsl(210, 4%, 67%)',
        'brand-neutral-white': 'hsl(210, 4%, 67%)',
      },
      textColor: {
        'brand-primary-red': 'hsl(7, 99%, 70%)',
        'brand-primary-yellow': 'hsl(51, 100%, 49%)',
        'brand-primary-blue': 'hsl(198, 62%, 26%)',
        'brand-primary-cyan-1': 'hsl(167, 40%, 24%)',
        'brand-primary-cyan-2': 'hsl(168, 34%, 41%)',
        'brand-neutral-blue-1': 'hsl(212, 27%, 19%)',
        'brand-neutral-blue-2': 'hsl(213, 9%, 39%)',
        'brand-neutral-blue-3': 'hsl(232, 10%, 55%)',
        'brand-neutral-blue-4': 'hsl(210, 4%, 67%)',
        'brand-neutral-white': 'hsl(210, 4%, 67%)',
      },
      backgroundImage: (theme) => ({
        'header-desktop': "url('/images/desktop/image-header.jpg')",
        'header-mobile': "url('/images/mobile/image-header.jpg')",
        'services-transform-desktop': "url('/images/desktop/image-transform.jpg')",
        'services-transform-mobile': "url('/images/mobile/image-transform.jpg')",
        'services-stand-out-desktop': "url('/images/desktop/image-stand-out.jpg')",
        'services-stand-out-mobile': "url('/images/mobile/image-stand-out.jpg')",
        'services-graphic-design-desktop': "url('/images/desktop/image-graphic-design.jpg')",
        'services-graphic-design-mobile': "url('/images/mobile/image-graphic-design.jpg')",
        'services-photography-desktop': "url('/images/desktop/image-photography.jpg')",
        'services-photography-mobile': "url('/images/mobile/image-photography.jpg')",
        'gallery-cone-desktop': "url('/images/desktop/image-gallery-cone.jpg')",
        'gallery-cone-mobile': "url('/images/mobile/image-gallery-cone.jpg')",
        'gallery-milkbottles-desktop': "url('/images/desktop/image-gallery-milkbottles.jpg')",
        'gallery-milkbottles-mobile': "url('/images/mobile/image-gallery-milkbottles.jpg')",
        'gallery-orange-desktop': "url('/images/desktop/image-gallery-orange.jpg')",
        'gallery-orange-mobile': "url('/images/mobile/image-gallery-orange.jpg')",
        'gallery-sugar-cubes-desktop': "url('/images/desktop/image-gallery-sugarcubes.jpg')",
        'gallery-sugar-cubes-mobile': "url('/images/mobile/image-gallery-sugar-cubes.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
