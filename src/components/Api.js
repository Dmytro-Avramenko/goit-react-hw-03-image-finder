export default async function getImages(inputName, page = 1) {
    const url = 'https://pixabay.com/api/';
    const API_KEY = '33715416-9eaa4d7b16ffe0e02c82fe7bc';

    return await fetch(`${url}?q=${inputName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json());
}

