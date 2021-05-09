export const itemInfoSelector = (key) => {
    switch (key) {
        case 'tt0076759':
            return require('../posters-info/tt0076759.json')
        case 'tt0080684':
            return require('../posters-info/tt0080684.json')
        case 'tt0086190':
            return require('../posters-info/tt0086190.json')
        case 'tt2488496':
            return require('../posters-info/tt2488496.json')
        case 'tt0120915':
            return require('../posters-info/tt0120915.json')
        case 'tt0121766':
            return require('../posters-info/tt0121766.json')
        case 'tt0121765':
            return require('../posters-info/tt0121765.json')
        case 'tt0796366':
            return require('../posters-info/tt0796366.json')
        case 'tt2527336':
            return require('../posters-info/tt2527336.json')
        case 'tt3748528':
            return require('../posters-info/tt3748528.json')
        

        default:
            return require('../posters-info/default.json')
    }
}

export const posterSelector = (key) => {
    switch (key) {
        case 'Poster_01.jpg':
            return require('../posters/Poster_01.jpg')
        case 'Poster_02.jpg':
            return require('../posters/Poster_02.jpg')
        case 'Poster_03.jpg':
            return require('../posters/Poster_03.jpg')
        case 'Poster_05.jpg':
            return require('../posters/Poster_05.jpg')
        case 'Poster_06.jpg':
            return require('../posters/Poster_06.jpg')
        case 'Poster_07.jpg':
            return require('../posters/Poster_07.jpg')
        case 'Poster_08.jpg':
            return require('../posters/Poster_08.jpg')
        case 'Poster_10.jpg':
            return require('../posters/Poster_10.jpg')

        default:
            return require('../posters/noposter.png')
    }
}