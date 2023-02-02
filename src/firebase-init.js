import { initializeApp } from 'firebase/app';
import firebaseConfig from './config-firebase/firebase-keys';

const app = initializeApp(firebaseConfig);

export {app};