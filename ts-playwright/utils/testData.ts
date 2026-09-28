export interface NewUser {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;
}

export function buildUser(): NewUser {
  const id = Date.now();
  return {
    firstName: 'Test',
    lastName: 'User',
    address: '12 MG Road',
    city: 'Pune',
    state: 'MH',
    zipCode: '411041',
    phone: '9876543210',
    ssn: '123-45-6789',
    username: `user_${id}`,
    password: 'Pass@1234',
  };
}