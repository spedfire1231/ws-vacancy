
import { ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 White Sky. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;