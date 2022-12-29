module.exports = [
  {
    context: [
      '/**',
    ],
    target: process.env.HOST || 'http://localhost:8443',
    secure: false,
  },
];
