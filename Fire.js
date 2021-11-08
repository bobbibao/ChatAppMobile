import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBnnoF137kc2L3rflz7mkMAr0Zy282b_jI",
                authDomain: "chatapp-24030.firebaseapp.com",
                databaseURL: "https://chatapp-24030-default-rtdb.firebaseio.com",
                projectId: "chatapp-24030",
                storageBucket: "chatapp-24030.appspot.com",
                messagingSenderId: "202276050870",
                appId: "1:202276050870:web:e506f00ad415af65801317",
                measurementId: "G-KZK7T6L54B"
            })
        }
    };
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }
    get db() {
        return firebase.database().ref("messages");
    }
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}
export default new Fire();