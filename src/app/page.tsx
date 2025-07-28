import {Breadcrumb} from '@chakra-ui/react';

import type React from 'react';
import Link from 'next/link';
import {withValue} from '@/app/withValue';

const AdminPage: React.FC = () => {
    return (
        <Breadcrumb.Root color="gray.600">
            <Breadcrumb.Link asChild>
                <Link href="#" prefetch={false}>
                    aaaa
                </Link>
            </Breadcrumb.Link>
        </Breadcrumb.Root>
    );
};

export default withValue(AdminPage);
