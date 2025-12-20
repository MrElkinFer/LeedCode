function tiempo(entrada) {
  try {
    const nuevo = new Date(entrada);
    console.log(typeof nuevo);
    return nuevo;
  } catch (error) {
    console.error(error);
  }
}

console.log(tiempo("2025-12-31T15:30:00Z"));
