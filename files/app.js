import read_File from './read-file.js';

read_File('file-data.txt')
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err.message));
