import profileReducer, { addPost, deletePost } from './profileReducer';

const state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 17},
            {id: 2, message: 'My first post!', likesCount: 43}
        ],
    };

it('length of post should be incremented', () => {
    // 1. test data
    const action = addPost('new message for today');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    const action = addPost('new message for today');

    const newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('new message for today');
});

it('after deleting length of posts should be decremented', () => {
    const action = deletePost(1);

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it(`after deleting length of posts shouldn't be decremented if postId is incorrect`, () => {
    const action = deletePost(999);

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
