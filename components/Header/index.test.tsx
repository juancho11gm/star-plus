import { prettyDOM, render, screen } from '@testing-library/react';
import '../../tests/mocks/matchMedia.mock';
import * as useUserHook from '@hooks/useUser';
import { Header } from './index';
import { UserProps } from '@context/UserContext';

jest.mock('@firebase/client', () => ({
  loginWithGmail: () => {
    return new Promise((resolve) =>
      resolve({ email: 'juan@gmail.com', photoURL: '', displayName: '' }),
    );
  },
  logout: () => {
    return new Promise(() => {
      console.log('>>> Mocking logout...');
    });
  },
}));

jest.mock('@hooks/useHeaderVisible', () => ({
  useHeaderVisible: () => {
    return {
      isHeaderVisible: true,
    };
  },
}));

jest.mock('@hooks/useUser', () => ({
  __esModule: true,
  ...jest.requireActual('@hooks/useUser'),
}));

describe('<Header/>', () => {
  test('The header has an active user', async () => {
    jest.spyOn(useUserHook, 'useUser').mockReturnValue({
      user: {
        uid: '1',
        email: 'juan@gmail.com',
        displayName: 'juan',
        photoURL: '',
      },
      isLoading: false,
    });

    render(<Header />);
    screen.getByText(/juan/);
    screen.getByText(/Cerrar Sesión/);
  });

  test('The header does not have an active user', async () => {
    jest.spyOn(useUserHook, 'useUser').mockReturnValue({
      user: {} as UserProps,
      isLoading: false,
    });

    render(<Header />);
    const userButton = screen.queryByText(/juan/);
    expect(userButton).toBeNull();
    screen.getByText(/Iniciar Sesión/);
  });
});
