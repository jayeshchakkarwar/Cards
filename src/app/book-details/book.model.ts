export interface Data {
    author: string;
    birthday: string;
    birthPlace: string;
    books: BookDetails[]
}
export interface BookDetails {
    title: string;
    PublishDate: string;
    purchaseLink: string;
    imageUrl: string;
}