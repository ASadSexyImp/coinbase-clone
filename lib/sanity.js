import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'leae2m3e',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skH1MUVu15uGqtDTJFqG9wKHecxgIHUzamM6mauvEab4QtWbiS9mzI4Nd0ZvgEkqbVipVx7zHAZOyuoG9T2WDVRljQ9jxTM9WQL1fNc2PfbeRHOODs61p0itVD79l19ESsf5Xv9TgnnXXVjkXT65HBIWNb5qFkujIC2RF11H8MiZmNpQwUDk', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})