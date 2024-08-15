const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export const arrayRange = (start = 1, stop, step = 1) =>
    
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

export const getReadableDataString = (rawDate) => {
    let date = new Date(rawDate);

    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
}