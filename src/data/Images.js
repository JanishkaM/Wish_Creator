import ImageFileNames from '../assets/images/ImageFileNames.js';

// Initialize an empty array to store the Images
const Images = [];

// Iterate over the ImageFileNames array
ImageFileNames.forEach((filename) => {
    // Construct the URL for each image
    const imageUrl = `${filename}.png`;

    // Push an object with the required properties to the Images array
    Images.push({
        url: imageUrl,
        type: 'image',
        alt: 'Wish Creator Background Image',
    });
});

export default Images;
