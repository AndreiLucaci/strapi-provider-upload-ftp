# strapi-provider-upload-ftp-hash

Uses [promise-ftp]() client module, which is just a `Promise` wrapper around the original [ftp](https://www.npmjs.com/package/ftp) client module.

This solution makes use of the file HASH that `strapi` generates for the files, so files will be uploaded somewhere in the FTP having names such as
`486083b1e1dc405ea5a487f120bc09ca.png` where `486083b1e1dc405ea5a487f120bc09ca` is the generated HASH from strapi.

Configuration parameters:

| Param     | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| Host      | The FTP host                                                             |
| Port      | The FTP port                                                             |
| User      | The login user                                                           |
| Password  | The password for the user                                                |
| Base PATH | The base path inside FTP where the files will be uploaded                |
| Base URL  | The base url from which the direct link to the image will be constructed |

Example:
Having such a configuration

```
{
  baseUrl: 'https://example.com/images/'
}
```

the resulting url usable from `strapi` would be something like:
`https://example.com/images/486083b1e1dc405ea5a487f120bc09ca.png`

## NPM

This is available on NPM:

| Description | Information |
| --------- | ------------------------------------------------------------------------ |
| NPM url| https://www.npmjs.com/package/strapi-provider-upload-ftp-hash |
| NPM install | npm i strapi-provider-upload-ftp-hash |

## Resources

- [MIT License](LICENSE.md)

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)
