module.exports = {
  apps: [
    {
      script: 'pnpm run dev',
      autorestart: false,
      shutdown_with_message: true,
    },
    {
      script: './scripts/protogen.sh',
      watch: '../rust-petshop-server/proto',
    },
  ],
}
