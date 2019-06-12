# Kuri

## Latar Belakang
[What is encryption](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/):
> Encryption transforms data into another format in such a way that only specific individual(s) can reverse the transformation. It uses a key, which is kept secret, in conjunction with the plaintext and the algorithm, in order to perform the encryption operation. As such, the ciphertext, algorithm, and key are all required to return to the plaintext.

[Why it matters](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/):
> The purpose of encryption is to transform data in order to keep it secret from others, e.g. sending someone a secret letter that only they should be able to read, or securely sending a password over the Internet. Rather than focusing on usability, the goal is to ensure the data cannot be consumed by anyone other than the intended recipient(s).

## Cara Penggunaan
1. Lakukan clone terhadap repository ini
2. Masuk ke direktori dimana folder ini berada
3. Ketikkan perintah :
```
npm install
```
Kemudian
```
node index.js
```
4. Setelah semua _dependencies_ terpasang, API akan berjalan pada :
```
http://localhost:8000
```
5. Lakukan _request_ untuk setiap cipher yang diinginkan
```
http://localhost:8000/caesarencrypt
http://localhost:8000/caesardecrypt
http://localhost:8000/vigenereencrypt
http://localhost:8000/vigeneredecrypt
```

**ALTERNATIF**

Lakukan _request_ pada :
```
https://api.pandyaka.com/cipher/caesarencrypt
https://api.pandyaka.com/cipher/caesardecrypt

https://api.pandyaka.com/cipher/vigenereencrypt
https://api.pandyaka.com/cipher/vigeneredecrypt
```

## Cipher yang Tersedia
1. Caesar Cipher
2. Vigenère Cipher

## Contoh Kasus Uji
### Kasus Uji 1
```
{
  "plaintext" : "PANDYAKA",
  "key" : 3
}
```
![1](https://user-images.githubusercontent.com/38171936/58055264-67930300-7b87-11e9-975c-a522474f14ef.JPG)

### Kasus Uji 2
```
{
  "ciphertext" : "SDQGBDND",
  "key" : 3
}
```
![2](https://user-images.githubusercontent.com/38171936/58055265-682b9980-7b87-11e9-9e21-33604967fe51.JPG)

### Kasus Uji 3
```
{
  "plaintext" : "PANDYAKA",
  "key" : "KEY"
}
```
![3](https://user-images.githubusercontent.com/38171936/58055262-67930300-7b87-11e9-9822-07db0ff8b63c.JPG)

### Kasus Uji 4
```
{
  "ciphertext" : "ZELNCYUE",
  "key" : "KEY"
}
```
![4](https://user-images.githubusercontent.com/38171936/58055263-67930300-7b87-11e9-8d75-c968a58fb8fb.JPG)

## Referensi
https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
https://expressjs.com/en/api.html
