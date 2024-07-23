const select = new Select('#select', {
  placeholder: 'Choose option:',
  selectedId: 4,
  data: [
    { id: 1, value: 'React' },
    { id: 2, value: 'Angular' },
    { id: 3, value: 'Vue' },
    { id: 4, value: 'HTML' },
    { id: 5, value: 'Javascript' },
    { id: 6, value: 'Typescript' },
    { id: 7, value: 'Github' },
    { id: 8, value: 'Webpack' },
    { id: 9, value: 'CSS' },
  ],
  onSelect(item) {
    console.log('Selected item', item);
  },
});

window.s = select;
