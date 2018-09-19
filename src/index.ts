
import { store } from 'domain/store/main';
import 'tags';
import render from 'render';
import startRouters from 'domain/middleware/router';
store.addWatch('renderLoop', render);
startRouters();
