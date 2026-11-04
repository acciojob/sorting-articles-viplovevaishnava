const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

bands.sort((a, b) => {
    const titleA = a.replace(/^(a |an |the )/i, '');
    const titleB = b.replace(/^(a |an |the )/i, '');

    return titleA.localeCompare(titleB);
});

const ul = document.createElement('ul');
ul.id = 'band';
document.body.appendChild(ul);
bands.forEach((band) => {
    const li = document.createElement('li')
    li.textContent = band;
    ul.appendChild(li);
})
