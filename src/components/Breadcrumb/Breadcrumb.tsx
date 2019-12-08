import React, { FC } from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
    id: number;
    text: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, separator = '>' }) => {
    return (
        <>
            {
                items
                .map(item =>
                    item.href != null
                        ? <Link href={item.href}>{item.text}</Link>
                        : <span>{item.text}</span>
                )
                .reduce((prev, curr) => prev.length === 0 ? [curr] : [...prev, ` ${separator} `, curr], [])
            }
        </>
    )
}

export default Breadcrumb;