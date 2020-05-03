import { utf8Decode } from 'utils/utf8';

export const sendForm = async (ctx) => {
  const response = await fetch(`${process.env.REACT_APP_FORM_API_URL}/people`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ctx),
  });

  return response.ok;
};

export const getAdvices = async () => {
  try {
    const res = await fetch(
      `${process.env.PUBLIC_URL}${process.env.REACT_APP_NEWS_API_URL}`
    );

    const json = await res.json();

    return json.consejos.map((advice) => ({
      ...advice,
      titulo: utf8Decode(advice.titulo),
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getProvinces = async (ctx) => {
  try {
    const res = await fetch(
      `${process.env.PUBLIC_URL}${process.env.REACT_APP_PROVINCES_API_URL}`
    );

    return await res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getProvinceById = async (ctx) => {
  const provinces = await getProvinces(ctx);

  return provinces.find((province) => province.path === ctx.province) || {};
};
