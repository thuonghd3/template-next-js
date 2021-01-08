import { FC } from 'react';
import Link from 'next/link';
// import { GetServerSideProps } from 'next';

const HomePage: FC = () => {
    return (
        <>
            <div>Hello World</div>
            <Link href="/about">
                <a>About page</a>
            </Link>
            <br />
            <Link href="/posts/123">
                <a>Post Page</a>
            </Link>
        </>
    );
};

export default HomePage;

// export const getServerSideProps: GetServerSideProps = async () => {
//     return {
//         props: {
//             title: 'aaaa',
//             description: 'bbbb',
//         },
//     };
// };
