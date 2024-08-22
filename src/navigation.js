import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('#'),
    },
    {
      text: 'Services',
      href: getPermalink('#'),
    },
    {
      text: 'Contact',
      href: getPermalink('#'),
    },
  ],
    actions: [{ text: 'Call Now: 0450 759 632', href: 'tel:0450759632', target: '_self' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Northern Suburbs',
      links: [
        { text: 'Adelaide Hills' },
        { text: 'Blair Athol' },
        { text: 'Enfield' },
        { text: 'Gawler' },
        { text: 'Gepps Cross' },
      ],
    },
    {
      title: 'Western Suburbs',
      links: [
        { text: 'Henley Beach' },
        { text: 'Hindmarsh' },
        { text: 'Marion' },
        { text: 'Mawson Lakes' },
        { text: 'Modbury' },
      ],
    },
    {
      title: 'Other Areas',
      links: [
        { text: 'Murray Bridge' },
        { text: 'Pooraka' },
        { text: 'Torrensville' },
        { text: 'West Lakes' },
        { text: 'Victor Harbour' },
      ],
    },


  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://velvetsquid.com/"> Velvet Squid</a> · All rights reserved.
  `,
};
