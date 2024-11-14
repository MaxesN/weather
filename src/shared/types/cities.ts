export type City = {
    code: string;
    continent: {
      code: string;
      latitude: string;
      longitude: string;
      name: string;
      nameEs: string;
      nameFr: string;
    };
    country: {
      code: string;
      latitude: string;
      longitude: string;
      name: string;
      nameEs: string;
      nameFr: string;
    };
    county: string | null;
    latitude: string;
    longitude: string;
    name: string;
    postcode: string | null;
    state: {
      code: string;
      latitude: string;
      longitude: string;
      name: string;
    } | null;
  };