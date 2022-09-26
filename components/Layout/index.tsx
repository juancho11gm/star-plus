import { ReactNode } from 'react';
import { theme, breakpoints } from '../../styles/theme';

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {`
          * {
            border: 0;
            box-sizing: border-box;
            margin: 0;
          }

          html {
            font-family: ${theme.fontFamily.sen};
          }

          body {
            background-color: ${theme.colors.background};
            color: ${theme.colors.background};
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
