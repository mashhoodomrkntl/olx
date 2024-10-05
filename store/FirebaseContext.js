import { createContext } from "react";
import firebase from "firebase/compat/app";
import Firebase from './firebase/config'

const FirebaseContext = createContext(''); // Define the context
export default FirebaseContext;
