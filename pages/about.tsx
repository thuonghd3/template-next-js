import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

const HomePage: FC = () => {
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <div>About page</div>
        </>
    );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: 'About Page',
            description: 'This is description about page',
        },
    };
};
