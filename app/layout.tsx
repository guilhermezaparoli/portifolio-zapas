import { GlobalProvider, useGlobalContext } from '@/context/GlobalContext';
import { ReactNode } from 'react';

// export const metadata = {
//   title: 'PropertyPulse | Encontre o aluguel perfeito ',
//   description: 'Encontre o imóvel dos seus sonhos para alugar',
//   keywords: 'alugar, encontrar aluguéis, encontrar imóveis, encontrar casas',
// };
interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {

  return (
      <GlobalProvider>

      <html lang="pt-br">
        <body>
      
          <main>{children}</main>
        {/* <button onClick={()=> setIsLightTheme((prev) => !prev)}>teste</button> */}
        </body>
      </html>
   
      </GlobalProvider>
  );
};

export default MainLayout;