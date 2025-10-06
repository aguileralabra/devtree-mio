
import * as colors from 'colors';
import app from './server';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(colors.yellow(`Servidor corriendo en el puerto: ${port}`));
});




