import { useContext } from 'react';
import { BreadcrumbContext } from './BreadcrumbContext';
import { BreadcrumbItem } from './Breadcrumb';

export const useBreadcrumb = (items: BreadcrumbItem[]) => {
    const context = useContext(BreadcrumbContext);
    context.setBreadcrumbItems(items);
};
