import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { signIn } from '../src/lib/auth';

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({})),
  signInWithEmailAndPassword: jest.fn(),
}));

describe('myFunction', () => {
  beforeEach(() => {
    getAuth.mockClear();
    signInWithEmailAndPassword.mockClear();
  });

  it('debería resolver con la data de usuario', () => {
    const user = { email: 'ivy@test.com', password: 'testpass' };
    signInWithEmailAndPassword.mockImplementation(() => Promise.resolve({ user }));
    return signIn(user.email, user.password).then((resp) => {
      expect(resp).toBe(user);
    });
  });

  it('debería llamar con params correctos', () => {
    const user = { email: 'ivy@test.com', password: 'testpass' };
    return signIn(user.email, user.password).then(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith({}, user.email, user.password);
    });
  });

  it('debería rechazar con la mensaje', () => {
    const err = { code: 'err/pword', message: 'bad password' };
    signInWithEmailAndPassword.mockImplementation(() => Promise.reject(err));
    return signIn('ivy@test.com', '1234').catch(({ message }) => {
      expect(message).toBe(err.message);
    });
  });
});
