import { LayoutContainer } from './Layout.style';
import Header from './Header';
import { LayoutProps } from '../../types';
import { QuizProvider } from '../../context/QuizContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const Layout = ({ children }: LayoutProps) => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <QuizProvider>
        <LayoutContainer>
          <Header />
          <main>{children}</main>
        </LayoutContainer>
      </QuizProvider>
    </QueryClientProvider>

  );
};

export default Layout;
