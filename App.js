import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
require("firebase/firestore");
import ENV from './env.json';

const config = {
    apiKey: ENV.FIREBASE_API_KEY,
    authDomain: ENV.FIREBASE_AUTH_DOMAIN,
    databaseURL: ENV.FIREBASE_DB_URL,
    projectId: ENV.FIREBASE_PRJ_ID,
    storageBucket: ENV.FIREBASE_STORAGE,
    messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = StackNavigator({
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    Home: {screen: MemoListScreen},
    MemoDetail: {screen: MemoDetailScreen},
    MemoEdit: {screen: MemoEditScreen},
    MemoCreate: {screen: MemoCreateScreen},
    },{
        navigationOptions: {
           headerTitle: 'Memot',
           headerTintColor: '#FFF',
           headerBackTitle: null,
           headerStyle: {
               backgroundColor: '#265366',
           },
           headerTitleStyle: {
               color: '#FFF',
        },
    },
});

export default App;
