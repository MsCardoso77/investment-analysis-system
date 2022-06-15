import bcrypt from "bcryptjs";

export const hash = async (pass) => await bcrypt.hash(pass, 8);

export const compare = async (plainPassword, password) =>
  await bcrypt.compare(plainPassword, password);
