import React, { ReactNode } from 'react';

interface HostLayoutProps {
    children: ReactNode;
}

const HostLayout = ({ children }: HostLayoutProps) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};

export default HostLayout;