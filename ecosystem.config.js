module.exports = {
  apps: [
    {
      name: "tulbox",
      script: "npm",
      args: "start",
      env: {
        HOST: "172.26.15.69",
        PORT: 3008,
        NODE_ENV: "production",
        REACT_APP_API_URL: "https://tulbox.vercel.app",
        REACT_APP_RAZORPAY_KEY_ID:
          "pk_test_51PntrtB4DyKXVoFrJtf8AQvqWk7ZWF135gasJFdtvuPfvyVSZ2jOVTjxVDlvUINUPT1RLyUYor7M2SArO3YxsMNI00b81iJGto",
        REACT_APP_RAZORPAY_KEY_SECRET:
          "sk_test_51PntrtB4DyKXVoFr8RFa8D3XGhrPoe0pF0jVYtU5hMZNKF0NZ3c6jEV6GgrJbrsN59pNTNZzhCtUZ2DkyhG0omzb00hFMP5lEq",
        REACT_APP_FIREBASE_API_KEY: "AIzaSyDRkgvOlc9VrD1Ef7MezmR7QbKhVR4rmhc",
        REACT_APP_FIREBASE_AUTH_DOMAIN: "tulbox-e7fbc.firebaseapp.com",
        REACT_APP_FIREBASE_PROJECT_ID: "tulbox-e7fbc",
        REACT_APP_FIREBASE_STORAGE_BUCKET: "tulbox-e7fbc.appspot.com",
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "1279413742",
        REACT_APP_FIREBASE_APP_ID: "1:1279413742:web:109473181e0e3629ffd2ff",
      },
    },
  ],
};
