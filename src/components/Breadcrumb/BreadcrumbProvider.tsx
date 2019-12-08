import React, { useState, FC, HTMLAttributes, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BreadcrumbContext } from './BreadcrumbContext';
import Breadcrumb, { BreadcrumbItem } from './Breadcrumb';

export const BreadcrumbProvider: FC<HTMLAttributes<HTMLElement>> = ({
    children,
}) => {
    const router = useRouter();
    const [items, setItems] = useState([] as BreadcrumbItem[]);

    // ページ遷移をした時にパンくずリストを初期化する
    useEffect(() => {
        router.events.on('routeChangeComplete', () => setItems([]));
    }, []);

    const setBreadcrumbItems = (_items: BreadcrumbItem[]) => {
        // コンポーネントの再帰的な描画を防ぐために空の時だけセットする
        if (items.length === 0) {
            setItems(_items);
        }
    };

    return (
        <>
            <BreadcrumbContext.Provider value={{ setBreadcrumbItems }}>
                {<Breadcrumb items={items} />}
                {children}
            </BreadcrumbContext.Provider>
        </>
    );
};
