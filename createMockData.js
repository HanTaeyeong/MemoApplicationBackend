import Post from './models/post';

export default function createMockData() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `Post #${i}`,
        body: 'asdifjwilji325909sddfjnionv9sdfj jsadfj 09234jn isdfn fosf ',
        tags: ['Mock', 'Fake', 'Data']
    }))

    Post.insertMany(posts,(e,docs)=>{
        console.log(docs);
    })
}

