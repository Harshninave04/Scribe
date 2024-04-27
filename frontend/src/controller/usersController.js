/*****************************Login User*****************************/

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw Error('All fields are required');
  }

  const res = await fetch('/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw Error(data.error);
  }

  localStorage.setItem('token', data.token);
  localStorage.setItem('email', data.email);

  // console.log(data);
  return data;
};

export { loginUser };
