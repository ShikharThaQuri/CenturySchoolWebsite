const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secret = process.env.PRIVET_KEY;

const genHashPassword = (password) => {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    hash,
    salt,
  };
};

const valHashPassword = (password, hash, salt) => {
  const valHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return hash === valHash;
};

const issueCookie = (user) => {
  const _id = user._id;
  const username = user.username;

  const MAX_AGE = 60 * 60;

  const payload = {
    sub: _id,
    username: username,
    iat: Date.now(),
  };

  const token = jwt.sign(payload, secret, { expiresIn: MAX_AGE });

  const serialized = cookie.serialize("userJwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: MAX_AGE,
    path: "/",
  });

  return { serialized };
};

const valToken = (token) => {
  const { value } = token;

  const tokenResult = jwt.verify(value, secret);

  return { tokenResult };
};

module.exports.genHashPassword = genHashPassword;
module.exports.valHashPassword = valHashPassword;
module.exports.issueCookie = issueCookie;
module.exports.valToken = valToken;
