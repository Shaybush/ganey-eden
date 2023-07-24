const path = require('path');

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
});