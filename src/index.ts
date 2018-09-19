import { store } from 'domain/store/main';
import render from 'render';
import startRouters from 'domain/middleware/router';
store.addWatch('renderLoop', render);
startRouters();