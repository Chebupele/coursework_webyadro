import app from './app.js';

const host = '127.0.0.1';
const port = Number(process.env.PORT ?? 8080);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT должен быть целым числом от 1 до 65535');
}

app.listen(port, host, (error) => {
  if (error) {
    console.error(error.message);
    process.exitCode = 1;
    return;
  }

  console.log('Gadget Hub API: http://' + host + ':' + port);
});
