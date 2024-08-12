const crypto = require('crypto');
const fs = require('fs');

// Generate a random 256-bit (32-byte) secret
const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Write the secret to the .env file
const writeSecretToEnv = (secret) => {
  const envFilePath = '.env';
  let envContent = '';

  if (fs.existsSync(envFilePath)) {
    envContent = fs.readFileSync(envFilePath, 'utf8');
  }

  const secretLine = `JWT_SECRET=${secret}\n`;
  if (!envContent.includes('JWT_SECRET')) {
    envContent += secretLine;
  } else {
    envContent = envContent.replace(/JWT_SECRET=.*/g, secretLine);
  }

  fs.writeFileSync(envFilePath, envContent, 'utf8');
};

// Generate the secret and write it to the .env file
const secret = generateSecret();
writeSecretToEnv(secret);

console.log('JWT secret generated and saved to .env file.');
