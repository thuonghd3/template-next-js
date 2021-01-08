import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface IProps {
    post?: {
        id: string;
        name: string;
    };
}

const Post: FC<IProps> = ({ post }) => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <br />
            Post name:&nbsp;
            {post && post.name}
            <br />
            post id &nbsp;
            {post && post.id}
        </div>
    );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'post 1',
                id: params && params.id ? params.id : '',
            });
        }, 1000);
    });
    return {
        props: {
            post: res,
            title: 'Post 1',
            description: 'this is description post 1',
        },
    };
};
