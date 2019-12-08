import React from 'react';
import { useBreadcrumb } from '../src/components/Breadcrumb';
import Link from 'next/link';

const About = () => {
    const items = [
        {
            id: 1,
            text: 'Home',
            href: '/'
        },
        {
            id: 2,
            text: 'About',
        }
    ]

    useBreadcrumb(items);

    return (
        <div>
            <h1>About Page</h1>
            <ul>
                <li>
                    <Link href="/detail">Detail</Link>
                </li>
            </ul>
        </div>
    );
}

export default About;